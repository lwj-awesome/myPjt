export type SeparatorType = "BsChevronRight" | "BsDash" | "BsArrowRight";
export interface BreadCrumbProps {
  data: string[];
  separator: SeparatorType;
}

import * as styles from "./breadCrumb.styles";
import { BsChevronRight } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const datas = ["link1", "link2", "link3", "link4", "link5"];

const BreadCrumb = ({
  data = datas,
  separator = "BsChevronRight",
}: BreadCrumbProps) => {
  const separatorIcon = (type: SeparatorType): React.ReactNode => {
    switch (type) {
      case "BsChevronRight":
        return <BsArrowRight />;
      case "BsDash":
        return <BsDash />;
      default:
        return <BsChevronRight />;
    }
  };
  return (
    <div css={styles.breadCrumbStyle}>
      {data.map((item, idx) => (
        <div css={styles.breadCrumbInnerStyle}>
          <span>{item}</span>
          {idx < data.length - 1 && (
            <div className="separator-style">{separatorIcon(separator)}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export { BreadCrumb };
