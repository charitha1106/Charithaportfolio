import {
  SiCplusplus,
  SiPython,
  SiMongodb,
  SiMysql,
  SiTensorflow,
  SiPandas,
  SiExpress,
} from "react-icons/si";
import { FaHtml5, FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange" />
          <p className="text-center mt-4">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
