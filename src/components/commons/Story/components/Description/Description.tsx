import { ReactNode } from "react";

interface DescriptionProps {
  children: ReactNode;
}

const Description = ({ children }: DescriptionProps) => {
  return <div className="font-normal text-sm">{children}</div>;
};

export default Description;
