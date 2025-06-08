import SingleSkill from "./SingleSkill";
import {
  FaHtml5,
  FaReact,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiCplusplus,
  SiPython,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiPandas,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "C / C++", icon: SiCplusplus },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: SiPython },
  { skill: "HTML / CSS", icon: FaHtml5 },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Express / Node", icon: FaNodeJs },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "MySQL", icon: SiMysql },
  { skill: "ML / DL", icon: SiTensorflow },
  { skill: "Data Analytics", icon: SiPandas },
];

const AllSkills = () => {
  return (
    <div className="w-full px-4">
      <div className="flex flex-nowrap justify-between items-center gap-6">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", 0.1 * index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleSkill text={item.skill} imgSvg={<item.icon size={48} />} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
