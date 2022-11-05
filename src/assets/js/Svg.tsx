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
  new Svg(
    "menu",
    (
      <path d="M14.857 9.524c.457 0 .762.305.762.762s-.305.761-.762.761H1.143c-.457 0-.762-.304-.762-.761s.305-.762.762-.762h13.714Zm0-4.571c.457 0 .762.304.762.761s-.305.762-.762.762H1.143c-.457 0-.762-.305-.762-.762s.305-.761.762-.761h13.714Zm0-4.572c.457 0 .762.305.762.762s-.305.762-.762.762H1.143C.686 1.905.38 1.6.38 1.143S.686.38 1.143.38h13.714Z"></path>
    ),
    {
      viewBox: "0 0 16 12",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    }
  ),
];

const getSvg = (text: string): Svg => {
  return Svgs.find((s: Svg) => s.name === text) || Svgs[0];
};
export { Svgs, getSvg, Svg };
