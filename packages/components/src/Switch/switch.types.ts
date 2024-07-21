import { ColorType, CommonSizeType } from "../common.type";
export type excludeXsSizeType = Exclude<CommonSizeType, "xs">;
export interface SwitchProps {
  size: excludeXsSizeType;
  color: ColorType;
  isOn: boolean;
  isReadOnly?: boolean;
  onClickSwitch?: () => void;
}
