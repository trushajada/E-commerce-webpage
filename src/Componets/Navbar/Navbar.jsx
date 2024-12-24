import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Darkmode from "../Darkmode/Darkmode";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md ">
        <div className="bg-[#FEA92866] py-3">
          <div className="container mx-auto justify-between items-center flex px-3">
            <div>
              <a href="" className="font-sans font-bold text-2xl sm:text-3xl flex gap-2">
                <img src="https://shopsy-tcj.netlify.app/assets/logo-Jm4BVSCI.png" alt="logo" className="w-10" />
                Shopsy
              </a>
            </div>
            <div className="flex  items-center justify-center">
              <div className="group relative">
                <input type="text" placeholder="Search..." className="w-[200px]sm:w-[200px] rounded-full p-1 gap-2 transition-all duration-200 me-2 px-4 " />
                <IoIosSearch className="absolute top-1/2 -translate-y-1/2 right-4 " />
              </div>
              <button className="bg-orange-400 from-primary to-secondary transition-all duration-200 text-white py-3 px-4 rounded-full flex items-center gap-3 group h-8"><span className="group-hover:block hidden transition-all duration-200">Order</span><FaCartShopping /></button>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>

      {/* header  */}

      <div className="header">
        <div className="container mx-auto">

        </div>
      </div>
    </>
  );
};

export default Navbar;