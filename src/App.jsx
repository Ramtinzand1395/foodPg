import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Products from "./components/products/Products.jsx";
import TopProducts from "./components/TopProducts/TopProducts.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";

import Test from "./components/Test.jsx";
const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div className="">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero  handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts  handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      {/* <Test /> */}
    </div>
  );
};

export default App;
