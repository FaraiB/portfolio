import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, address, time, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Junior Software Engineer"
            company="Loft"
            companyLink="https://loft.com.br/"
            address="São Paulo"
            time="June 2021 - March 2023"
            work="Worked as part of the team responsible for creating and implemtenting Loft's multi-themed design system. 
            The design system's library of tokens and componets were created in React. The design system had the positive impact of increaseing the productivity of Loft's front-end engineers.
            I also worked as part of the team responsible for creating Credihome by Loft's new website.  "
          />
          <Details
            position="Full Stack Developer"
            company="SmartMEI"
            companyLink="https://www.linkedin.com/company/smartmei/about/"
            address="São Paulo"
            time="January 2021 – May 2021"
            work="Worked to develop custom, web-based tools for internal use. This was done with React, Node.JS, GraphQL and TypeScript  "
          />
          <Details
            position="Junior Application Support Analyst"
            company="Fujitsu Brasil"
            companyLink="https://www.fujitsu-general.com/br/"
            address="São Paulo"
            time="February 2019 – December 2020"
            work="Worked providing Level 2 support for client's applications in English and Portuguese. Support included trouble ticket management, monitoring of client's systems, troubleshooting web-based Java applications and basic database queries."
          />
          <Details
            position="Junior Database Analyst"
            company="Construtora OAS"
            companyLink="https://www.linkedin.com/company/oas-sa/"
            address="São Paulo"
            time="January 2018 – January 2019"
            work="I was responsible for administering user accounts for the company's ERP system, resolving trouble tickets related to the ERP's database, installing and configuring Windows server 2014 and 2016 and maintaining the internal knowledge base."
          />
          <Details
            position="IT Technical Support Analyst"
            company="Construtora OAS"
            companyLink="https://www.linkedin.com/company/oas-sa/"
            address="São Paulo"
            time="March 2016 – December 2017"
            work="I was responsible for providing on-site and remote technical support to the company's VIPs."
          />
          <Details
            position="IT Technical Support Analyst"
            company="Construtora OAS Trinidad e Tobago"
            companyLink="https://www.linkedin.com/company/oas-sa/"
            address="Port of Spain"
            time="February 2016 - March 2016"
            work="I provided on-site technical support in English to the company's VIPs."
          />
          <Details
            position="Service Desk Analyst"
            company="Construtora OAS"
            companyLink="https://www.linkedin.com/company/oas-sa/"
            address="São Paulo"
            time="February 2014 - January 2016"
            work="I worked providing bilingual on-site and remote technical support to the company's internal clients."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
