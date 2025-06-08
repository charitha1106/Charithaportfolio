import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Sai Charitha Chakka, a third-year Computer Science Engineering student at IIIT Gwalior (CGPA 8.67) with 3 years of practical experience turning ideas into production-ready software. Adept in C++, Java, Python, and JavaScript, I build across the stack with React, Node.js, Express, and MongoDB.
        My portfolio ranges from a full placement-cell web portal for ABV-IIITM Gwalior to an interactive sorting-algorithm visualizer. These projects highlight my focus on clean architecture, performance, and an intuitive user experience.
        A passionate DSA enthusiast and budding ML developer, I thrive in collaborative, high-energy teams where I can pair strong problem-solving skills with a love for elegant design to deliver scalable, maintainable products. I’m now eager to bring this mindset to a Software Engineering role and keep learning alongside world-class engineers.
      </p>

      <a
        href="/Sai_Charitha_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
      >
        My Resume
      </a>
    </div>
  );
};

export default AboutMeText;
