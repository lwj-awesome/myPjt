import { css } from "@emotion/react";
import { ColorType } from "../common.type";
import { main_background_color } from "../colorGroup/backgroundColorSet";
import {
  main_border_color,
  readOnly_border_color,
} from "../colorGroup/borderColorSet";
import { fontVars, vars } from "@mypjt/themes";
import {
  main_text_color,
  readOnly_text_color,
} from "../colorGroup/textColorSet";

export const checkBoxStyle = (
  checkColor: ColorType,
  isReadOnly: boolean,
) => css`
  input[type="checkbox"] {
    display: none;
  }
  label {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: ${isReadOnly
      ? `1px solid ${readOnly_border_color}`
      : `1px solid ${main_border_color[checkColor]}`};
    border-radius: 4px;
    cursor: pointer;
    position: relative;
  }
  label .label-icon {
    position: absolute;
  }
  label span {
    position: absolute;
    top: -6px;
    left: 26px;
    ${fontVars.typography.text.lg}
    color: ${isReadOnly
      ? `${readOnly_text_color}`
      : `${main_text_color["gray"]}`}
  }

  input[type="checkbox"]:checked + label {
    background-color: ${isReadOnly
      ? `${readOnly_border_color}`
      : `${main_background_color[checkColor]}`};
  }
`;
