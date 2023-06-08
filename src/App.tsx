import { Fragment } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import Logo from "@/assets/logo.png";
import HelloWorld from "@/components/HelloWorld/HelloWorld";

import styles from "./App.module.css";

export default function App() {
  const TRACKING_ID = "G-K2CTP3W6Q8";
  ReactGA.initialize(TRACKING_ID);

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
