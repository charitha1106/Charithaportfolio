import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
// Import your dynamic typing component here if needed
// import DynamicText from "./DynamicText"; 

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
          Aspiring Software Engineer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Sai Charitha
        <br className="sm:hidden md:block" />
        Chakka
      </motion.h1>

      {/* ✅ Dynamically changing text section */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl text-lightGrey font-medium"
      >
        {/* Replace this span with your dynamic text component */}
        <span className="text-white">
          {/* <DynamicText /> */}
          Full Stack Developer | ML Developer | DSA Enthusiast
        </span>
      </motion.div>

  
    </div>
  );
};

export default HeroText;
