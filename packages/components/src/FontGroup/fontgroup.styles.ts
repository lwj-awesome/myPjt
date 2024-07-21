import { css } from "@emotion/react";
import { fontVars } from "@mypjt/themes";
import { HeadingFontType, AllFontType } from "../common.type";

export const layoutStyle = css`
  display: flex;
  gap: 40px;
`;

export const fontGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const headingStyle = (fontType: HeadingFontType) => css`
  ${fontVars.typography.heading[fontType]}
`;

export const textStyle = (fontType: AllFontType) => css`
  ${fontVars.typography.text[fontType]}
`;
