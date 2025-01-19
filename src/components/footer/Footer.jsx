import React from "react";
import logo from "../../assets/food/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-lightYellow rounded-t-3xl"
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> 
        {/* brand Info */}
        <div className="space-y-3 lg:max-w-[300px]">
          <img src={logo} className="w-24 " alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, laborum reiciendis quis omnis sequi tempora deleniti
            rem in possimus architecto ducimus, debitis quo excepturi. Iusto
            dignissimos ex adipisci laborum quae?
          </p>
          <a href="#" className="inline-block mt-6 text-sm">
            ramtinzand6@gmail.com
          </a>
        </div>
        {/* quick Links */}
        <div className="col-span-2 grid md:grid-cols-3 grid-cols-2 gap-6">
          <div className="">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3 mt-6">
              <li className="footer-links">Home</li>
              <li className="footer-links">About</li>
              <li className="footer-links">Contact</li>
              <li className="footer-links">Food</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3 mt-6">
              <li className="footer-links">Home</li>
              <li className="footer-links">About</li>
              <li className="footer-links">Contact</li>
              <li className="footer-links">Food</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3 mt-6">
              <li className="footer-links">Home</li>
              <li className="footer-links">About</li>
              <li className="footer-links">Contact</li>
              <li className="footer-links">Food</li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
