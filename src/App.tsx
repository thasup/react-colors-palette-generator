import { Fragment } from "react";
import { Helmet } from "react-helmet";

import Logo from "@/assets/logo.png";
import HelloWorld from "@/components/HelloWorld/HelloWorld";

import styles from "./App.module.css";

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <main className={styles.main}>
        <img
          className={styles.logo}
          alt="React logo"
          width="400px"
          src={Logo}
        />
        <HelloWorld msg="Hello React + TypeScript + Vite" />
      </main>
    </Fragment>
  );
}
