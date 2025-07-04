import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "AI Virtual Try-On & Smart Shopping App",
    year: "Mar2025",
    align: "right",
    image: "/website-img-2.webp",
    link: "#",
  },
  {
    
    name: "Hirehub",
    year: "July2024",
    align: "left",
    image: "/website-img-1.png",
    link: "https://github.com/harshadesetty/Recruitment_Platform",
  },
  {
    name: "AI powered Sudoku Solver",
    year: "Jan2023",
    align: "right",
    image: "/website-img-3.png",
    link: "https://github.com/charitha1106/AI-powered-sudoku-solver",
  },
 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
