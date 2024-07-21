import { SerializedStyles, css } from "@emotion/react";
import {
  main_background_color,
  readOnly_background_color,
  white_ball_color,
} from "../colorGroup/backgroundColorSet";
import { SwitchProps, excludeXsSizeType } from "./switch.types";

const switchSizeOn = (
  size: excludeXsSizeType,
  isOn: boolean,
): SerializedStyles => {
  switch (size) {
    case "lg":
      return css`
        width: 50px;
        height: 28px;
        .switch-circle {
          left: ${isOn ? "4px" : "24px"};
          width: 24px;
          height: 24px;
        }
      `;
    case "md":
      return css`
        width: 34px;
        height: 20px;
        .switch-circle {
          left: ${isOn ? "2px" : "16px"};
          width: 16px;
          height: 16px;
        }
      `;
    default:
      return css`
        width: 26px;
        height: 16px;
        .switch-circle {
          left: ${isOn ? "2px" : "12px"};
          width: 12px;
          height: 12px;
        }
      `;
  }
};
export const switchStyle = ({
  size,
  color,
  isOn,
  isReadOnly,
}: SwitchProps) => css`
  ${switchSizeOn(size, isOn)}
  background-color: ${isOn
    ? main_background_color[color]
    : readOnly_background_color};
  border-radius: 9999px;
  cursor: pointer;
  position: relative;
  .switch-circle {
    background-color: ${white_ball_color};
    border-radius: 50%;
    transition: left 0.3s;
    position: absolute;
    top: 2px;
  }
  opacity: ${isReadOnly ? "40%" : "100%"};
`;
