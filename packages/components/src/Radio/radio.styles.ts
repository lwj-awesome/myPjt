import { css } from "@emotion/react";
import { fontVars, vars } from "@mypjt/themes";
import { ColorType } from "../common.type";
import { main_background_color } from "../colorGroup/backgroundColorSet";
import { gray } from "@mypjt/themes/dist/variables/colors/scale";
import { readOnly_text_color } from "../colorGroup/textColorSet";

export const radioLayoutStyle = (color: ColorType, isReadOnly: boolean) => css`
  display: flex;
  align-items: center;
  gap: 6px;
  /* 기본 라디오 버튼 숨기기 */

  .radio-input {
    display: none;
  }

  /* 커스텀 라디오 버튼 스타일 */
  .radio-label {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid
      ${isReadOnly ? main_background_color.gray : main_background_color[color]};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    text-align: center;
  }

  /* 선택된 상태 스타일 */
  .radio-label::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background: ${isReadOnly
      ? main_background_color.gray
      : main_background_color[color]};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  /* 라디오 버튼이 선택된 경우 스타일 */
  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }

  .radio-text {
    ${fontVars.typography.text.md}
    color: ${isReadOnly && readOnly_text_color};
  }
`;

export const radioLabelStyle = css``;
