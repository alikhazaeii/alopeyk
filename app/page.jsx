'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "https://cdn.alopeyk.com/misc/website/images/original/services/slides/alopeyk.webp",
    text: "ارسال در کمترین زمان",
    text2: 'با پیک موتوری مرسوله‌ها را سریع ارسال کنید',
  },
  {
    image: "https://cdn.alopeyk.com/misc/website/images/original/services/slides/alotaxi.webp",
    text: "فرار از ترافیک شهر",
    text2: 'با تاکسی موتوری در کمترین زمان به مقصد برسید'
  },
  {
    image: "https://cdn.alopeyk.com/misc/website/images/original/services/slides/alovanet.webp",
    text: "حمل سریع بارهای سنگین",
    text2: 'با وانت، بارهای سنگین را آسان و مطمئن جابجا کنید'
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

    <>
      <section className="relative w-full md:pt-20">
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

          <div className="w-full md:w-5/12 text-center py-20 *:my-5">
            <h2 className="text-2xl text-center w-full md:text-3xl">{slides[currentSlide].text}</h2>
            <p className="text-xl text-center w-full md:text-2xl text-gray-500">{slides[currentSlide].text2}</p>
            <button className="bg-blue-500 p-5 rounded-xl text-white text-xl">ثبت درخواست</button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-2">
          <div className="hidden md:flex justify-center items-center ">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleTimelineClick(index)} // کلیک روی تایم‌لاین
                className={`h-5 w-5 mx-5 rounded-2xl cursor-pointer ${currentSlide === index ? "bg-black" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex flex-wrap justify-evenly items-center mt-32 ">
        <div className="w-full md:w-5/12 relative">
          <figure className="flex space-x-4 justify-center items-center">
            {/* تصویر اول */}
            <div className="relative">
              <p className="absolute text-white w-full h-full text-center bg-black rounded-2xl opacity-65 text-2xl">+100 <br /> کسب و کار مختلف</p>
              <Image
                className="rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                alt="one"
                width={120}
                height={100}
                src="https://cdn.alopeyk.com/misc/website/images/original/homepage/circle/img3.jpg"
              />
            </div>

            <div className="absolute left-10 top-28">
              <Image
                className="rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                alt="one"
                width={120}
                height={100}
                src="https://cdn.alopeyk.com/misc/website/images/original/homepage/circle/img2.jpg"
              />
            </div>

            <div className="absolute left-10 -top-28">
              <Image
                className="rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                alt="one"
                width={120}
                height={100}
                src="https://cdn.alopeyk.com/misc/website/images/original/homepage/circle/img1.jpg"
              />
            </div>

            <div className="absolute -top-32">
              <Image
                className="rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                alt="one"
                width={120}
                height={100}
                src="https://cdn.alopeyk.com/misc/website/images/original/homepage/circle/img4.jpg"
              />
            </div>

            <div className="absolute top-32">
              <Image
                className="rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                alt="one"
                width={120}
                height={100}
                src="https://cdn.alopeyk.com/misc/website/images/original/homepage/circle/img7.jpg"
              />
            </div>

            <div className="absolute right-10 top-28">
              <Image
                className="rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                alt="one"
                width={120}
                height={100}
                src="https://cdn.alopeyk.com/misc/website/images/original/homepage/circle/img6.jpg"
              />
            </div>

            <div className="absolute right-10 -top-28">
              <Image
                className="rounded-2xl border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                alt="one"
                width={120}
                height={100}
                src="https://cdn.alopeyk.com/misc/website/images/original/homepage/circle/img5.jpg"
              />
            </div>
          </figure>
        </div>

        <article className="w-full md:w-5/12 *:my-10 mt-20 md:mt-0 ">
          <h2 className="text-2xl md:text-3xl">الوپیک برای کسب و کار ها</h2>
          <p className="text-xl md:text-2xl text-gray-500">با خدمات کسب‌و‌کار الوپیک مرسوله‌های خود را ارزان و سریع به دست مشتریان برسانید</p>
          <button className="bg-blue-500 p-4 rounded-xl text-white text-xl">بیشتر بدانید</button>
        </article>

      </section>

      <section className="w-full mt-32  *:my-10">
        <h2 className="w-full text-center text-3xl font-bold">الوپیک، بدون محدودیت
        </h2>
        <article className="w-full flex flex-wrap *:w-full *:md:w-5/12 justify-evenly *:shadow-2xl *:my-5 *:rounded-xl">
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/homepage/icon-cards/setting.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">
                شخصی‌سازی درخواست‌ها</h2>
              <p className="text-gray-500">با استفاده از تنظیمات متنوع، درخواست را متناسب با نیاز‌های خود ثبت کنید.</p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/homepage/icon-cards/motorcycle.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">
                انواع وسایل حمل‌و‌نقل</h2>
              <p className="text-gray-500">با خدمات الوپیک جا‌به‌جایی هر نوع مرسوله و سفر درشهر را تجربه کنید.</p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/homepage/icon-cards/tracking.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">رصد آنلاین</h2>
              <p className="text-gray-500">
                وضعیت و مکان مرسوله‌ها را از مبدا تا مقصد به صورت لحظه‌ای رصد کنید
              </p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/homepage/icon-cards/multi-platform.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">
              انواع پلتفرم‌ها</h2>
              <p className="text-gray-500">الوپیک را در نسخه‌ها‌ی اپلیکیشن تحت وب، اندروید و ios تجربه کنید.</p>
            </div>

          </div>
        </article>
      </section>
    </>


  );
}
