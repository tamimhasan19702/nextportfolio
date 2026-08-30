/** @format */

import type { PageHeaderProps } from "./interface";

const PageHeader = ({
  eyebrow,
  title,
  description,
  className = "",
}: PageHeaderProps) => {
  const hasEyebrow = Boolean(eyebrow)
  const hasTitle = Boolean(title)
  const hasDescription = Boolean(description)

  if (!hasEyebrow && !hasTitle && !hasDescription) {
    return null
  }

  return (
    <header className={`flex flex-col items-start gap-5 ${className}`}>
      {hasEyebrow ? (
        <span className="w-fit rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
          {eyebrow}
        </span>
      ) : null}
      {hasTitle ? (
        <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-[0.95]">
          {title}
        </h1>
      ) : null}
      {hasDescription ? (
        <div className="max-w-xl text-sm sm:text-base leading-relaxed text-zinc-500">
          {description}
        </div>
      ) : null}
    </header>
  );
};

export default PageHeader;
