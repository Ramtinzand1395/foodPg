import React from "react";
import food1 from "../../assets/food/food.png";
import food2 from "../../assets/food/food2-plate.png";
import food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../hero/Hero";

const PopulateRecepiData = [
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
const PopulateRecepi = () => {
  return (
    <section>
      <div className="container py-24 overflow-hidden">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="init"
          whileInView="animate"
          className=" text-3xl text-center font-league font-semibold uppercase py-8"
        >
          Our Popular Recipes
        </motion.h3>
        {/* card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center cursor-pointer">
          {PopulateRecepiData.map((data) => (
            <div
              key={data.id}
              className="group space-y-3 p-3 w-full bg-white/50 shadow-xl rounded-xl text-center"
            >
              <img
                src={data.img}
                className="w-44 mx-auto img-shadow transition-all duration-300 group-hover:scale-x-110 group-hover:translate-y-[-50px] group-hover:translate-x-10 group-hover:rotate-[50deg]"
                alt=""
              />
              <div className="">
                <button className="btn-primary opacity-0 group-hover:opacity-100 group-hover:mb-3">
                  Buy Now
                </button>
                <p className="text-lg font-semibold">{data.name}</p>
                <p className="text-xl font-bold text-yellow-500">
                  {data.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopulateRecepi;
