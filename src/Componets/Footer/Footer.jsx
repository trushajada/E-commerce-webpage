import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className=" py-8 bg-gray-100 dark:bg-gray-900 bg-[url('https://shopsy-tcj.netlify.app/assets/footer-pattern-mGVwO-y6.jpg')] h-[300px]">
                <div className="container mx-auto">
                    <div data-aos="zoom-in" className="grid md:grid-cols-3  pt-5 aos-init aos-animate ">
                        <div className="py-8 px-4 mx-auto text-center">
                            <h1 className="sm:text-3xl text-xl font-bold sm:text-left  mb-3 flex items-center gap-3 text-white text-center">
                                <img src="https://shopsy-tcj.netlify.app/assets/logo-Jm4BVSCI.png" alt="logo" className="w-10 " />

                                Shopsy</h1>
                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 col-span-2 md:pl-10">
                            <div className="flex gap-10 mx-auto">
                                <div className="py-8 px-4">
                                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-white">Important Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>Home</span></li>
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>About</span></li>
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>Contact</span></li>
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>Blog</span></li>
                                    </ul>
                                </div>
                                <div className="py-8 px-4">
                                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-white"> Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>Home</span></li>
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>About</span></li>
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>Contact</span></li>
                                        <li className="cursor-pointer hover:text-blue-500 hover:translate-x-1 duration-300 text-gray-200"><span>Blog</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mx-auto">
                                <div className="flex items-center gap-3 mt-6 ">
                                    <a href="#">
                                        <FaInstagram  className="w-[50px] text-3xl"/>
                                    </a>
                                    <a href="#">
                                        <FaFacebookSquare className="w-[50px] text-3xl"/></a>
                                    <a href="#">
                                        <FaLinkedin className="w-[50px] text-3xl"/></a>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-center gap-3">
                                    <FaLocationArrow  className="me-3 mt-1"/> <p>Noida, Uttar Pradesh</p>
                                    </div>
                                    <div className="flex items-center gap-3 mt-3">
                                    <CiMobile4 className="me-3 mt-1"/><p>+91 123456789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer