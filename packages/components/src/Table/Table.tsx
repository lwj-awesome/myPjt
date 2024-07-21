import * as styles from "./table.styles";
import { TableProps } from "./table.types";

const Table = ({ data, columns }: TableProps) => (
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
