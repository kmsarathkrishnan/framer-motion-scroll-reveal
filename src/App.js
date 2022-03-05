import React from "react";
import { motion, useTransform } from "framer-motion";
import useInView from "react-cool-inview";
import Section from "./Section";
import "./styles.css";

export default function App() {
  const titleWrapperVariants = {
    initial: {
      opacity: 1
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const titleVariants = {
    initial: {
      y: 100,
      opacity: 0,
      transition: {
        type: "spring",
        mass: 1,
        damping: 10,
        stiffness: 80
      }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 1,
        damping: 10,
        stiffness: 80
      }
    }
  };

  return (
    <div className="App">
      <div className="title-wrapper">
        <motion.h1
          className="title"
          variants={titleWrapperVariants}
          animate="visible"
          initial="initial"
          aria-label="I’m a designer who is passionate about solving problems and creating delightful user experiences."
        >
          <motion.span className="line" variants={titleVariants}>
            I’m a designer who is passionate about solving
          </motion.span>
          <motion.span className="line" variants={titleVariants}>
            problems and creating delightful user experiences.
          </motion.span>
        </motion.h1>
      </div>
      <section className="section-wrapper">
        <Section />
        <Section />
        <Section />
      </section>
    </div>
  );
}
