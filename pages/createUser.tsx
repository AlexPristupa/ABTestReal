import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { CreateUser } from "./api/user";
import Message from "./components/Message";
import { TextField } from "@material-ui/core";
import { parseTime } from "./utils";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "./components/Layout";
import BreadCrumbs from "./components/BreadCrumbs";

export default function CreateUsers() {
  const router = useRouter();

  // локальный стейт
  const [dateRegistration, setDateRegistration] = useState<string>("");
  const [dateLastActivity, setDateLastActivity] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [successResponse, setSuccessResponse] = useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(true);

  useEffect(disabledButtonSend, [
    dateRegistration,
    dateLastActivity,
    success,
    successResponse,
  ]);

  /**
   * @description определить доступность кнопки отправки
   */
  function disabledButtonSend() {
    setDisabledButton(dateRegistration !== "" && dateLastActivity !== "");
  }

  function handleSubmit() {
    CreateUser({ dateRegistration, dateLastActivity })
      .then(() => {
        setMessage("Пользователь создан");
        setSuccess(true);
        setSuccessResponse(true);
        router.push("/");
      })
      .catch((err) => {
        setMessage(err.value);
        setOpen(true);
        setSuccessResponse(false);
      });
  }

  /**
   * @decription Callback Закрытия модалки
   * @param rc - признак открытия / закрытия
   */
  function updateOpen(rc: boolean) {
    setOpen(rc);
  }

  function getDefaultDate() {
    return parseTime(new Date().getDate(), "{d}.{m}.{y}");
  }

  return (
    <>
      <Head>
        <title>Full stack developer Задание</title>
        <meta name="description" content="Full stack developer Задание" />
      </Head>
      <Layout>
        <Container maxWidth="lg">
          <BreadCrumbs title="CREATE USER"></BreadCrumbs>
          <form className="container" onSubmit={handleSubmit}>
            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    id="DateRegistration"
                    label="DateRegistration"
                    type="date"
                    defaultValue={getDefaultDate}
                    value={dateRegistration}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setDateRegistration(e.target.value)}
                  />
                  <TextField
                    id="DateRegistration"
                    label="DateRegistration"
                    type="date"
                    defaultValue={getDefaultDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => setDateLastActivity(e.target.value)}
                  />
                </Grid>
                <Button
                  disabled={!disabledButton}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Grid>
            </Container>
          </form>
          <Message
            message={message}
            successResponse={successResponse}
            open={open}
            updateOpen={updateOpen}
          />
        </Container>
      </Layout>
    </>
  );
}
