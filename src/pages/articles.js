import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import article1 from "../../public/images/articles/local-api.png";
import article2 from "../../public/images/articles/crud.png";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        initial={{ opacity: 0 }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg "
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
     bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, readingTime, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
        <p className="text-sm mb-2 mt-4">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {readingTime}
        </span>
      </Link>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Farai Bvuma | About Page</title>
        <meta name="Articles page" content="Farai Bvuma's articles page" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 " />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="How to setup a local endpoint with express and Node.js"
              summary="Follow this guide to learn how to setup a local endpoint for use in your projects."
              readingTime="2 min read"
              link="https://dev.to/faraib/how-to-setup-a-local-endpoint-with-express-and-nodejs-54p5"
              img={article1}
            />
            <FeaturedArticle
              title="Basic CRUD with Prisma, Fastify and Node"
              summary="Learn how to setup a Fastify and Prisma with Node.js. Follow this guide to learn how to easily perform CRUD operations with these technologies."
              readingTime="4 min read"
              link="https://dev.to/faraib/basic-crud-with-prisma-fastify-and-node-4lk3"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All articles
          </h2>
          <ul>
            <Article
              title="How to setup a local endpoint with express and Node.js"
              img={article1}
              date="19 April 2023"
              link="https://dev.to/faraib/how-to-setup-a-local-endpoint-with-express-and-nodejs-54p5"
            />
            <Article
              title="Basic CRUD with Prisma, Fastify and Node"
              img={article2}
              date="30 May 2023"
              link="https://dev.to/faraib/how-to-setup-a-local-endpoint-with-express-and-nodejs-54p5"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
