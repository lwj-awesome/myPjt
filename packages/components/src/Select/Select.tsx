import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

import * as styles from "./select.styles";
import { useState } from "react";

const data = [
  {
    key: 1,
    value: "123",
    label: "가나다라",
  },
  {
    key: 2,
    value: "345",
    label: "마바사",
  },
];
export interface SelectProps {
  value: string | number;
  placeholder: string;
  onClick: (value: string | number) => void;
}
const Test = ({ value, placeholder, onClick }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getLabel = (value: string | number) => {
    const item = data.find((item) => item.value === value);
    return item ? item.label : placeholder;
  };

  return (
    <div css={styles.selectLayoutStyle}>
      <div css={styles.selectStyle} onClick={() => setIsOpen((prev) => !prev)}>
        <div css={styles.selectTextStyle}>{getLabel(value) || placeholder}</div>
        <div className="icon-style">
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      {isOpen && (
        <div css={styles.selectDataStyle}>
          {data?.map((item) => (
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
  );
};

const Select = () => {
  const [test, setTest] = useState<string | number>("");
  const onClick = (va: string | number) => {
    console.log(va);
    setTest(va);
  };
  return (
    <div style={{ width: "200px" }}>
      <Test value={test} placeholder={"placeholder"} onClick={onClick} />
    </div>
  );
};

export { Select };
