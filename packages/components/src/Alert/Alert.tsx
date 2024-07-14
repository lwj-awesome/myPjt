import { BsExclamationCircleFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import * as styles from "./alert.styles";
import { main_background_color } from "../colorGroup/backgroundColorSet";
import { ColorType } from "../common.type";
import { AlertProps, AlertType } from "./alert.types";

const Alert = ({ shape, alert, title, content }: AlertProps) => {
  /** @desc  alertType에 따른 Alert 내부 아이콘 변경 스위치 */
  const alertIcon = (type: AlertType): React.ReactNode => {
    switch (type) {
      case "success":
        return <BsCheckCircleFill color={main_background_color["green"]} />;
      case "warnning":
        return (
          <BsExclamationCircleFill color={main_background_color["orange"]} />
        );
      case "fail":
        return <BsExclamationCircleFill color={main_background_color["red"]} />;
      default:
        return <BsFillInfoCircleFill color={main_background_color["blue"]} />;
    }
  };
  type ColorSetProps = {
    [key in AlertType]: ColorType;
  };
  const backColor: ColorSetProps = {
    success: "green",
    warnning: "orange",
    fail: "red",
    info: "blue",
  };
  return (
    <div css={styles.alertStyle((shape = shape), backColor[alert])}>
      <div>{alertIcon(alert)}</div>
      <div css={styles.alertContentStyle}>
        <div className="title-style">{title}</div>
        <div className="content-style">{content}</div>
      </div>
    </div>
  );
};

export { Alert };
