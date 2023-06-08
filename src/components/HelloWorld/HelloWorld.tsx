import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useState } from "react";

import styles from "./HelloWorld.module.css";

interface HelloWorldProps {
  msg: string;
}

const postPrompt = async (query: string): Promise<Response> => {
  if (!query) {
    throw new Error("Missing a query");
  }
  const response = await fetch(
    "https://suppee.shop/general-chatgpt-server/v1/colors/chat",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        query,
      }),
    }
  );

  const data = response.json();
  console.log(response, data);

  return data;
};

export default function HelloWorld(props: HelloWorldProps) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [errMessage, setErrMessage] = useState(
    "Feel free to express your idea."
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target?.value);
  };

  const handleClick = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();
    setLoading(true);
    try {
      console.log("bf", value);

      const result = await postPrompt(value);
      console.log("response : ", result);
    } catch {
      setLoading(false);
      setErrMessage("Something went wrong! Please try again.");
      throw new Error("Something went wrong! Please try again.");
    }
    setLoading(false);
    setErrMessage("Feel free to express your idea.");
  };

  const increment = () => setCount(prevCount => prevCount + 1);

  return (
    <div className={styles.HelloWorld}>
      <h1 data-testid="title">{props.msg}</h1>

      <p>
        Recommended IDE setup:{" "}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          VSCode
        </a>
      </p>

      <p>
        See <code>README.md</code> for more information.
      </p>

      <p>
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noreferrer"
        >
          Vite Docs
        </a>{" "}
        |{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          React Docs
        </a>
      </p>

      <Button
        type="button"
        variant="contained"
        endIcon={<SendIcon />}
        onClick={increment}
      >
        count is: {count}
      </Button>

      <p>
        Edit
        <code>components/HelloWorld/HelloWorld.tsx</code> to test hot module
        replacement.
      </p>

      <FormControl className={styles.colorsForm}>
        <InputLabel htmlFor="my-input">Instruction</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          value={value}
          onChange={handleInputChange}
        />
        <FormHelperText id="my-helper-text">{errMessage}</FormHelperText>
        <LoadingButton
          type="button"
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          onClick={handleClick}
        >
          <span>Fetch</span>
        </LoadingButton>
      </FormControl>
    </div>
  );
}
