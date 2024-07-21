import { Badge } from "../Badge";
import { AllFontType, HeadingFontType } from "../common.type";
import * as styles from "./fontgroup.styles";
const headingTypeName: HeadingFontType[] = [
  "4xl",
  "3xl",
  "2xl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs",
];

const textTypeName: AllFontType[] = ["6xl", "5xl", ...headingTypeName];

const FontGroup = () => {
  return (
    <div css={styles.layoutStyle}>
      <div css={styles.fontGroupStyle}>
        <Badge color="blue" mode="solid" text="Heading" />
        {headingTypeName.map((fontType, idx) => {
          return (
            <div css={styles.headingStyle(fontType)} key={`${fontType}-${idx}`}>
              lwj's storybook-{fontType}
            </div>
          );
        })}
      </div>
      <div css={styles.fontGroupStyle}>
        <Badge color="purple" mode="solid" text="text" />
        {textTypeName.map((fontType, idx) => {
          return (
            <div css={styles.textStyle(fontType)} key={`${fontType}-${idx}`}>
              lwj's storybook-{fontType}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { FontGroup };
