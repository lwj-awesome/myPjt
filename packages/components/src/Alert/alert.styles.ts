import { css } from "@emotion/react";
import { fontVars } from "@mypjt/themes";
import { main_border_color } from "../colorGroup/borderColorSet";
import { ColorType } from "../common.type";
import { sub_background_color } from "../colorGroup/backgroundColorSet";
import { AlertShapeType } from "./alert.types";

export const alertStyle = (shape: AlertShapeType, color: ColorType) => css`
  background-color: ${sub_background_color[color]};
  box-sizing: border-box;
  width: 400px;
  height: 70px;
  padding: 12px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
  ${shape === "left-accent" &&
  css`
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background-color: ${main_border_color[color]};
    }
  `}
  ${shape === "top-accent" &&
  css`
    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: ${main_border_color[color]};
    }
  `}
`;

export const alertContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  .title-style {
    ${fontVars.typography.heading.xs}
  }
  .content-style {
    ${fontVars.typography.text.md}
  }
`;
