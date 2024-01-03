import React from "react";
import { animate, motion } from "framer-motion";

import Typewriter from "typewriter-effect";

import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/avinash.png";
import { useRef } from "react";
import aniamtionClientsCount from "react";
import aniamtionProjectsCount from "react";
const Home = () => {
  const clientCount = useRef(null);
  {
  }
  const projectCount = useRef(null);
  {
  }
  const aniamtionClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const aniamtionProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  return (
    <div id="Home">
      <section>
        <div>
          <motion.h1
            initial={{
              x: "-100%",
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
          >
            Hi, I Am <br /> Avinash Rathod
          </motion.h1>
          <Typewriter
            options={{
              strings: [" A Developer ", "A Designer ", "A Creator "],
              autoStart: true,
              loop: true,
              cursor: " ",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div id="mail">
            <a href="mailto:avinashrathod55252@gmail.com">Hire me </a>
            <a href="#work">
              {" "}
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span
                whileInView={aniamtionClientsCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span> Clients Worldwide </span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={aniamtionProjectsCount}
                ></motion.span>
              </p>
              <span> Projects Done </span>
            </article>

            <article>
              <p>Contact</p>
              <span>avinashrathod55252@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Avinash" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
