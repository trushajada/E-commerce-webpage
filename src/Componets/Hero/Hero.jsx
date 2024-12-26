import React from "react";
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const Imagelist = [
        {
            id: 1,
            img: banner1,
            title: "Upto 50% off on all Men's Wear",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sed libero dicta, dolor quam dolorum at non pariatur! Laborum deleniti dignissimos a accusantium, deserunt excepturi dicta harum architecto cupiditate atque."
        },
        {
            id: 2,
            img: banner2,
            title: "Special Offer on Women's Collection",
            description: "Discover the latest trends and exclusive discounts on our women's collection. Shop now and elevate your style."
        },
        {
            id: 3,
            img: banner3,
            title: "Upto 70% off on all couple's Wear",
            description: "Dress your little ones in style with our new arrivals. Explore adorable outfits and accessories for kids of all ages."
        }
    ];

    const settings = {
        dots: true, 
        infinite: true,
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 1000, 
        responsive: [ 
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    return (
        <section className="hero relative h-[650px]  overflow-hidden shadow-md">
            <div className="container mx-auto relative z-10 h-full">
                <Slider {...settings} className="h-full"> 
                    {Imagelist.map((item) => (
                        <div key={item.id} className="h-full flex flex-col items-center justify-center text-center px-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center h-[650px] text-left">
                            <div className=" p-4 rounded-lg"> 
                                <h1 className="text-6xl font-bold  drop-shadow-lg mb-2">{item.title}</h1>
                                <p className=" drop-shadow-lg">{item.description}</p>
                                <button className="bg-[#ed8900] mt-5 p-2 w-[130px] text-white rounded-full">Book Now</button>
                            </div>
                            <img src={item.img} alt={item.title} className="max-w-md mx-auto mb-8" />

                        </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="h-[700px] w-[700px] bg-[#FEA92866] absolute right-0 rounded-3xl rotate-45 -top-1/2 md:-top-[200px] lg:-top-[370px]  "></div>
        </section>
    );
};

export default Hero;