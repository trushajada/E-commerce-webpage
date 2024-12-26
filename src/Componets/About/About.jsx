import React from "react";
import Product from "../Product/Product";

const About = () => {
    return (
        <>
            <section className="mb-20 bg-gray-100 dark:bg-gray-800 text-white h-[300px]  bg-[url('https://shopsy-tcj.netlify.app/assets/orange-pattern-w2kUn2Xh.jpg')] bg-no-repeat bg-cover" id="about">
                <div className="container mx-auto">
                    <div className="space-y-6 max-w-xl  mx-auto py-12">
                        <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-bold">Get Notified About New Products</h1>
                        <input  type="text" placeholder="Enter your email" className="w-full p-3 " /></div>
                </div>
            </section>
            <Product/>
            
        </>
    )
}
export default About