import React from "react";
import classnames from "classnames";
import { ButtonProps } from "./ButtonProps";
import {
  BUTTON_DISABLED_STYLE,
  BUTTON_FULL_WIDTH_STYLE,
  BUTTON_ROOT_STYLE,
  BUTTON_SIZE_STYLE,
  BUTTON_VARIANTS_STYLE,
} from "../../../consts/button.style";
import { useNavigate } from "react-router-dom";

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
      onClick,
      to,
      options,
      ...props
    },
    ref
  ) => {
    const navigate = useNavigate();
    const classN = classnames(
      BUTTON_ROOT_STYLE,
      { [BUTTON_SIZE_STYLE[size]]: variant !== "link" },
      { "rounded-md": rounded },
      { border: variant !== "link" },
      { [BUTTON_FULL_WIDTH_STYLE]: fullwidth },
      //   "text-white",
      BUTTON_VARIANTS_STYLE[variant][color],
      { [BUTTON_DISABLED_STYLE]: disabled },
      className
    );
    return (
      <button
        {...props}
        ref={ref}
        className={classN}
        onClick={(e) => {
          onClick && onClick(e);
          to && navigate(to, options);
        }}
      >
        {children}
      </button>
    );
  }
);

export default Button;
