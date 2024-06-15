import { TagProps } from "./tag.types";
import * as styles from "./tag.styles";

const Tag = ({
  mode = "solid",
  color = "teal",
  text = "Tag",
  size = "lg",
  onClickTagButton = () => console.log("click Tag"),
}: TagProps) => {
  return (
    <div css={styles.tagStyle(color, mode, size)} onClick={onClickTagButton}>
      <span>{text}</span>
      <span className="tag-delete-button">x</span>
    </div>
  );
};

export { Tag };
