import type { ComponentProps, ReactNode } from "react";
import type { Dialog as DialogPrimitive } from "radix-ui";

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root>;
export type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>;
export type DialogPortalProps = ComponentProps<typeof DialogPrimitive.Portal>;
export type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>;

export type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>;

export type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
};

export type DialogHeaderProps = ComponentProps<"div">;

export type DialogFooterProps = ComponentProps<"div"> & {
  showCloseButton?: boolean;
};

export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>;

export type DialogDescriptionProps = ComponentProps<
  typeof DialogPrimitive.Description
>;
