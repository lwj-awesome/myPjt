import { SerializedStyles, css } from "@emotion/react";
import { CardModeType } from "./card.types";
import {
  sub_background_color,
  white_background_color,
} from "../colorGroup/backgroundColorSet";
import { sub_border_color } from "../colorGroup/borderColorSet";

const badgeSwitch = (mode: CardModeType): SerializedStyles => {
  switch (mode) {
    case "elevated":
      return css`
        background-color: ${white_background_color};
        box-shadow: 1px 3px 2px ${sub_border_color["gray"]};
      `;
    case "outline":
      return css`
        background-color: ${white_background_color};
        border: 1px solid ${sub_border_color["gray"]};
      `;
    default:
      return css`
        background-color: ${sub_background_color["gray"]};
      `;
  }
};

export const CardStyle = (
  mode: CardModeType,
  height: number,
  width: number,
) => css`
  ${badgeSwitch(mode)}
  border-radius: 8px;
  width: ${width}px;
  height: ${height}px;
`;
