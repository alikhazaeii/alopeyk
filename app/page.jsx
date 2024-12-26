'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "https://cdn.alopeyk.com/misc/website/images/original/services/slides/alopeyk.webp", 
    text: "ارسال در کمترین زمان"
  },
  {
    image: "https://cdn.alopeyk.com/misc/website/images/original/services/slides/alotaxi.webp", 
    text: "فرار از ترافیک شهر"
  },
  {
    image: "https://cdn.alopeyk.com/misc/website/images/original/services/slides/alovanet.webp", 
    text: "حمل سریع بارهای سنگین"
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTimelineClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full md:pt-20">
      <div className="flex flex-wrap justify-evenly">
        <div className="md:w-5/12 w-full md:order-2">
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide}`}
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* متن */}
        <div className="w-full md:w-5/12 flex items-center justify-center p-5">
          <p className="text-2xl text-center">{slides[currentSlide].text}</p>
        </div>
      </div>

      {/* تایم‌لاین */}
      <div className="absolute bottom-0 left-0 w-full p-2">
        <div className="hidden md:flex justify-center items-center ">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => handleTimelineClick(index)} // کلیک روی تایم‌لاین
              className={`h-10 w-10 mx-5 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
