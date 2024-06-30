import * as styels from "./textArea.styles";
import { TextAreaProps } from "./textArea.tyeps";

const TextArea = ({
  isDanger = false,
  isReadOnly = false,
  ...props
}: TextAreaProps) => {
  return (
    <>
      <textarea
        css={styels.TextAreaStyle(isDanger, isReadOnly)}
        disabled={isReadOnly}
        {...props}
      />
    </>
  );
};

export { TextArea };
