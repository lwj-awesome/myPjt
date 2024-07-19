import { CardProps } from "./card.types";
import * as styles from "./card.styles";
const Card = ({ mode, height = 120, width = 120, children }: CardProps) => {
  return <div css={styles.CardStyle(mode, height, width)}>{children}</div>;
};

export { Card };
