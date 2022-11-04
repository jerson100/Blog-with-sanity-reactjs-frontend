import { ReactNode, SVGProps } from "react";
class Svg {
  name: string;
  children: ReactNode;
  props: SVGProps<SVGSVGElement>;
  constructor(
    name: string,
    children: ReactNode,
    props: SVGProps<SVGSVGElement>
  ) {
    this.name = name;
    this.children = children;
    this.props = props;
  }
}

const Svgs: Svg[] = [
  new Svg("right", <polyline points="9 18 15 12 9 6" />, {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }),
  new Svg("left", <polyline points="15 18 9 12 15 6"></polyline>, {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }),
];

const getSvg = (text: string): Svg => {
  return Svgs.find((s: Svg) => s.name === text) || Svgs[0];
};
export { Svgs, getSvg, Svg };
