import { ReactNode } from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  variant?: "contained" | "outlined" | "link";
  rounded?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "orange"
    | "black"
    | "neutral"
    | "slate"
    | "cyan"
    | "black";
  fullwidth?: boolean;
}

export { ButtonProps };
