import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

import * as styles from "./accordion.styles";
import { useState } from "react";

const data =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
export interface SelectProps {
  title: string;
  content: React.ReactNode;
}
const Accordion = ({ title = "Accordion", content = data }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div css={styles.accordianLayoutStyle}>
      <div
        css={styles.accordianStyle}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div css={styles.accordianTextStyle}>{title}</div>
        <div className="icon-style">
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      {isOpen && (
        <div css={styles.accordianContentStyle}>
          <span>{content}</span>
        </div>
      )}
    </div>
  );
};

export { Accordion };
