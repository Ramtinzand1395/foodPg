import React from "react";
import logo from "../../assets/food/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const SlideDown = (delay) => {
  return {
    init: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

const navMenu = [
  { id: 1, title: "Home", path: "/", delay: 0.1 },
  { id: 2, title: "About", path: "/about", delay: 0.2 },
  { id: 3, title: "Menu", path: "/menu", delay: 0.3 },
  { id: 4, title: "Delivery", path: "/delivery", delay: 0.4 },
  { id: 5, title: "Contact Us", path: "/contact-us", delay: 0.5 },
];
const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center font-league">
      {/* logo Section */}
      <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8 , delay:0.5}} src={logo} className="w-36" alt="" />
      {/* menu Section */}
      <div className="hidden md:block">
        <ul className="flex gap-6">
          {navMenu.map((menu) => (
            <motion.li variants={SlideDown(menu.delay)} initial="init" animate="animate" key={menu.id} className="nav-menu" data-delay={menu.delay}>
              <a href={menu.path} className="inline-block px-2 py-2 text-2xl">
                {menu.title}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      {/* button Section */}
      <motion.div variants={SlideDown(1)} initial="init" animate="animate" className="">

      <button className="bg-dark text-white rounded-full w-[40px] h-[40px] grid place-content-center"><IoCartOutline /></button>
      </motion.div>
    </nav>
  );
};

export default Navbar;
