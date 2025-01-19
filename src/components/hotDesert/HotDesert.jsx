import React from "react";
import food1 from "../../assets/food/food.png";
import food2 from "../../assets/food/food2-plate.png";
import food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../hero/Hero";

const hotDesertData = [
  {
    id: 1,
    name: "Hot Desert",
    price: "$5.20",
    img: food1,
    delay: 0.2,
  },
  {
    id: 2,
    name: "Hot Kace",
    price: "$5.20",
    img: food2,
    delay: 0.4,
  },
  {
    id: 3,
    name: "Hot Desert",
    price: "$5.20",
    img: food3,
    delay: 0.6,
  },
];

const HotDesert = () => {
  return (
    <section>
      <div className="container py-12 ">
        {/* HEading Section */}
        <motion.h4
          variants={SlideUp(0)}
          initial="init"
          whileInView="animate"
          className="text-2xl font-semibold text-darkGreen uppercase py-8"
        >
          Hot Desert
        </motion.h4>
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  cursor-pointer">
          {hotDesertData.map((data) => (
            <motion.div
              variants={SlideUp(data.delay)}
              initial="init"
              whileInView="animate"
              key={data.id}
              className="group  bg-white/50 shadow-lg p-3 flex items-center gap-3"
            >
              <img
                src={data.img}
                className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                alt=""
              />
              <div className="">
                <h5 className="text-xl font-semibold">{data.name}</h5>
                <p className="text-xl text-yellow-500">{data.price}</p>
              </div>
            </motion.div>
          ))}
         
        </div>
      </div>
    </section>
  );
};

export default HotDesert;
