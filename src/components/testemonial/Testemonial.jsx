import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../hero/Hero";
import food3 from "../../assets/food/banner.png";

const Testemonial = () => {
  return (
    <section>
      <div className="container py-24 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center ">
          {/* Text content section */}
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.p
              variants={SlideUp(0.4)}
              initial="init"
              whileInView="animate"
              className="text-xl  font-serif relativez-10"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              dicta, atque, quod perspiciatis obcaecati necessitatibus qui nulla
              dolores possimus similique nihil ut aspernatur nisi nostrum beatae
              expedita unde doloribus facilis.
            </motion.p>

            <div className="flex items-center gap-3">
              <motion.img
                variants={SlideUp(0.8)}
                initial="init"
                whileInView="animate"
                src="https://picsum.photos/id/237/200/300"
                className="w-14 h-14 rounded-full object-cover"
              />
              <motion.div
                variants={SlideUp(1.3)}
                initial="init"
                whileInView="animate"
              >
                <h2 className="text-xl font-bold">Ramtin Zand</h2>
                <p className="text-sm">Fullstack Develoaper</p>
              </motion.div>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative ">
            <motion.img
              initial={{ opacity: 0, x: -100, y: 100 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 50, y: -50, rotate: 15, scale: 1.1 }}
              src={food3}
              alt=""
              className="relative z-10 w-full lg:max-w-[280px] img-shadow "
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-lightYellow rounded-full h-[320px] w-[320px] top-[50%] transform translate-y-[-50%]  translate-x-[50%] right-[50%] absolute "
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testemonial;
