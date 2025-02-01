import React from 'react'
import Image2 from "../assets/hero/shopping.png";
import Image3 from "../assets/hero/sale.png";
import Image1 from "../assets/hero/women.png";

const Test = () => {
  return (
    <div className='flex  items-center justify-between'>
        <div className="order-1">
            <img src={Image1} alt="" />
        </div>
        <div className=" ">
            <img src={Image2} alt="" />
        </div>
        <div className="order-2 ">
            <img src={Image3} alt="" />
        </div>
        <div className="order-4">
            <img src={Image1} alt="" />
        </div>
    </div>
  )
}

export default Test