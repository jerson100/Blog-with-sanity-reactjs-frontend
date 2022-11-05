import { ButtonProps } from "../Button/buttonProps";

interface IconButtonProps extends ButtonProps {
  svg: "left" | "right" | "menu";
}

export type { IconButtonProps };
