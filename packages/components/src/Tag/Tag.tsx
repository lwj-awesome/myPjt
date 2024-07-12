import { TagProps } from "./tag.types";
import * as styles from "./tag.styles";
import { PiMouseMiddleClickDuotone } from "react-icons/pi";

const Tag = ({
  mode ,
  color ,
  text ,
  size ,
  onClickTagButton = () => console.log("click Tag"),
}: TagProps) => {
  return (
    <div css={styles.tagStyle(color, mode, size)} onClick={onClickTagButton}>
      <span>{text}</span>
      <div className="tag-button">
        <PiMouseMiddleClickDuotone />
      </div>
    </div>
  );
};

export { Tag };
