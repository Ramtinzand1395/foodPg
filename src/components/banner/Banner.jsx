import React from "react";
import food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../hero/Hero";
const Banner = () => {
  return (
    <section>
      <div className="container py-24 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center ">
          {/* Image Section */}
          <div className="relative ">
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{x: 50, y: -50,rotate:15 , scale:1.1}}
              src={food3}
              alt=""
              className="relative z-10 w-full lg:max-w-[350px] img-shadow "
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-lightYellow rounded-full h-[320px] w-[320px] top-[50%] transform translate-y-[-50%]  translate-x-[50%] right-[50%] absolute "
            ></motion.div>
          </div>
          {/* Text content section */}
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h2 variants={SlideUp(1)} initial="init" whileInView="animate" className="text-6xl uppercase font-semibold font-league">
              the best yummy food in town
            </motion.h2>
            <motion.p variants={SlideUp(1.3)} initial="init" whileInView="animate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              dicta, atque, quod perspiciatis obcaecati necessitatibus qui nulla
              dolores possimus similique nihil ut aspernatur nisi nostrum beatae
              expedita unde doloribus facilis.
            </motion.p>
            <motion.button variants={SlideUp(1.6)} initial="init" whileInView="animate" className="btn-primary">Order Now</motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
