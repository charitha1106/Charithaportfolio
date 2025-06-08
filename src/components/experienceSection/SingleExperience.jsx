import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[240px] md:w-[220px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-xl mt-6 p-4"
    >
      <p className="font-bold text-cyan text-base">{experience.job}</p>
      <p className="text-orange text-base">{experience.company}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>
      <ul className="list-disc mt-3 pl-4 text-sm text-white">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
