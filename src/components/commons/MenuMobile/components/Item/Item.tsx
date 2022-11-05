interface ItemProps {
  children: string | number;
  url: string;
}

const Item = ({ children, url }: ItemProps) => {
  return (
    <li>
      <a href={url}>{children}</a>
    </li>
  );
};

export default Item;
