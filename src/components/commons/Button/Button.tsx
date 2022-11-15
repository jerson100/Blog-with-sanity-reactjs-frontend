import React from "react";
import classnames from "classnames";
import { ButtonProps } from "./buttonProps";
import {
  BUTTON_DISABLED_STYLE,
  BUTTON_FULL_WIDTH_STYLE,
  BUTTON_ROOT_STYLE,
  BUTTON_SIZE_STYLE,
  BUTTON_VARIANTS_STYLE,
} from "../../../consts/button.style";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "contained",
      className,
      rounded = false,
      disabled = false,
      size = "md",
      color = "primary",
      fullwidth = false,
      ...props
    },
    ref
  ) => {
    const classN = classnames(
      BUTTON_ROOT_STYLE,
      BUTTON_SIZE_STYLE[size],
      { "rounded-md": rounded },
      { border: variant !== "link" },
      "text-white",
      { [BUTTON_FULL_WIDTH_STYLE]: fullwidth },
      BUTTON_VARIANTS_STYLE[variant][color],
      { [BUTTON_DISABLED_STYLE]: disabled },
      className
    );
    return (
      <button {...props} ref={ref} className={classN}>
        {children}
      </button>
    );
  }
);

export default Button;
