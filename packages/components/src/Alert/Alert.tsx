import { BsExclamationCircleFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import * as styles from "./alert.styles";
import { main_background_color } from "../colorGroup/backgroundColorSet";
import { ColorType } from "../common.type";

export type AlertShapeType = "subtitle" | "left-accent" | "top-accent";
export type AlertType = "success" | "warnning" | "fail" | "info";
export interface AlertProps {
  shape: AlertShapeType;
  alert: AlertType;
  title: string;
  content: string;
}
const Alert = ({ shape = "top-accent", alert = "success" }: AlertProps) => {
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
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <div
        css={styles.alertStyle((shape = "left-accent"), backColor["success"])}
      >
        <div>{alertIcon("success")}</div>
        <div css={styles.alertContentStyle}>
          <div className="title-style">Title</div>
          <div className="content-style">content</div>
        </div>
      </div>
      <div css={styles.alertStyle((shape = "subtitle"), backColor["info"])}>
        <div>{alertIcon("info")}</div>
        <div css={styles.alertContentStyle}>
          <div className="title-style">Title</div>
          <div className="content-style">content</div>
        </div>
      </div>
      <div
        css={styles.alertStyle((shape = "top-accent"), backColor["warnning"])}
      >
        <div>{alertIcon("warnning")}</div>
        <div css={styles.alertContentStyle}>
          <div className="title-style">Title</div>
          <div className="content-style">content</div>
        </div>
      </div>
      <div css={styles.alertStyle((shape = "top-accent"), backColor["fail"])}>
        <div>{alertIcon("fail")}</div>
        <div css={styles.alertContentStyle}>
          <div className="title-style">Title</div>
          <div className="content-style">content</div>
        </div>
      </div>
    </div>
  );
};

export { Alert };

