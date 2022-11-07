interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="mb-2">
      {typeof children === "string" ? (
        <h1 className="text-lg text-neutral-800">{children}</h1>
      ) : (
        children
      )}
    </div>
  );
};

export default Header;
