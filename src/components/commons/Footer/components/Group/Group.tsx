import Content from "../Content";
import Header from "../Header";
import classnames from "classnames";

interface GroupProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Group = ({ children, className }: GroupProps) => {
  const cl: string = classnames("flex flex-col", className);
  return <div className={cl}>{children}</div>;
};

Group.Header = Header;
Group.Content = Content;

export default Group;
