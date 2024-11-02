/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/profileImg.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Nadav Galili | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Code with passion, create with purpose."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2  md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Biography
              </h2>
              <p className="font-medium">
                -Hi! I'm Nadav Galili, a full-stack web developer with a desire
                for crafting user-friendly interfaces that are both visually
                stunning and functionally sound. With almost 3 years of
                experience, I'm passionate about bringing my clients' visions to
                life through creative and strategic design solutions.
              </p>
              <p className="my-4 font-medium">
                -Skilled in using various technologies and frameworks such as
                Typescript, Node.js, PHP, React and React Native. With a strong
                drive for success and a commitment to delivering exceptional
                results, I leverage my technical skills and analytical mindset
                to build high-performing solutions that meet the needs of my
                company's business and end-users alike. Whether working on a
                challenging project or collaborating with a team, I am dedicated
                to finding innovative solutions that drive success and make a
                real impact.
              </p>
              <p className="font-medium">
                -Crafting user-facing magic requires a solid foundation. I build
                scalable, secure backend solutions that keep your projects
                running smoothly. I don't just paint the picture, I build the
                canvas.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-3xl border-2 border-solid border-dark bg-light p-8
                           dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                priority
                sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw
                    "
                src={profilePic}
                alt="nadav galili"
                className="w-fukk h-auto rounded-2xl"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-2">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 xl:text-center md:text-lg 
                              sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={30} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75  dark:text-light/75 l:text-center md:text-lg 
                              sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={3} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 l:text-center md:text-lg 
                              sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
