import { ComponentProps } from "react";
import classnames from "classnames";

interface DividerProps extends ComponentProps<"div"> {}

const Divider = ({ className, children, ...props }: DividerProps) => {
  const cl = classnames(className, "bg-zinc-200 dark:bg-zinc-200 h-px");
  return <div {...props} className={cl}></div>;
};

export default Divider;
