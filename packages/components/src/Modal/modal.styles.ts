import { css } from "@emotion/react";
import { table_back_color } from "../colorGroup/backgroundColorSet";
import { fontVars } from "@mypjt/themes";

export const modalLayoutStyle = css`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  max-height: 500px;
  background-color: ${table_back_color};
  box-sizing: border-box;
  border-radius: 6px;
  padding: 20px;
`;

export const modalTitleStyle = css`
  display: flex;
  justify-content: space-between;
  span {
    ${fontVars.typography.heading.sm}
    line-height: 100%;
  }
  .icon-style {
    cursor: pointer;
  }
`;

export const modalContentStyle = css`
  padding: 20px 0px;
`;

export const modalButtonStyle = css`
  display: flex;
  justify-content: space-between;
`;
