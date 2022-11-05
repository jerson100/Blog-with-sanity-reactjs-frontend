import { useMemo, forwardRef } from "react";
import Button from "../Button";
import classnames from "classnames";
import { getSvg, Svg } from "../../../assets/js/Svg";
import { IconButtonProps } from "./iconButtonProps";

const sizes: any = {
  sm: "h-3 w-3",
  md: "h-5 w-5",
  lg: "h-7 w-7",
  xl: "h-9 w-9",
};

const IconButtton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ svg, size = "md", ...buttonProps }, ref) => {
    const { children: childrenSvg, props }: Svg = useMemo(
      () => getSvg(svg),
      [svg]
    );
    const cl_svg: string = classnames(sizes[size]);
    return (
      <Button ref={ref} {...buttonProps} size={size}>
        <svg className={cl_svg} {...props}>
          {childrenSvg}
        </svg>
      </Button>
    );
  }
);

export default IconButtton;
