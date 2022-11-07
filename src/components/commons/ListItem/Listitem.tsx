import { FunctionComponent, HTMLProps } from "react";

const Listitem: FunctionComponent<HTMLProps<HTMLLIElement>> = ({
  children,
  ...props
}) => {
  return <li {...props}>{children}</li>;
};

export default Listitem;
