import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      aosDelay:0.4
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      aosDelay:0.6
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      aosDelay:0.8
  },
];

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

const ImgVariants = (delay) => {
  return {
    show: {
      opacity: 1,
      scale:1,
      transition: {
        delay: delay,
        duration: 0.3,
      },
    },
    hide: {
      opacity: 0,
      scale:0.6,
    },
  };
};
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24 space-y-6 ">
          <motion.p
            variants={textVariants(0.4)}
            initial="hide"
            whileInView="show"
            className="text-sm text-primary"
          >
            Top Rated Products for you
          </motion.p>
          <motion.h1
            variants={textVariants(0.6)}
            initial="hide"
            whileInView="show"
            className="text-3xl font-bold"
          >
            Best Products
          </motion.h1>
          <motion.p
            variants={textVariants(0.8)}
            initial="hide"
            whileInView="show"
            className="text-xs text-gray-400"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </motion.p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <motion.div
              key={data.id}
              variants={ImgVariants(data.aosDelay)}
                initial="hide"
                whileInView="show"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] mt-5 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center space-y-5">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold dark:text-white">
                  {data.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
