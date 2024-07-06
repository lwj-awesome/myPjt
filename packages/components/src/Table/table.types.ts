export interface ColumnItemProps {
  key: string;
  value: string;
  colWidth: string;
}

export interface DataProps {
  [key: string]: any;
}
export interface TableProps {
  data: DataProps[];
  columns: ColumnItemProps[];
}
