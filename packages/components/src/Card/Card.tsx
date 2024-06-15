import { CardProps } from "./card.types";
import * as styles from "./card.styles";
const Card = ({ mode = "elevated", height = 100, width = 100 }: CardProps) => {
  return <div css={styles.CardStyle(mode, height, width)} />;
};

export { Card };
