import React, { useRef } from "react";

import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyyLink,
  time,
  address,
  work,
  className = "items-center",
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className={`my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col ${className} justify-between md:w-[80%]`}>
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;{" "}
          <a
            href={companyyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  return (
    <div className="mt-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                      md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="Mobile-Brain"
            companyyLink="https://www.mobile-brain.net"
            address="Ramat-Gan"
            time="2021 - Present"
            work="In charge of development and maintence of mobile
            application, focusing mainly on the backend aspects. I
            am responsible for ensuring that the backend systems
            for the apps are functioning smoothly and effectively,
            as well as for implementing and maintaining the CRM
            system that serves thousands of apps. My skills in a
            
            variety of technologies enable me to deliver high-
            quality products.
            
            noteable projects i've worked on:
            rewriting parts of the company's system from PHP to Node.js
            and transfering servers from dedicated to AWS"
          />
          <Details
            position="Lecturer at Full Stack Course"
            company="HackerU"
            companyyLink="https://www.hackeru.co.il"
            address="Ramat-Gan"
            time="2023 - Present"
            work="Teaching several modules at full-stack developer course,
                  icnluding: Js foundementals, PHP, MySQL, HTML, CSS and ReactJs"
          />
          <Details
            position="Sales Manager"
            company="FMCG company"
            companyyLink="/"
            address="Keysaria"
            time="2016 - 2021"
            className="items-start"
            work=" "
          />
          <Details
            position="Manager of a big store"
            company="Home-Center"
            companyyLink="https://www.homecenter.co.il"
            address="Ramat-Gan"
            time="2010 - 2016"
            className="items-start"
            work=" "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
