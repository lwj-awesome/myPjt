import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export type CardModeType = "elevated" | "outline" | "filled";
export interface CardProps {
  mode: CardModeType;
  width?: number;
  height?: number;
  children: React.ReactNode;
}
