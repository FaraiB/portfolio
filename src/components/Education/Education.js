import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Details } from "./Details";

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="BSc Computing and Information Systems"
            time="August 2015"
            place="University of London International Programmes"
            info="Relevant courses included Graphical Object-Oriented and Internet Programming in Java, Database Systems, Software Engineering, Algorithm Design and Analysis and Introduction to Natural Language Processing."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
