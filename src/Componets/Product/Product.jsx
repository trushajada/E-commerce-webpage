import React, { useState } from "react";
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.jpg'
import p3 from '../../assets/images/p3.jpg'
import p4 from '../../assets/images/p4.jpg'
import p5 from '../../assets/images/p5.jpg'




const products = [
    {
        id: 1,
        image: p1,
        title: "Women Ethnic",
        color: "White",
        rating: 5,
        delay: 0,
    },
    {
        id: 2,
        image: p2,
        title: "Women Western",
        color: "Red",
        rating: 4.5,
        delay: 200,
    },
    {
        id: 3,
        image: p3,
        title: "Goggles",
        color: "Brown",
        rating: 4.7,
        delay: 400,
    },
    {
        id: 4,
        image: p4,
        title: "Printed T-Shirt",
        color: "Yellow",
        rating: 4.4,
        delay: 600,
    },
    {
        id: 5,
        image: p5,
        title: "Fashion T-Shirt",
        color: "Pink",
        rating: 4.5,
        delay: 800,
    },
    {
        id: 6,
        image: p1,
        title: "New Arrival",
        color: "Blue",
        rating: 4.8,
        delay: 1000,
    },
];

const Product = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleViewAll = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };

    const displayedProducts = showAll ? products : products.slice(0, 5);

    return (
        <section className=" bg-gray-100 dark:bg-gray-900 py-5 px-3 w-full">
        <div className="container mx-auto p-5 ">
           
            <div className="text-center mb-10 max-w-[600px] mx-auto ">
                <p
                    data-aos="fade-up"
                    className="text-sm text-[#ed8900] aos-init aos-animate mb-2"
                >
                    Top Selling Products for You
                </p>
                <h1
                    data-aos="fade-up"
                    className="text-3xl font-bold  mb-2"
                >
                    Products
                </h1>
                <p
                    data-aos="fade-up"
                    className="text-sm text-gray-400 aos-init aos-animate"
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                    asperiores modi Sit asperiores modi.
                </p>
            </div>

           
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                {displayedProducts.map((product) => (
                    <div
                        key={product.id}
                        data-aos="fade-up"
                        data-aos-delay={product.delay}
                        className="space-y-3 aos-init aos-animate"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-[220px] w-[150px] object-cover rounded-md"
                        />
                        <div>
                            <h3 className="font-semibold">{product.title}</h3>
                            <p className="text-sm text-gray-600">{product.color}</p>
                            <div className="flex items-center gap-1">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 576 512"
                                    className="text-yellow-400"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                </svg>
                                <span>{product.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center">
                <button
                    onClick={toggleViewAll}
                    className="text-center mt-10 cursor-pointer bg-primary text-white bg-[#ed8900] py-1 px-5 rounded-md"
                >
                    {showAll ? "Show Less" : "View All"}
                </button>
            </div>
        </div>
        </section>
    );
};

export default Product;