interface ContentProps {
  children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div>{children}</div>;
};

export default Content;
