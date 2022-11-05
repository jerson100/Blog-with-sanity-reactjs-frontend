import { Variants } from "framer-motion";

const container: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.1,
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      delay: 0.8,
      staggerChildren: 0.2,
      //   when: "afterChildren",
    },
  },
};

const buttons: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const items: Variants = {
  hidden: (dir: 1 | -1 = -1) => ({
    x: `${dir * 100}%`,
    opacity: 0,
  }),
  show: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: 1 | -1 = -1) => ({
    x: `${dir * 100}%`,
    opacity: 0,
  }),
};

export default { container, buttons, items };
