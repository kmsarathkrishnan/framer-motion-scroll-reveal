import { motion } from "framer-motion";
import React, { useState } from "react";
import useInView from "react-cool-inview";
import "./styles.css";

export default function Link(props) {
  const [visibleState, setVisibleState] = useState("initial");

  // https://github.com/wellyshen/react-cool-inview
  const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView(
    {
      threshold: 0.18, // Default is 0
      onChange: ({
        inView,
        scrollDirection,
        entry,
        observe,
        unobserve,
        threshold
      }) => {
        // If you wanted to apply more states at more steps:
        // if (entry.isIntersecting === true && entry.intersectionRatio < 0.15) {
        //   setVisibleState("partial");
        // } else if (
        //   entry.isIntersecting === true && entry.intersectionRatio > 0.3
        // ) {
        //   setVisibleState("visible");
        // }
      },
      onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
        setVisibleState("visible");
      },
      onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
        setVisibleState("initial");
      }
    }
  );

  const sectionVariants = {
    initial: {
      opacity: 0.25,
      scale: 0.9,
      y: 40,
      transition: {
        type: "spring",
        duration: 0.8
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="section section-blue"
      initial="initial"
      variants={sectionVariants}
      animate={visibleState}
    ></motion.section>
  );
}
