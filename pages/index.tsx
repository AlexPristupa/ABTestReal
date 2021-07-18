import Container from "@material-ui/core/Container";
import Head from "next/head";
import Layout from "./components/Layout";
import BreadCrumbs from "./components/BreadCrumbs";
import Table from "./components/Table";

export default function Home() {
  return (
    <>
      <Head>
        <title>Full stack developer Задание</title>
        <meta name="description" content="Full stack developer Задание" />
      </Head>
      <Layout>
        <Container maxWidth="lg">
          <BreadCrumbs title="CURRENT"></BreadCrumbs>
          <div className="container">
            <Table></Table>
          </div>
        </Container>
      </Layout>
    </>
  );
}
