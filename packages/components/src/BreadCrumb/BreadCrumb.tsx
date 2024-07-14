import * as styles from "./breadCrumb.styles";
import { BsChevronRight } from "react-icons/bs";
import { BsDash } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BreadCrumbProps, SeparatorType } from "./breadCrumb.types";

const datas = ["link1", "link2", "link3", "link4", "link5"];

const BreadCrumb = ({
  data = datas,
  separator = "BsChevronRight",
}: BreadCrumbProps) => {
  /** @desc 브레드크럼의 세퍼레이터를 설정하는 스위치 */
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
