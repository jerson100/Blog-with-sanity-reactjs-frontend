import { AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
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
}

export default LinkProps;
