import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import * as styles from "./accordion.styles";
import { useState } from "react";
import { AccordionProps } from "./accordion.types";

const Accordion = ({ title, content, width = 500 }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div css={styles.accordianLayoutStyle(width)}>
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
