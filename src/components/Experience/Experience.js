import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Details } from "./Details";

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
            position="Web Developer II"
            company="Q4 Inc"
            companyLink="https://www.q4inc.com/home/default.aspx"
            address="Toronto(Remote)"
            time="July 2023 - Present"
            work={
              <>
                "Worked as a Web Developer building responsive, client-facing
                websites using a proprietary CMS along with HTML, CSS and
                JavaScript. Collaborated with international, cross-functional
                teams to deliver accessible, high-performance web solutions
                tailored to each client's brand and business goals. Served as
                the primary developer responsible for building investor
                relations sites for clients such as{" "}
                <a
                  href="https://investors.wmg.com/investor-relations/default.aspx"
                  target="_blank"
                  className="text-primary dark:text-primaryDark hover:underline"
                >
                  Warner Music Group
                </a>{" "}
                ,{" "}
                <a
                  href="https://investors.emera.com/overview/default.aspx"
                  target="_blank"
                  className="text-primary dark:text-primaryDark hover:underline"
                >
                  Emera Incorporated
                </a>{" "}
                ,{" "}
                <a
                  href="https://investors.unity.com/overview/default.aspx"
                  target="_blank"
                  className="text-primary dark:text-primaryDark hover:underline"
                >
                  Unity Technologies
                </a>{" "}
                and{" "}
                <a
                  href="https://investor.bridgebio.com/overview/default.aspx"
                  target="_blank"
                  className="text-primary dark:text-primaryDark hover:underline"
                >
                  BridgeBio Pharma
                </a>{" "}
                ."
              </>
            }
          />
          <Details
            position="Junior Software Engineer"
            company="Loft"
            companyLink="https://loft.com.br/"
            address="São Paulo"
            time="June 2021 - March 2023"
            work={
              <>
                "Worked as part of the team responsible for creating and
                implemtenting Loft's multi-themed design system. The design
                system's library of tokens and componets were created in React.
                The design system had the positive impact of increaseing the
                productivity of Loft's front-end engineers. I also worked as
                part of the team responsible for creating{" "}
                <a
                  href="https://credihome.com.br/"
                  target="_blank"
                  className="text-primary dark:text-primaryDark hover:underline"
                >
                  Credihome by Loft's
                </a>{" "}
                new website. "
              </>
            }
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
