import { Provider } from "jotai";
import type { NextPage } from "next";
import Head from "next/head";
import Form from "../components/Form";
import FormWithScope from "../components/FormWithScope";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Without Provider (global states everywhere)</h1>
        <Form title="Form 1" />
        <Form title="Form 2" />
        
        <hr />

        <h1>With Provider (local states)</h1>
        <Provider>
          <Form title="Form 1" />
        </Provider>
        <Provider>
          <Form title="Form 2" />
        </Provider>

        <hr />
        
        <h1>With Provider "scope" (local states)</h1>
        <Provider scope="form1">
          <FormWithScope title="Form 1" scope="form1" />
        </Provider>
        <Provider scope="form2">
          <FormWithScope title="Form 2" scope="form2" />
        </Provider>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Jotai (for state management)
        </a>
      </footer>
    </div>
  );
};

export default Home;
