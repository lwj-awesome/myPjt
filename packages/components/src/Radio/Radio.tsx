import { HTMLAttributes, useState } from "react";
import * as styles from "./radio.styles";
import { ColorType } from "../common.type";

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  color: ColorType;
  value: string;
  isReadOnly: boolean;
  text: string;
}

const Radio = ({
  color = "red",
  value = "Radio Label",
  isReadOnly = true,
  text = "Radio",
  ...props
}: RadioProps) => {
  return (
    <div css={styles.radioLayoutStyle(color, isReadOnly)}>
      <input
        type="radio"
        className="radio-input"
        checked={true}
        value={value}
        readOnly={isReadOnly}
        disabled={isReadOnly}
        {...props}
      />
      <label htmlFor={value} className="radio-label"></label>
      {<span className="radio-text">{text}</span>}
    </div>
  );
};

export { Radio };
