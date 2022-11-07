import { HTMLProps } from "react";
import classnames from "classnames";

interface ListProps extends HTMLProps<HTMLUListElement> {
  children?: JSX.Element | JSX.Element[];
  direction?: "vertical" | "horizontal";
}

const dir = {
  horizontal: "flex-wrap",
  vertical: "flex-col",
};

const List = ({
  children,
  className,
  direction = "horizontal",
  ...props
}: ListProps) => {
  const cl: string = classnames("flex mb-4 gap-2", dir[direction], className);
  return (
    <ul className={cl} {...props}>
      {children}
    </ul>
  );
};

export default List;
