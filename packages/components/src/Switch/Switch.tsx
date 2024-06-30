import { useState } from "react";
import * as styles from "./switch.styles";
import { SwitchProps } from "./switch.types";

const Switch = ({
  size = "sm",
  color = "blue",
  isOn = true,
  isReadOnly = false,
}: SwitchProps) => {
  return (
    <div css={styles.switchStyle({ size, isOn, isReadOnly, color })}>
      <div className="switch-circle" />
    </div>
  );
};

export { Switch };
