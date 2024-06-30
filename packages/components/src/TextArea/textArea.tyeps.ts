import { HTMLAttributes } from "react";

export interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  isDanger: boolean;
  isReadOnly: boolean;
}
