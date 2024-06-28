import { companies } from "@/data";
const TechStack = () => {
  return (
    <>
      <h1 className="heading">
        <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 pt-10">
        {companies.map(({ id, img, name, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} alt={name} className="md:w-10 w-5" />
            <img src={nameImg} alt={name} className="md:w-25 w-20" />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
