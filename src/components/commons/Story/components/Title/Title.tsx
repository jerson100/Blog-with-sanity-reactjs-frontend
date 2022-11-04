import { ReactNode } from "react";
import classnames from "classnames";

interface TitleProps {
  className?: string;
  children?: ReactNode;
  to?: string;
}

const Title = ({ className, children, to = "/" }: TitleProps) => {
  const cl = classnames("font-semibold", className);
  return (
    <h1 className={cl}>
      <a href={to} className="inline-block hover:underline cursor-pointer">
        {children}
      </a>
    </h1>
  );
};

export default Title;
