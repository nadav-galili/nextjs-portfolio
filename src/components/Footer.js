import Link from "next/link";
import Layout from "./Layout";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Resereved.</span>
        <div className="flex items-center lg:py-2">
          Created by Nadav Galili 🧙‍♂️
          {/* <Link
            href="https://www.nadav-galili.com"
            className="underline underline-offset-2 ">
            Nadav Galili{" "}
          </Link>{" "}
          &nbsp;  */}
        </div>
        {/* <Link
          href="https://www.nadav-galili.com"
          target={"_blank"}
          className="underline underline-offset-2 ">
          Say Hello
        </Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
