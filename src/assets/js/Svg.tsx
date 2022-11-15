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
  new Svg(
    "twitter",
    (
      <path d="M16 1.537a6.469 6.469 0 0 1-1.884.516A3.3 3.3 0 0 0 15.559.237a6.603 6.603 0 0 1-2.084.797A3.282 3.282 0 0 0 11.078 0a3.28 3.28 0 0 0-3.196 4.028A9.315 9.315 0 0 1 1.118.598a3.28 3.28 0 0 0-.444 1.65c0 1.137.578 2.143 1.46 2.73A3.281 3.281 0 0 1 .646 4.57v.04A3.282 3.282 0 0 0 3.28 7.83a3.286 3.286 0 0 1-1.483.055 3.294 3.294 0 0 0 3.065 2.282A6.583 6.583 0 0 1 0 11.526 9.281 9.281 0 0 0 5.034 13c6.036 0 9.338-5.003 9.338-9.34 0-.144-.003-.285-.01-.425A6.607 6.607 0 0 0 16 1.538Z"></path>
    ),
    {
      viewBox: "0 0 16 13",
      fill: "currentColor",
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    }
  ),
  new Svg(
    "facebook",
    (
      <path d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5H8V9H6V7h2V6c0-1.653 1.347-3 3-3h2v2h-2c-.55 0-1 .45-1 1v1h3l-.5 2H10v7h4.5c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5Z"></path>
    ),
    {
      viewBox: "0 0 16 16",
      fill: "currentColor",
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    }
  ),
  new Svg(
    "instagram",
    (
      <>
        <path d="M8 1.44c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.274.372.145.64.32.918.598.281.281.453.546.6.919.11.281.24.706.275 1.484.037.844.047 1.097.047 3.232 0 2.134-.01 2.39-.047 3.231-.034.781-.165 1.203-.275 1.484a2.47 2.47 0 0 1-.597.919 2.51 2.51 0 0 1-.918.6c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.232.047-2.134 0-2.39-.01-3.231-.047-.781-.034-1.203-.165-1.484-.275a2.476 2.476 0 0 1-.92-.597 2.51 2.51 0 0 1-.6-.918c-.109-.282-.24-.707-.274-1.485-.038-.844-.048-1.097-.048-3.231 0-2.135.01-2.391.047-3.232.035-.781.166-1.203.276-1.485.143-.372.319-.64.597-.919.281-.281.546-.453.918-.6.282-.109.707-.24 1.485-.274C5.608 1.45 5.862 1.44 8 1.44ZM8 0C5.828 0 5.556.01 4.703.047c-.85.038-1.435.175-1.94.372a3.898 3.898 0 0 0-1.419.925c-.447.444-.719.89-.925 1.415C.222 3.27.085 3.85.047 4.7.01 5.556 0 5.828 0 8c0 2.172.01 2.444.047 3.297.038.85.175 1.434.372 1.94.206.528.478.976.925 1.419.444.444.89.719 1.415.922.51.197 1.091.335 1.941.372.853.038 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.037 1.434-.175 1.94-.372a3.903 3.903 0 0 0 1.416-.922c.444-.444.719-.89.922-1.415.197-.51.335-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.435-.372-1.94a3.753 3.753 0 0 0-.915-1.423A3.91 3.91 0 0 0 13.24.422c-.51-.197-1.09-.335-1.94-.372C10.444.008 10.171 0 8 0H8Z"></path>
        <path d="M8 3.89a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332Zm5.231-6.938a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.919 0Z"></path>
      </>
    ),
    {
      viewBox: "0 0 16 16",
      fill: "currentColor",
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    }
  ),
  new Svg(
    "youtube",
    (
      <path d="M18.375 0H2.625A2.617 2.617 0 0 0 0 2.609V14.39A2.617 2.617 0 0 0 2.625 17h15.75A2.617 2.617 0 0 0 21 14.391V2.61A2.617 2.617 0 0 0 18.375 0Zm-10.5 13.044V4.348l7 4.348-7 4.348Z"></path>
    ),
    {
      viewBox: "0 0 21 17",
      fill: "currentColor",
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    }
  ),
  new Svg(
    "linkedin",
    (
      <path d="M19.031 0c1.034 0 1.888.807 1.964 1.822L21 1.97V19.03a1.975 1.975 0 0 1-1.822 1.964L19.03 21H1.97a1.975 1.975 0 0 1-1.964-1.822L0 19.03V1.97C0 .935.807.08 1.822.005L1.97 0H19.03ZM6.3 7.875H3.15v10.063H6.3V7.874Zm7.875-.175c-1.575 0-2.538.788-2.975 1.575v-1.4H8.225v10.063h3.15V12.95c0-1.313.175-2.537 1.838-2.537 1.575 0 1.575 1.487 1.575 2.624v4.9h3.15v-5.425c0-2.712-.613-4.812-3.763-4.812ZM4.637 2.8c-1.05 0-1.837.875-1.837 1.838 0 1.05.875 1.837 1.838 1.837 1.05 0 1.837-.787 1.837-1.837 0-1.05-.875-1.838-1.837-1.838Z"></path>
    ),
    {
      viewBox: "0 0 21 21",
      fill: "currentColor",
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    }
  ),
  new Svg(
    "share",
    (
      <path
        clipRule="evenodd"
        d="M17.719 14.437c-.926 0-1.762.385-2.359 1.002l-8.839-4.42a3.306 3.306 0 0 0 0-1.038l8.84-4.42a3.282 3.282 0 1 0-.881-1.76l-8.84 4.42a3.282 3.282 0 1 0 0 4.56l8.839 4.418a3.282 3.282 0 1 0 3.24-2.762Z"
      ></path>
    ),
    {
      fill: "currentColor",
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
    }
  ),
  new Svg(
    "save",
    (
      <g transform="translate(-383.999 -393.695)">
        <path d="M386,425.7a2,2,0,0,1-2-2v-24a6.007,6.007,0,0,1,6-6h10a6.007,6.007,0,0,1,6,6v24a2,2,0,0,1-2.972,1.748L395,420.983l-8.03,4.46A2,2,0,0,1,386,425.7Zm4-28a2,2,0,0,0-2,2v20.6l6.03-3.35a2,2,0,0,1,1.942,0L402,420.3V399.7a2,2,0,0,0-2-2Z" />
        <path d="M408,405.7a6.006,6.006,0,0,1-6-6v-2h-2.833v-4H408a6,6,0,0,1,0,12Zm-2-8v2a2,2,0,1,0,2-2Z" />
      </g>
    ),
    {
      viewBox: "-1 0 32.001 32.001",
      fill: "currentColor",
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
