import { Box } from "@mui/material";
import { Fragment, useMemo } from "react";

import styles from "./ColorBlock.module.css";

interface Color {
  code: string;
  name: string;
}

interface ColorBlockProps {
  colors: Color[];
}

export default function ColorBlock(props: ColorBlockProps) {
  const { colors } = props;

  const backgroundColors = useMemo(() => {
    if (!colors) {
      return;
    }

    const result = colors?.map((color: Color, index: number) => {
      return (
        <Box
          key={index}
          className={styles.color}
          style={{
            backgroundColor: color.code,
            width: `calc(100%/${colors.length})`,
          }}
          onClick={() => navigator.clipboard.writeText(color.code)}
        >
          <span>{color.code}</span>
          <span>{color.name}</span>
        </Box>
      );
    });

    return result;
  }, [colors]);

  return <Fragment>{backgroundColors}</Fragment>;
}
