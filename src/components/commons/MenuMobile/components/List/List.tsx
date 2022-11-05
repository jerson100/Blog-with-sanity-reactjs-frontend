interface ListProps {
  children: JSX.Element | JSX.Element[];
}

const List = ({ children }: ListProps) => {
  return <ul className="grid grid-cols-2 gap-x-4 gap-y-4">{children}</ul>;
};

export default List;
