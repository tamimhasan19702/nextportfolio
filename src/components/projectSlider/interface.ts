export type DotPosition = "top-center" | "bottom-center";

export interface ProjectSliderProps {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  dotPosition?: DotPosition;
  interval?: number;
  onImageClick?: (index: number) => void;
}
