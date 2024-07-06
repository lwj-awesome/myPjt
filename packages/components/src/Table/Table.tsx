const value: DataProps[] = [
  {
    no: 0,
    groupId: 120099029854,
    groupName: "그룹 명 입니다wwd.",
    create: true,
  },
  {
    no: 0,
    groupId: 120099029854,
    groupName: "그룹 명 입니다.",
    create: true,
  },
  {
    no: 0,
    groupId: 120099029854,
    groupName: "그룹 명 입니다.",
    create: true,
  },
  {
    no: 0,
    groupId: 120099029854,
    groupName: "그룹 명 입니다.",
    create: true,
  },
];
const column: ColumnItemProps[] = [
  { key: "no", value: "No", colWidth: "1" },
  { key: "groupId", value: "그룹 ID", colWidth: "1" },
  { key: "groupName", value: "그룹 명", colWidth: "1" },
  { key: "create", value: "C", colWidth: "1" },
];
import * as styles from "./table.styles";
import { ColumnItemProps, DataProps, TableProps } from "./table.types";
const Table = ({ data = value, columns = column }: TableProps) => (
  <table css={styles.tableLayoutStyle}>
    <thead css={styles.tableColumnStyle}>
      <tr>
        {columns.map((column) => (
          <td
            css={styles.tableColumnTextStyle(column.colWidth)}
            key={column.key}
          >
            {column.value}
          </td>
        ))}
      </tr>
    </thead>
    <tbody css={styles.tableDataStyle}>
      {data.map((item, index) => (
        <tr key={index}>
          {columns.map((column) => (
            <td
              css={styles.tableDataTextStyle(column.colWidth)}
              key={column.key}
            >
              {item[column.key].toString()}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export { Table };
