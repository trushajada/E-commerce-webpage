import React from "react";
import winter from "../../assets/images/winter.jpg"
import { GiPadlock } from "react-icons/gi";
import { GiStorkDelivery } from "react-icons/gi";
import { MdPayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Winter = () => {
    return (
        <>
            <section className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-900 ">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                        <div className="img mx-auto px-5">
                            <img src={winter} alt="winter" className="w-[450px] h-[350px]" />
                        </div>
                        <div className="detail px-4">
                            <h1 className="text-4xl font-semibold mb-3">Winter Sale upto 50% Off</h1>
                            <p className="text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                            <div class="flex flex-col gap-4 mt-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-purple-300 w-[50px] h-[50px] rounded-full"> <GiPadlock className="mx-auto justify-center items-center h-12" />
                                    </div>
                                    <p>Quality Products</p>
                                </div>
                                <div className="flex items-center gap-4 ">
                                    <div className="bg-orange-400 w-[50px] h-[50px] rounded-full"> <GiStorkDelivery 
                                    className="mx-auto justify-center items-center h-12" />
                                    </div>
                                    <p>Fast Delivery</p>
                                </div>
                                <div className="flex items-center gap-4 ">
                                    <div className="bg-green-400 w-[50px] h-[50px] rounded-full"> <MdPayments  className="mx-auto justify-center items-center h-12" />
                                    </div>
                                    <p>Easy Payment method</p>
                                </div>
                                <div className="flex items-center gap-4 "><div className="bg-yellow-300 w-[50px] h-[50px] rounded-full"> <BiSolidOffer  className="mx-auto justify-center items-center h-12" />
                                </div>
                                    <p>Get Offers</p></div></div>
                        </div>
                    </div>
                </div>

                
            </section>
        </>
    )
}
export default Winter