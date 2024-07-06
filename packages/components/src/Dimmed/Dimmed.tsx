import { ReactNode, useState } from "react";

interface DimmedProps {
  children: ReactNode;
}
import * as style from "./dimmed.styles";
const Dimmed = ({ children }: DimmedProps) => {
  return (
    <>
      <div css={style.dimmedStyle} />
      <div css={style.dimmedContentStyle}>{children}</div>
    </>
  );
};

export { Dimmed };
