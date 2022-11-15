import { ButtonProps } from "../Button/ButtonProps";

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
