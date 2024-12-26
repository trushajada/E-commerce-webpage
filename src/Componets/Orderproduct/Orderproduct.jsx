import React from "react";
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import { MdOutlineStar } from "react-icons/md";


const Orderproduct = () => {
    const Ware = [
        {
            id: 1,
            img: product1,
            title: "Casual Wear",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed libero dicta, dolor quam dolorum at non pariatur!"
        },
        {
            id: 2,
            img: product2,
            title: "Printed shirt",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed libero dicta, dolor quam dolorum at non pariatur!"
        },
        {
            id: 3,
            img: product3,
            title: "Women shirt",
            description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <section className="relative bg-gray-100 dark:bg-gray-900 min-h-screen flex py-5 px-3">
            <div className="container mx-auto p-3 py-5 hero flex-grow items-center justify-center">
                <div className="py-5 ">
                    <span className="text-[#ed8900]">Top Rated Products for you</span>
                    <h1 className="text-3xl font-bold">Best Products</h1>
                    <p className="text-gray-400 font-semibold text-sm mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                        asperiores modi Sit asperiores modi
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-5 mt-5 px-5">
                {Ware.map((item) => (
                    <div key={item.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-[#ed8900] hover:text-white relative shadow-xl duration-300 group p-6 max-w-[300px] mx-auto max-h-[340px]"> 
                       
                            <div className="h-[100px]"> <img
                            src={item.img}
                            alt={item.title}
                            className="max-w-[140px] mx-auto transform group-hover:scale-105 duration-300 drop-shadow-md -translate-y-20 object-cover  rounded-full "></img></div>
                            <div className="p-2 text-center">
                            <div class="w-full flex items-center justify-center gap-1"></div>
                            <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                            <p className="text-center text-gray-700 dark:text-gray-300 text-xs">{item.description}</p>
                            <button className="bg-[#ed8900] mt-4 py-2 px-4 w-full text-white rounded-full hover:bg-white hover:text-[#ed8900] transition duration-300">Order Now</button>
                            </div>
                            
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Orderproduct;