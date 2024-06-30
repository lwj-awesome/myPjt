import * as styles from "./radio.styles";
import { RadioProps } from "./radio.types";

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
