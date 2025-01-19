import React from "react";
import FoodPng from "../../assets/food/food.png";
import Spone from "../../assets/food/spoon.png";
import Bannan from "../../assets/food/banana2.png";
import Leaf from "../../assets/food/leaf.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    init: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};
const Hero = () => {
  return (
    <main>
      <div className="container min-h-[600px] flex justify-center z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 place-items-center justify-between">
          {/* text content here*/}
          <div className="space-y-3 mt-14 text-center md:text-left md:mt-0">
            <motion.h2
              variants={SlideUp(0.5)}
              initial="init"
              whileInView="animate"
              className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase text-outline text-transparent"
            >
              yummy
              <img
                src={Leaf}
                className="absolute w-[50px] top-0 right-0 md:right-[100px]"
                alt=""
              />
            </motion.h2>
            <motion.h3 variants={SlideUp(1)}
              initial="init"
              whileInView="animate" className="relative text-5xl lg:text-7xl xl:text-8xl font-bold uppercase">
              breakefast
            </motion.h3>
            <motion.p variants={SlideUp(1.5)}
              initial="init"
              whileInView="animate" className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
              totam sint optio at omnis laborum obcaecati nemo maxime quo
              aperiam velit minima exercitationem ad adipisci corporis placeat
              dolor quam? Officiis.
            </motion.p>
            <motion.button variants={SlideUp(2)}
              initial="init"
              whileInView="animate" className="btn-primary  flex items-center gap-4 !mt-10">
              <IoCartOutline /> Order Now
            </motion.button>
          </div>
          {/* images here */}
          <div className="relative">
            <motion.img initial={{opacity:0 , rotate:20 , x:200 , y:100}} whileInView={{opacity:1,rotate:0 , x:0 , y:0}} transition={{duration:0.8}} src={FoodPng} className="w-[450px] img-shadow" alt="" />
            <motion.img initial={{opacity:0 , rotate:120 , x:200 , y:100}} whileInView={{opacity:1,rotate:75 , x:0 , y:0}} transition={{duration:0.8}}
              src={Spone}
              className="w-[350px] absolute bottom-[-120px] -left-16  img-shadow"
              alt=""
            />
            <motion.img initial={{opacity:0 , rotate:20 , x:200 , y:100}} whileInView={{opacity:1,rotate:0 , x:0 , y:0}} transition={{duration:0.8}}
              src={Bannan}
              className="w-[400px] absolute top-[-30px] right-[-130px] md:right-[-160px]  img-shadow"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* yellow bg */}
      <motion.div initial={{opacity:0 , rotate:60 , x:200 , y:100}} whileInView={{opacity:1,rotate:45 , x:0 , y:0}} transition={{duration:0.8}} className="w-[2500px] h-[2500px] bg-lightYellow absolute top-[-30%] left-[70%] z-0 "></motion.div>
    </main>
  );
};

export default Hero;
