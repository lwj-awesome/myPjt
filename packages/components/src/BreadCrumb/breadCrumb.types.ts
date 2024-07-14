export type SeparatorType = "BsChevronRight" | "BsDash" | "BsArrowRight";
export interface BreadCrumbProps {
  data: string[];
  separator: SeparatorType;
}
