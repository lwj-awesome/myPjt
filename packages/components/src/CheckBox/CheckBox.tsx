import { BsCheck } from "react-icons/bs";
import * as styles from "./checkBox.styles";
import { CheckboxProps } from "./checkBox.types";
const CheckBox = ({
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

export { CheckBox };
