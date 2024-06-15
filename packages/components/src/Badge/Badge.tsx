import * as styles from "./badge.styles";
import { BadgeProps } from "./badge.types";

const Badge = ({
  color = "purple",
  text = "BADGE",
  mode = "solid",
}: BadgeProps) => {
  return <div css={styles.badgeStyle(color, mode)}>{text}</div>;
};

export { Badge };
