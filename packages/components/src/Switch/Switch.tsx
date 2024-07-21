import { useState } from "react";
import * as styles from "./switch.styles";
import { SwitchProps } from "./switch.types";

const Switch = ({
  size,
  onClickSwitch,
  color,
  isOn,
  isReadOnly = false,
}: SwitchProps) => {
  return (
    <div
      onClick={onClickSwitch}
      css={styles.switchStyle({ size, isOn, isReadOnly, color })}
    >
      <div className="switch-circle" />
    </div>
  );
};

export { Switch };
