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

export type AllColorType = ColorType | "whiteAlpha" | "blackAlpha";

export type ColorSetProps = {
  [key in ColorType]: string;
};

/** @설명 공통 3가지 레이아웃 모드의 타입 */
export type ThreeLayoutModeType = "solid" | "outline" | "subtitle";

/** @설명 공통으로 사용할 사이즈 타입  */
export type CommonSizeType = "lg" | "md" | "sm" | "xs";

/** @설명 전체 폰트 타입 */
export type AllFontType =
  | "6xl"
  | "5xl"
  | "4xl"
  | "3xl"
  | "2xl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs";

export type HeadingFontType = Exclude<AllFontType, "6xl" | "5xl">;
