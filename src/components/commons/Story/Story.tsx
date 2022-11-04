import { ReactNode } from "react";
import classnames from "classnames";
import Description from "./components/Description";
import Image from "./components/Image";
import Title from "./components/Title";
import Time from "./components/Time";

interface StoryProps {
  category?: string;
  toCategory?: string;
  children?: ReactNode;
  className?: string;
}

const Story = ({ category, toCategory, children, className }: StoryProps) => {
  const cl = classnames("pt-4 pb-4 border-zinc-200 border-b", className);
  return (
    <article className={cl}>
      <a
        className="mb-2 inl inline-block text-xs hover:underline cursor-pointer"
        href={toCategory}
      >
        {category}
      </a>
      {children}
    </article>
  );
};

Story.Title = Title;
Story.Time = Time;
Story.Image = Image;
Story.Description = Description;

export default Story;
