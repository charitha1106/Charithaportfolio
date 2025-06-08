import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        MERN Stack Developer
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="July" text="2024" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="Aug" text="2024" />
      </div>
      <p className="text-center" >
       <b>WSA</b> 
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
