import { css } from "@emotion/react";
import { readOnlystyle } from "../common.styles";
import {
  main_border_color,
  sub_border_color,
} from "../colorGroup/borderColorSet";
import { fontVars } from "@mypjt/themes";
import { main_text_color } from "../colorGroup/textColorSet";

export const TextAreaStyle = (isDanger: boolean, isReadOnly: boolean) => css`
  outline: none;
  border: none;
  color: ${main_text_color["gray"]};
  ${fontVars.typography.text.sm}
  ${isReadOnly && readOnlystyle}
  opacity: ${isReadOnly ? "40%" : "100%"};
  box-shadow: ${!isDanger && `1px 1px 1px 1px ${sub_border_color["gray"]}`};
  border: ${isDanger && `1px solid ${main_border_color.red}`};
  border-radius: 6px;
  padding: 10px;
`;
