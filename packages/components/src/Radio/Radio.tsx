import * as styles from "./radio.styles";
import { RadioProps } from "./radio.types";

const Radio = ({
  color,
  value,
  isReadOnly = false,
  text,
  ...props
}: RadioProps) => {
  return (
    <div css={styles.radioLayoutStyle(color, isReadOnly)}>
      <input
        type="radio"
        className="radio-input"
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
