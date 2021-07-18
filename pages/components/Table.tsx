import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { useRouter } from "next/router";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { getUsersAsync } from "../../modules/user"; //"../../modules/user";
import parseTime from "../../utils";

const Table = () => {
  const router = useRouter();

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    getUsersAsync().then((rowData: any) =>
      setRowData(
        rowData.map((item: any) => ({
          ...item,
          dateRegistration: parseTime(item.dateRegistration, "{d}.{m}.{y}"),
          dateLastActivity: parseTime(item.dateLastActivity, "{d}.{m}.{y}"),
        }))
      )
    );
  }, []);

  function routeCreateUser() {
    router.push("/createUser");
  }

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <div>
        <Button variant="contained" color="primary" onClick={routeCreateUser}>
          Account create
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            router.push("/rollingRetention");
          }}
        >
          Rolling Retention
        </Button>
      </div>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="id" headerName="UserId"></AgGridColumn>
        <AgGridColumn
          field="dateRegistration"
          headerName="DateRegistration"
        ></AgGridColumn>
        <AgGridColumn
          field="dateLastActivity"
          headerName="DateLastActivity"
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Table;
