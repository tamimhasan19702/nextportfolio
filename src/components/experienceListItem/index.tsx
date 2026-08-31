/** @format */

import type { ExperienceListItemProps } from "./interface";

const ExperienceListItem = ({ index, name, desc, time, company, companyLocation }: ExperienceListItemProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-zinc-300 shadow-sm transition-all duration-300 hover:border-zinc-900 hover:shadow-lg">
      <div className="flex items-center gap-4 bg-zinc-900 px-5 py-3 text-white">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-zinc-900">
          {index}
        </span>
        <h3 className="font-semibold tracking-wide">{name}</h3>
        <span className="ml-auto shrink-0 text-xs tabular-nums text-zinc-300">{time}</span>
      </div>
      <div className="relative flex flex-1 flex-col gap-3 px-5 py-4">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-zinc-900 via-zinc-400 to-transparent" />
        {company && (
          <p className="text-sm font-semibold text-zinc-800">
            {company}
            {companyLocation && (
              <span className="ml-2 font-normal text-zinc-400">{companyLocation}</span>
            )}
          </p>
        )}
        {desc && <p className="text-sm leading-relaxed text-zinc-500">{desc}</p>}
      </div>
    </div>
  );
};

export default ExperienceListItem;
