import * as styles from "./badge.styles";
import { BadgeProps } from "./badge.types";

const Badge = ({
  color ,
  text ,
  mode ,
}: BadgeProps) => {
  return <div css={styles.badgeStyle(color, mode)}>{text}</div>;
};

export { Badge };
