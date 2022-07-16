export type ScreenSizeType = "xs" | "sm" | "md" | "lg" | "xl";

export interface IconsProps {
  className?: string;
}

export interface NavLinksProps {
  path: string;
  label: string;
  icon?: JSX.Element;
}
