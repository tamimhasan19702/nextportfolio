/** @format */

const ExperienceListItem = ({ name, desc, time, company, companyUrl }) => {
  return (
    <>
      <div className="bg-black hover:bg-white hover:text-black transition-all duration-300 text-white p-3 font-semibold rounded-b-lg rounded-s-lg shadow-lg ">
        {name}
      </div>

      <div className="p-3 text-sm italic">{desc}</div>

      <div className="p-3 text-red-400 text-sm font-semibold">{time} </div>

      {company &&
        (companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded shadow-lg bg-white text-sm font-semibold w-fit inline-block hover:bg-zinc-100 hover:underline">
            {company}
          </a>
        ) : (
          <div className="px-4 py-2 rounded shadow-lg bg-white text-sm font-semibold w-fit">
            {company}
          </div>
        ))}
    </>
  );
};

export default ExperienceListItem;
