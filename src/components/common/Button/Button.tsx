import { ButtonHTMLAttributes } from "react";
import { ButtonVariant } from "./Button.constants";
import styless from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = ButtonVariant.Default,
  children,
  ...rest
}: IButton) {
  let buttonClass = styless.buttonBase;
  switch (variant) {
    case ButtonVariant.Default:
      buttonClass += ` ${styless.buttonDefault}`;
      break;
    case ButtonVariant.Disabled:
      buttonClass += ` ${styless.buttonDisabled}`;
      break;
    case ButtonVariant.Outlined:
      buttonClass += ` ${styless.buttonOutlined}`;
      break;
    case ButtonVariant.Text:
      buttonClass += ` ${styless.buttonText}`;
      break;
  }

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}
