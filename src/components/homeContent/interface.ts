import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { Home } from "@/payload-types";

export type Hero = NonNullable<Home["hero"]>;

export type HeroButton = NonNullable<Hero["buttons"]>[number];

export interface HomeContentProps {
  hero?: Partial<Hero>;
}

export interface ProgressButtonProps {
  btn: HeroButton;
}

export type HeroDescription = SerializedEditorState;
