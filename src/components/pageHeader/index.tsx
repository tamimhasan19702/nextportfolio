/** @format */

import type { PageHeaderProps } from "./interface";

const PageHeader = ({
  eyebrow,
  title,
  description,
  className = "",
}: PageHeaderProps) => {
  return (
    <header className={`flex flex-col items-start gap-5 ${className}`}>
      {eyebrow ? (
        <span className="w-fit rounded-full bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
          {eyebrow}
        </span>
      ) : null}
      <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-[0.95]">
        {title}
      </h1>
      {description ? (
        <div className="max-w-xl text-sm sm:text-base leading-relaxed text-zinc-500">
          {description}
        </div>
      ) : null}
    </header>
  );
};

export default PageHeader;
