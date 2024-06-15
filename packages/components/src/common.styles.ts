import { SerializedStyles, css } from "@emotion/react";
import { ColorType, ThreeLayoutModeType } from "./common.type";
import {
  main_background_color,
  sub_background_color,
  white_background_color,
} from "./colorGroup/backgroundColorSet";
import { main_border_color } from "./colorGroup/borderColorSet";
import {
  main_text_color,
  sub_text_color,
  white_text_color,
} from "./colorGroup/textColorSet";

/** @설명 공통 3가지의 mode에 따라서 스타일을 다르게 해주는 switch 문 */
const commonThreeModeStyle = (
  color: ColorType,
  mode: ThreeLayoutModeType,
): SerializedStyles => {
  switch (mode) {
    case "outline":
      return css`
        background-color: ${white_background_color};
        border: 2px solid ${main_border_color[color]};
        color: ${sub_text_color[color]};
      `;
    case "subtitle":
      return css`
        background-color: ${sub_background_color[color]};
        color: ${main_text_color[color]};
      `;
    default:
      return css`
        background-color: ${main_background_color[color]};
        color: ${white_text_color};
      `;
  }
};

export { commonThreeModeStyle };
