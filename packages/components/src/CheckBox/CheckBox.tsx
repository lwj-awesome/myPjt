import { HTMLAttributes, useState } from "react";

import { BsCheck } from "react-icons/bs";
import { ColorType } from "../common.type";
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string | number;
  checkColor?: ColorType;
  isReadOnly: boolean;
}
import * as styles from "./checkBox.styles";
const Test = ({
  label,
  value,
  checkColor = "blue",
  isReadOnly,
  ...props
}: CheckboxProps) => {
  return (
    <div css={styles.checkBoxStyle(checkColor, isReadOnly)}>
      <input
        type="checkbox"
        id={`${label}`}
        value={value}
        disabled={isReadOnly}
        {...props}
      />
      <label htmlFor={`${label}`}>
        <BsCheck color="white" className="label-icon" />
        <span>{label}</span>
      </label>
    </div>
  );
};

const CheckBox = () => {
  const tesData = [
    {
      label: "one",
      value: "123",
    },
    {
      label: "1",
      value: "234",
    },
    {
      label: "2",
      value: "345",
    },
  ];
  const [t, setT] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    const test = e.currentTarget.value;
    setT([test]);
  };
  console.log(t);
  const tt = ["234"];
  return (
    <div>
      {tesData.map((item) => (
        <>
          <Test
            isReadOnly={false}
            value={item.value}
            label={item.label}
            onChange={onChange}
          />
        </>
      ))}
    </div>
  );
};

export { CheckBox };
