import LinkProps from "./linkProps";
import { Link as LinkRouter } from "react-router-dom";
import classNames from "classnames";
import { BUTTON_LINK_STYLE } from "../../../consts/button.style";

const Link = ({
  children,
  to,
  href,
  className,
  color = "neutral",
  ...props
}: LinkProps) => {
  const cl = classNames("hover:underline", className, BUTTON_LINK_STYLE[color]);
  return (
    <>
      {to ? (
        <LinkRouter to={to} className={cl} {...props}>
          {children}
        </LinkRouter>
      ) : (
        <a href={href} {...props} className={cl}>
          {children}
        </a>
      )}
    </>
  );
};

export default Link;
