import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import parseTime from "../utils";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "./components/Layout";
import BreadCrumbs from "./components/BreadCrumbs";
import { GetRollingRetention } from "./api/user";
import RenderLineChart from "./components/LineChart";

export default function RollingRetention() {
  const router = useRouter();
  const cFormat = "{d}.{m}.{y}";
  // локальный стейт
  const [dataRollingRetention, setDataRollingRetention] = useState<string>("0");

  function handleSubmit() {
    router.push("/");
  }

  function getDateRetention() {
    return `На ${parseTime(Date.now(), cFormat)}`;
  }

  async function handleCalculate() {
    const res = await GetRollingRetention();
    if (res) {
      setDataRollingRetention(res.data);
    }
  }

  return (
    <>
      <Head>
        <title>Full stack developer Задание - Rolling Retention 7 day</title>
        <meta name="description" content="Full stack developer Задание" />
      </Head>
      <Layout>
        <Container maxWidth="lg">
          <BreadCrumbs title="Rolling Retention 7 day"></BreadCrumbs>

          <Container className="container">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleCalculate}
                >
                  Calculate
                </Button>

                <h1>
                  Rolling Retention 7 day - {getDateRetention()}=
                  {dataRollingRetention}
                </h1>

                <RenderLineChart></RenderLineChart>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Layout>
    </>
  );
}
