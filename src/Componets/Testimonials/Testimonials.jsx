import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Satya Nadella",
    image: "https://picsum.photos/102/102",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    id: 2,
    name: "Virat Kohli",
    image: "https://picsum.photos/104/104",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    id: 3,
    name: "Sachin Tendulkar",
    image: "https://picsum.photos/103/103",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
  {
    id: 4,
    name: "Victor",
    image: "https://picsum.photos/101/101",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio.",
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1, 
          },
        },
      ],

  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-3  ">

    <div className="container mx-auto p-5 ">
      {/* Section Header */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <p className="text-sm text-orange-400 mb-3">What our customers are saying</p>
        <h1 className="text-3xl font-bold mb-2">Testimonials</h1>
        <p className="text-sm text-gray-400 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi.
        </p>
      </div>

      {/* Slider */}
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="flex flex-col items-center gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 relative  grid-cols-1 sm:grid-cols-1">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-20 h-20"
              />
              <p className="text-xs text-gray-500">{testimonial.text}</p>
              <h1 className="text-xl font-bold text-black/80">{testimonial.name}</h1>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </section>

  );
};

export default Testimonials;