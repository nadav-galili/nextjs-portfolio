import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
// import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project1 from "../../public/images/projects/pokerDonkey.webp";
import project2 from "../../public/images/projects/portfolioImg.png";
import project3 from "../../public/images/projects/donewithit.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summery, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
                         border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light  lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
                   xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw
              "
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summery}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                      dark:bg-light dark:text-dark sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light
                        p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
                      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          {/* <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base">
            Visit
          </Link> */}
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nadav Galili | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Behind the scenes: Dive into the code that powers my creations."
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 
                          lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* <div className="col-span-12">
              <FeaturedProject
                type="Home Poker Games Management System"
                title="Poker-Underdog"
                summery="A web app for managing statistics of home poker games,  
                        built with ReactJS,NodeJS and MongoDb. hosted on AWS ec2 and S3 bucket.
                        In this app you can create or join teams and collect statistics about the team's 
                        home poker games"
                img={project1}
                link="https://www.poker-underdog.com"
                github="https://github.com/nadav-galili/Poker-underdog"
              />
            </div> */}
            <div className="col-span-12">
              <FeaturedProject
                type="Home Poker Games Management System"
                title="Poker Donkey - Stats Tracker"
                summery="An android app on google play built with react native expo, backend 
                        with NodeJs and Sequelize. This app is a poker stats tracker for home poker games"
                img={project1}
                link="https://play.google.com/store/apps/details?id=com.nadavg.newpokerdonkey"
                github="https://github.com/nadav-galili/backendDonk"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type="Developer portfolio in Nextjs"
                title="NextJs Portfolio"
                summery="A portfolio for myself , built with NextJs and Framer-Motion"
                img={project2}
                link="/"
                github="https://github.com/nadav-galili/nextjs-portfolio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                type="React Native App built with expo"
                title="Done With It"
                summery="Project-1"
                img={project3}
                link="/"
                github="https://github.com/nadav-galili/donewithit"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
