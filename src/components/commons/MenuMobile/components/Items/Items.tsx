import { ComponentProps } from "react";
import classnames from "classnames";
import Item from "../Item";
import List from "../List";
import Title from "../Title";
import Divider from "../../../Divider";

interface ItemsProps extends ComponentProps<"div"> {
  children: JSX.Element | JSX.Element[];
  divider?: boolean;
}

const Items = ({
  divider = false,
  children,
  className,
  ...props
}: ItemsProps) => {
  const cl = classnames("p-4", className);
  return (
    <>
      <div className={cl} {...props}>
        {children}
      </div>
      {divider && <Divider />}
    </>
  );
};

Items.Item = Item;
Items.List = List;
Items.Title = Title;

export default Items;
