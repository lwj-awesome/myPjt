import { css } from "@emotion/react";
import { fontVars } from "@mypjt/themes";
import { main_text_color, sub_text_color } from "../colorGroup/textColorSet";
import {
  sub_background_color,
  table_back_color,
} from "../colorGroup/backgroundColorSet";

export const tableLayoutStyle = css`
  background-color: ${table_back_color};
  padding: 10px;
  border-radius: 20px;
`;

export const tableColumnStyle = css`
  tr {
    height: 40px;
  }
`;

export const tableColumnTextStyle = (colWidth: string) => css`
  ${fontVars.typography.heading.sm}
  color: ${sub_text_color["gray"]};
  width: ${colWidth}px;
  min-width: 130px;
  padding: 6px;
`;

export const tableDataStyle = css`
  tr {
    height: 50px;
  }
  tr:nth-child(even) {
    background-color: ${sub_background_color["gray"]};
  }
`;
export const tableDataTextStyle = (colWidth: string) => css`
  ${fontVars.typography.text.md}
  color: ${main_text_color["gray"]};
  padding: 6px;
`;
