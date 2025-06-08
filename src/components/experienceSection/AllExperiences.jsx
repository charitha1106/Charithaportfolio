import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Grade X",
    company: "Sri Chaitanya Techno School",
    date: "2019 - 2020",
    responsibilities: ["Percentage: 100%"],
  },
  {
    job: "Grade XI & XII",
    company: "Sri Chaitanya Junior College",
    date: "2020 - 2022",
    responsibilities: ["Percentage: 98.2%"],
  },
  {
    job: "B.Tech - Computer Science",
    company: "IIIT Gwalior",
    date: "2022 - Present",
    responsibilities: ["CGPA: 8.67"],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between gap-6">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-4">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-4xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
