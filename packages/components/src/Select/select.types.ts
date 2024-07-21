export interface SelectDataProps {
  key: number | string;
  value: number | string;
  label: number | string;
}
export interface SelectProps {
  value: string | number;
  placeholder: string;
  onClick: (value: string | number) => void;
  dataSource: SelectDataProps[];
}
