export type AlertShapeType = "subtitle" | "left-accent" | "top-accent";
export type AlertType = "success" | "warnning" | "fail" | "info";
export interface AlertProps {
  shape: AlertShapeType;
  alert: AlertType;
  title: string;
  content: string;
}
