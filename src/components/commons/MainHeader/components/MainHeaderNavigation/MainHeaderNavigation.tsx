import { motion } from "framer-motion";
import classnames from "classnames";

interface NavigationProps {
  matchTablet: boolean;
}

const MainHeaderNavigation = ({ matchTablet = false }: NavigationProps) => {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row gap-4">
        <Item text="World" />
        <Item text="Business" />
        <Item text="Legal" />
        <Item text="Markets" />
        <Item
          text="Breakingviews"
          icon={false}
          className="md:hidden lg:inline-flex"
        />
        <Item text="Technology" className="md:hidden lg:inline-flex" />
        <Item
          text="Investigations"
          icon={false}
          className="md:hidden xl:inline-flex"
        />
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
  className?: string;
}

const Item = ({ text, icon = true, className }: ItemProps) => {
  const cl = classnames("flex items-center relative cursor-pointer", className);
  return (
    <motion.li
      initial={"initial"}
      whileHover={"show"}
      variants={variantsP}
      className={cl}
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
