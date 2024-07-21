import { AllColorType } from "../common.type";
import * as styles from "./color.styles";

const colorName: AllColorType[] = [
  "whiteAlpha",
  "blackAlpha",
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
];
export const colorNumber = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];
const Color = () => {
  return (
    <>
      {colorName.map((colorName, index) => (
        <div key={`${colorName}-${index}`} css={styles.ColorStyle}>
          <div>{colorName}</div>
          <div css={styles.colorNumStyle}>
            {colorNumber.map((colorNum, idx) => {
              return (
                <div
                  css={styles.colorDetailStyle(
                    colorName,
                    colorNum,
                    Math.abs(idx - (colorNumber.length - 1)),
                  )}
                  key={`${colorNum}-${idx}`}
                >
                  {colorNum}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export { Color };
