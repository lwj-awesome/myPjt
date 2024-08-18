import { Button } from "../Button";
import { Dimmed } from "../Dimmed";
import * as styles from "./modal.styles";
import { FaX } from "react-icons/fa6";
import { ModalProps } from "./modal.types";

const Modal = ({
  cancelButtonClick,
  confirmButtonClick,
  confirmButtonTitle = "OK",
  cancelButtonTitle = "Cancel",
  content = "Are you sure? You can’t undo this action afterwards.",
  title = "Modal title",
}: ModalProps) => {
  return (
    <>
      <div css={styles.modalLayoutStyle}>
        <div css={styles.modalTitleStyle}>
          <span>{title}</span>
          <div onClick={cancelButtonClick} className="icon-style">
            <FaX size={14} />
          </div>
        </div>
        <div css={styles.modalContentStyle}>{content}</div>
        <div css={styles.modalButtonStyle}>
          <Button
            color="gray"
            mode="solid"
            size="xs"
            text={cancelButtonTitle}
            onClickButton={cancelButtonClick}
          />
          <Button
            color="blue"
            mode="solid"
            size="xs"
            text={confirmButtonTitle}
            onClickButton={confirmButtonClick}
          />
        </div>
      </div>
    </>
  );
};

export { Modal };
