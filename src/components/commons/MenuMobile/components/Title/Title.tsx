import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <div className="mb-4 font-bold text-sm text-black">{children}</div>;
};

export default Title;
