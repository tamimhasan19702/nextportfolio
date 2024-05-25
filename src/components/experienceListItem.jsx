/** @format */

const ExperienceListItem = ({ name, desc, time, company }) => {
  return (
    <>
      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
        {name}
      </div>

      <div className="p-3 text-sm italic">{desc}</div>

      <div className="p-3 text-red-400 text-sm font-semibold">{time} </div>

      <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
        {company && company}
      </div>
    </>
  );
};

export default ExperienceListItem;
