import { motion } from "framer-motion";

const MainHeaderNavigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-4">
        <Item text="World" />
        <Item text="Business" />
        <Item text="Legal" />
        <Item text="Markets" />
        <Item text="Breakingviews" icon={false} />
        <Item text="Technology" />
        <Item text="Investigations" icon={false} />
        <Item text="More" />
      </ul>
    </nav>
  );
};

const variantsP = {
  initial: {},
  show: {},
};

const variantsChild = {
  initial: {
    rotate: "0deg",
    originX: "center",
    originY: "center",
  },
  show: {
    rotate: "180deg",
    originX: "center",
    originY: "center",
  },
};

const variantsLine = {
  initial: {
    display: "none",
  },
  show: {
    display: "block",
  },
};

interface ItemProps {
  text?: string;
  icon?: boolean;
}

const Item = ({ text, icon = true }: ItemProps) => {
  return (
    <motion.li
      initial={"initial"}
      whileHover={"show"}
      variants={variantsP}
      className="flex items-center relative cursor-pointer"
    >
      <a href="/" className="inline-flex items-center h-16 font-semibold">
        {text}
      </a>
      {icon && (
        <div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 ml-1 origin-center"
            variants={variantsChild}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </motion.svg>
        </div>
      )}

      <motion.div
        variants={variantsLine}
        className="hidden absolute bottom-0 left-0 w-full h-1 bg-orange-400 rounded-sm font-semibold"
      ></motion.div>
    </motion.li>
  );
};

export default MainHeaderNavigation;
