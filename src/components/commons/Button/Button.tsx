import React from "react";
import classnames from "classnames";
import { ButtonProps } from "./buttonProps";
import { classes } from "./button.style";

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
      classes.base,
      classes.sizes[size],
      { "rounded-md": rounded },
      { border: variant !== "link" },
      "text-white",
      { "w-full": fullwidth },
      classes.colors.variants[variant][color],
      { [classes.disabled]: disabled },
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
