import { SerializedStyles, css } from "@emotion/react";
import {
  readOnly_background_color,
  sub_background_color,
} from "../colorGroup/backgroundColorSet";
import { CommonSizeType } from "../common.type";
import { fontVars } from "@mypjt/themes";
import { main_border_color } from "../colorGroup/borderColorSet";
import { readOnly_text_color } from "../colorGroup/textColorSet";

const InputFont = (size: CommonSizeType): SerializedStyles => {
  switch (size) {
    case "lg":
      return css`
        ${fontVars.typography.text.lg}
        padding: 4px 16px;
      `;
    case "md":
      return css`
        ${fontVars.typography.text.md}
        padding: 4px 16px;
      `;
    case "sm":
      return css`
        ${fontVars.typography.text.sm}
        padding: 4px 12px;
      `;
    default:
      return css`
        ${fontVars.typography.text.xs}
        padding: 4px 8px;
      `;
  }
};

const readOnlystyle = css`
  background-color: ${readOnly_background_color};
  color: ${readOnly_text_color};
`;

export const InputStyle = (
  size: CommonSizeType,
  isRound: boolean,
  isDanger: boolean,
  isReadOnly: boolean,
) => css`
  input {
    ${InputFont(size)}
    outline: none;
    border: none;
    background-color: ${sub_background_color.gray};
    border: ${isDanger && `1px solid ${main_border_color.red}`};
    border-radius: ${isRound ? "4px" : "0px"};
    ${isReadOnly && readOnlystyle}
  }
`;
