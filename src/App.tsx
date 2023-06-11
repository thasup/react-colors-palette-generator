import { Fragment } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

import ColorPaletteGenerator from "@/components/ColorPaletteGenerator/ColorPaletteGenerator";

import styles from "./App.module.css";

export default function App() {
  const TRACKING_ID = "G-K2CTP3W6Q8";
  ReactGA.initialize(TRACKING_ID);

  return (
    <Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Dosis&display=swap"
        />
      </Helmet>
      <main className={styles.main}>
        <ColorPaletteGenerator />
      </main>
    </Fragment>
  );
}
