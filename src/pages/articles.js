import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import article1 from "../../public/images/articles/local-api.png";
import article2 from "../../public/images/articles/crud.png";
import article3 from "../../public/images/articles/css-selectors.png";
import article4 from "../../public/images/articles/dsa1.png";
import article5 from "../../public/images/articles/dsa2.png";
import article6 from "../../public/images/articles/dsa3.png";
import article7 from "../../public/images/articles/dsa4.png";
import article8 from "../../public/images/articles/dsa5.png";
import article9 from "../../public/images/articles/dsa6.png";
import article10 from "../../public/images/articles/dsa7.png";
import article11 from "../../public/images/articles/dsa8.png";
import article12 from "../../public/images/articles/dsa9.png";
import article13 from "../../public/images/articles/heaps.png";
import article14 from "../../public/images/articles/dsa11.png";
import article15 from "../../public/images/articles/dsa12.png";
import article16 from "../../public/images/articles/github-issue-importer.png";
import article17 from "../../public/images/articles/anime-greeting-card.png";
import article18 from "../../public/images/articles/dynamic-styling.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

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
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
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
     bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
     sm:flex-col"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
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
      rounded-br-3xl dark:bg-light"
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
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline xs:text-lg">
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
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="A penny for my thoughts!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Heap Data Structure: A Guide"
              summary="A heap is a data structure that can be represented as a complete binary tree or in array form. Here’s what you need to know."
              readingTime="9 min read"
              link="https://builtin.com/articles/heap-data-structure"
              img={article13}
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
              title="Dynamic Styling with Props in Styled-Components"
              img={article18}
              date="15 July 2025"
              link="https://dev.to/faraib/dynamic-styling-with-props-in-styled-components-2p7k"
            />
            <Article
              title="Build Apps with Google AI Studio: Anime Greetings Cards"
              img={article17}
              date="05 July 2025"
              link="https://dev.to/faraib/build-apps-with-google-ai-studio-anime-greetings-cards-9ek"
            />
            <Article
              title="GitHub Issue Importer"
              img={article16}
              date="30 March 2025"
              link="https://dev.to/faraib/github-issue-importer-56gd"
            />
            <Article
              title="Data Structures and Algorithms: Dijkstra's Algorithm"
              img={article15}
              date="20 September 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-dijkstras-algorithm-ah4"
            />
            <Article
              title="Data Structures and Algorithms: Graphs"
              img={article14}
              date="05 September 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-graphs-3b6c"
            />
            <Article
              title="Heap Data Structure: A Guide"
              img={article13}
              date="01 August 2024"
              link="https://builtin.com/articles/heap-data-structure"
            />
            <Article
              title="Data Structures and Algorithms: Breadth First Search"
              img={article12}
              date="21 May 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-breadth-first-search-3aid"
            />
            <Article
              title="Data Structures and Algorithms: Depth First Search"
              img={article11}
              date="03 May 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-depth-first-search-4c0e"
            />
            <Article
              title="Data Structures and Algorithms: Trees"
              img={article10}
              date="25 April 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-trees-34c4"
            />
            <Article
              title="Data Structures and Algorithms: Quick Sort"
              img={article9}
              date="12 March 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-quick-sort-pi"
            />
            <Article
              title="Data Structures and Algorithms: Recursion"
              img={article8}
              date="02 February 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-recursion-49ha"
            />
            <Article
              title="Data Structures and Algorithms: Stacks"
              img={article7}
              date="12 January 2024"
              link="https://dev.to/faraib/data-structures-and-algorithms-stacks-2p0b"
            />
            <Article
              title="Data Structures and Algorithms: Queues"
              img={article6}
              date="11 December 2023"
              link="https://dev.to/faraib/data-structures-and-algorithms-queues-1p3f"
            />
            <Article
              title="Data Structures and Algorithms: Linked List Methods in JavaScript"
              img={article5}
              date="8 December 2023"
              link="https://dev.to/faraib/data-structures-and-algorithms-linked-list-methods-in-javascript-2mm9"
            />
            <Article
              title="Data Structures and Algorithms: Linked Lists"
              img={article4}
              date="22 November 2023"
              link="https://dev.to/faraib/data-structures-and-algorithms-linked-lists-2dp2"
            />
            <Article
              title="Demystifying Basic CSS Selectors"
              img={article3}
              date="17 July 2023"
              link="https://dev.to/faraib/demystifying-basic-css-selectors-2k4a"
            />
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
