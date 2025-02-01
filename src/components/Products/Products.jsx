import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: 0.8,
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: 0.9,
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: 1,
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: 1.1,
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: 1.2,
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
      x: "0",
      transition: {
        delay: delay,
        duration: 0.8,
      },
    },
    hide: {
      opacity: 0,
      x: "-100%",
    },
  };
};

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-6">
          <motion.p
            variants={textVariants(0.4)}
            initial="hide"
            whileInView="show"
            className="text-sm text-primary"
          >
            Top Selling Products for you
          </motion.p>
          <motion.h1
            variants={textVariants(0.6)}
            initial="hide"
            whileInView="show"
            data-aos="fade-up"
            className="text-3xl font-bold"
          >
            Products
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
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <motion.div
                variants={ImgVariants(data.aosDelay)}
                initial="hide"
                whileInView="show"
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
