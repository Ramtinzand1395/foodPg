import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import HotDesert from "./components/hotDesert/HotDesert";
import Banner from "./components/banner/Banner";
import PopulateRecepi from "./components/populatedReeoi/PopulateRecepi";
import Testemonial from "./components/testemonial/Testemonial";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDesert />
      <Banner />
      <PopulateRecepi />
      <Testemonial />
      <Footer />
    </div>
  );
};

export default App;
