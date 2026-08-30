import type { ComponentProps } from "react";

export type CardSize = "default" | "sm";

export interface CardProps extends ComponentProps<"div"> {
  size?: CardSize;
}

export interface CardSubComponentProps extends ComponentProps<"div"> {}
