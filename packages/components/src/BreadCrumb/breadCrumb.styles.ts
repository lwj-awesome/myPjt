import { css } from "@emotion/react";
import { fontVars } from "@mypjt/themes";
export const breadCrumbStyle = css`
  display: flex;
  gap: 8px;
`;

export const breadCrumbInnerStyle = css`
  display: flex;
  gap: 8px;
  ${fontVars.typography.text.md}
  .separator-style {
    line-height: 28px;
  }
`;
