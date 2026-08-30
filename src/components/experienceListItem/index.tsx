/** @format */

import type { ExperienceListItemProps } from "./interface";

const ExperienceListItem = ({ name, desc, time, company, companyLocation }: ExperienceListItemProps) => {
  return (
    <>
      <div className="bg-black hover:bg-white hover:text-black transition-all duration-300 text-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-lg ">
        {name}
      </div>

      <div className="p-3 text-sm italic">{desc}</div>

      <div className="p-3 text-red-400 text-sm font-semibold">{time} </div>

      {company && (
        <div className="px-4 py-2 rounded shadow-lg bg-white text-sm font-semibold w-fit">
          {company}
          {companyLocation && <span className="ml-2 font-normal text-zinc-500">{companyLocation}</span>}
        </div>
      )}
    </>
  );
};

export default ExperienceListItem;
