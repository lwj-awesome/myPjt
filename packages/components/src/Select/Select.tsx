import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import * as styles from "./select.styles";
import { useState } from "react";
import { SelectProps } from "./select.types";

const Select = ({ value, placeholder, onClick, dataSource }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const getLabel = (value: string | number) => {
    const item = dataSource.find((item) => item.value === value);
    return item ? item.label : placeholder;
  };

  return (
    <div>
      <div css={styles.selectLayoutStyle}>
        <div
          css={styles.selectStyle}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div css={styles.selectTextStyle}>
            {getLabel(value) || placeholder}
          </div>
          <div className="icon-style">
            {isOpen ? <BsChevronUp /> : <BsChevronDown />}
          </div>
        </div>
        {isOpen && (
          <div css={styles.selectDataStyle}>
            {dataSource?.map((item) => (
              <span
                onClick={() => onClick(item.value)}
                css={styles.selectDataTextStyle}
                key={item.key}
              >
                {item.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { Select };
