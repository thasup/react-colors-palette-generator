import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoadingButton from "@mui/lab/LoadingButton";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";

import ColorBlock from "@/components/ColorBlock/ColorBlock";
import { postPrompt } from "@/services/api";

import styles from "./ColorPaletteGenerator.module.css";

interface Color {
  code: string;
  name: string;
}

export default function ColorPaletteGenerator() {
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState<Color[]>([]);
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("Feel free to express your idea.");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target?.value);
  };

  const generatePalette = async (
    event?: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event?.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const { result } = await postPrompt(value);

      if (!result.length) {
        throw new Error("Something went wrong! Please try again.");
      }

      setColors(result);
    } catch {
      setIsError(true);
      setMessage("Something went wrong! Please try again.");
      setLoading(false);
      throw new Error("Something went wrong! Please try again.");
    }
    setIsError(false);
    setMessage("Successfully generated!");
    setLoading(false);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      generatePalette(event as any);
    }
  };

  return (
    <div className={styles.container}>
      <FormControl classes={{ root: styles.colorsForm }}>
        <TextField
          id="main-input"
          aria-describedby="my-helper-text"
          label="Instruction"
          size="small"
          color="primary"
          className={styles.textInput}
          error={isError}
          value={value}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <LoadingButton
          type="button"
          endIcon={<AutoAwesomeIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          onClick={generatePalette}
        >
          <span>Generate</span>
        </LoadingButton>
        <FormHelperText id="helper-text" className={styles.messageText}>
          {message}
        </FormHelperText>
      </FormControl>

      <div className={styles.colorsBlock}>
        <ColorBlock colors={colors} />
      </div>
    </div>
  );
}
