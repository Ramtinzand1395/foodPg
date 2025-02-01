import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { motion } from "framer-motion";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const ImgVariants = (delay) => {
  return {
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
    hide: {
      opacity: 0,
      scale: 0.3,
    },
  };
};

const textVariants = (delay) => {
  return {
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
    hide: {
      opacity: 0,
      y: "-100%",
    },
  };
};

const Subscribe = () => {
  return (
    <motion.div
      variants={ImgVariants(0.4)}
      initial="hide"
      whileInView="show"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <motion.input
            variants={textVariants(0.4)}
            initial="hide"
            whileInView="show"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Subscribe;
