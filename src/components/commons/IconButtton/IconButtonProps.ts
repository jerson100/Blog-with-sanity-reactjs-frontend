import { ButtonProps } from "../Button/buttonProps";

interface IconButtonProps extends ButtonProps {
  svg:
    | "left"
    | "right"
    | "menu"
    | "facebook"
    | "twitter"
    | "instagram"
    | "youtube"
    | "linkedin"
    | "save"
    | "share";
}

export type { IconButtonProps };
