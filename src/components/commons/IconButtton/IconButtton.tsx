import { useMemo, forwardRef } from "react";
import Button from "../Button";
import classnames from "classnames";
import { getSvg, Svg } from "../../../assets/js/Svg";
import { IconButtonProps } from "./IconButtonProps";

const sizes: any = {
  sm: "h-3 w-3",
  md: "h-5 w-5",
  lg: "h-7 w-7",
  xl: "h-9 w-9",
};

const IconButtton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ svg, children, ...buttonProps }, ref) => {
    const {
      name,
      children: childreSvg,
      ...propsSvg
    }: Svg = useMemo(() => getSvg(svg), [svg]);
    const cl_svg: string = classnames(sizes[name]);
    return (
      <Button ref={ref} {...buttonProps}>
        <svg className={cl_svg} {...propsSvg}>
          {childreSvg}
        </svg>
      </Button>
    );
  }
);

export default IconButtton;
