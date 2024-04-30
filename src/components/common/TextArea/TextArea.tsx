import { forwardRef, Ref, TextareaHTMLAttributes } from "react";

import styless from "./TextArea.module.css";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function FowardedTextArea(
  { label, ...rest }: ITextArea,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <div className={styless.textareaGroup}>
      <label>{label}</label>
      <textarea ref={ref} {...rest} />
    </div>
  );
}

const TextArea = forwardRef(FowardedTextArea);
export { TextArea };
