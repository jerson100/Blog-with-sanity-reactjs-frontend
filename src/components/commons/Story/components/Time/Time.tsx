import { ReactNode } from "react";
import classnames from "classnames";

interface TimeProps {
  className?: string;
  children?: ReactNode;
}

const Time = ({ className, children }: TimeProps) => {
  const cl = classnames("text-[11px]", "text-xs", className);
  return <div className={cl}>{children}</div>;
};

export default Time;
