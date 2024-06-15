/** @설명 공통 컬러 및 셋 타입 */
export type ColorType =
  | "gray"
  | "blue"
  | "teal"
  | "green"
  | "red"
  | "purple"
  | "pink"
  | "orange"
  | "yellow"
  | "cyan";

export type ColorSetProps = {
  [key in ColorType]: string;
};

/** @설명 공통 3가지 레이아웃 모드의 타입 */
export type ThreeLayoutModeType = "solid" | "outline" | "subtitle";
