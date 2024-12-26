'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Business() {
  const images = [
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/sheypoor.jpg",
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/a4baz.jpg",
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/chap_matin.jpg",
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/delino.jpg",
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/goldtag.jpg",
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/mamanpaz.jpg",
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/mobile_komak.jpg",
    "https://cdn.alopeyk.com/misc/website/images/original/business/brands/mohsen.jpg",
  ]

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = [
    ...images.slice(startIndex, startIndex + 5),
    ...images.slice(0, Math.max(0, startIndex + 5 - images.length)),
  ];


  return (

    <>
      <section className="h-screen w-screen pt-24">
        <figure className="relative w-full h-full ">
          <Image
            src="/kasbokar.jpg"
            alt="head"
            layout="fill"
            objectFit="cover"
          />
          <div className='bg-black opacity-60 absolute w-full h-full'></div>
          <figcaption className='absolute w-full h-full flex justify-center items-center'>
            <div className='flex flex-wrap justify-center items-center *:my-5' >
              <p className='text-xl md:text-3xl font-bold text-white w-full text-center'>ارزان، سریع، بدون محدودیت<br />
                ارسال بسته‌های خود را به ما بسپارید</p>
              <button className='bg-sky-500 text-white p-5 font-bold text-2xl rounded-xl'>درخواست مشاوره </button>
            </div>
          </figcaption>
        </figure>
      </section>
      <section className='w-full flex flex-wrap my-20 justify-evenly '>
        <h2 className='w-full text-3xl font-bold text-center'>راه‌حل‌های الوپیک</h2>
        <div className='w-full md:w-3/12 border rounded-xl my-10'
          style={{ backgroundImage: "url('/bg.svg')" }} >
          <h2 className='w-full text-center my-5 text-white text-2xl'>پیک موتوری</h2>
          <ul className='w-full bg-white *:my-5 *:text-xl  p-5'>
            <li>تحویل سریع</li>
            <li>برای کمتر از ۱۰ مقصد</li>
            <li>تا سقف ۲۵ کیلوگرم</li>
            <li>چند درخواست همزمان</li>
            <button className='bg-sky-500 p-5 font-bold text-2xl text-white rounded-3xl'>بیشتر بدانید</button>
          </ul>
        </div>
        <div className='w-full md:w-3/12 my-5 *:text-white *:my-2 rounded-2xl'
          style={{ backgroundImage: "url('/bg.svg')" }} >
          <h2 className='w-full text-2xl font-bold text-center'>سفارش انبوه</h2>
          <h5 className='w-full text-xl text-center'>اقتصادی و به صرفه</h5>
          <ul className='w-full m-10 py-5 *:my-5 *:text-xl'>
            <li>تا ۷۰ درصد کاهش هزینه‌ها</li>
            <li>تحویل در بازه زمانی دلخواه</li>
            <li>بیمه مرسولات</li>
            <li>از ۵ تا ۲۰۰۰ مرسوله</li>
            <button className='bg-sky-400 border p-3 font-bold text-2xl text-white rounded-2xl'>بیشتر بدانید</button>
          </ul>
        </div>
        <div className='w-full md:w-3/12 border rounded-xl my-10'
          style={{ backgroundImage: "url('/bg.svg')" }} >
          <h2 className='w-full text-center my-5 text-white text-2xl'>وانت بار</h2>
          <ul className='w-full bg-white *:my-5 *:text-xl  p-5'>
            <li>تحویل سریع</li>
            <li>برای کمتر از ۱۰ مقصد</li>
            <li>تا سقف ۲۰۰۰ کیلوگرم</li>
            <li>چند درخواست همزمان</li>
            <button className='bg-sky-500 p-5 font-bold text-2xl text-white rounded-3xl'>بیشتر بدانید</button>
          </ul>
        </div>
      </section>
      <section className='w-full flex flex-wrap justify-evenly py-10'>

        <article className='w-full md:w-5/12 *:m-5 py-14'>
          <h2 className='text-2xl font-bold'>وب سرویس (API) الوپیک</h2>
          <p className='text-gray-500 text-lg'>امکان ارسال سفارش با سرویس‌های مختلف الوپیک را به سایت یا اپلیکیشن خود اضافه کرده و ارسال‌های خود را مدیریت کنید.</p>
          <button className='bg-sky-500 text-white font-bold text-xl py-2 px-5 rounded-xl'>درخواست API </button>
          <button className=' border border-blue-500 text-sky-500 font-bold text-xl py-2 px-5 rounded-xl'>راهنمای استفاده</button>
        </article>
        <figure className='w-full md:w-5/12'>
          <Image width={500} height={500} src="https://cdn.alopeyk.com/misc/website/images/original/business/api.webp" alt='lapotpo' />
        </figure>
      </section>
      <section className="w-full mt-32  *:my-10">
        <h2 className="w-full text-center text-3xl font-bold">مزایای الوپیک برای کسب‌و‌کارها
        </h2>
        <article className="w-full flex flex-wrap *:w-full *:md:w-5/12 justify-evenly *:shadow-2xl *:my-5 *:rounded-xl">
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/business/icon-cards/special-support.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">
                پشتیبانی ویژه</h2>
              <p className="text-gray-500">مشکلات شما توسط کارشناسان ما به صورت ۲۴ ساعته و اختصاصی پیگیری می‌شوند.</p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/business/icon-cards/economic.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">صرفه‌جویی در هزینه</h2>
              <p className="text-gray-500">با خدمات ارسال ارزان یا انبوه الوپیک تا70درصدهزینه ارسال مرسوله‌های خود را کاهش دهید.</p>
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
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/business/icon-cards/dashboard.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">داشبورد مدیریتی</h2>
              <p className="text-gray-500">با توجه به نیازهای کسب‌و‌کار خود تمامی فرایند ارسال مرسوله‌ها را به طور جامع مدیریت کنید.</p>
            </div>

          </div>
        </article>
      </section>

      <section className="w-full my-10">
        <h2 className="w-full text-center text-3xl font-bold mb-5">
          کسب‌وکارهایی که به ما اعتماد کردند
        </h2>
        <div className="w-full flex justify-center overflow-hidden my-10">
          <div className="flex space-x-4 transition-all duration-500 ">
            {visibleImages.map((image, index) => (
              <div
                key={index}
                className="w-3/12 h-[100px] *:mx-10  rounded-lg overflow-hidden transition-all divide-fuchsia-500"
              >
                <Image
                  src={image}
                  alt={`Brand ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
