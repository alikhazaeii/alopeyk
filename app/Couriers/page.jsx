'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function IncomeCalculator() {
  const [hours, setHours] = useState(0);
  const [selectedService, setSelectedService] = useState("پیک موتوری");

  const calculateIncome = (hours, service) => {
    let hourlyRate = 200000;

    if (service === "تاکسی موتوری") {
      hourlyRate = 220000;
    } else if (service === "وانت بار") {
      hourlyRate = 300000;
    }

    return hours * hourlyRate;
  };

  return (
    <>
      <section className="w-full flex flex-wrap justify-evenly pt-20">
        <div className="w-full flex flex-col items-center py-10  md:w-5/12">
          <h2 className="text-3xl font-bold mb-5">کسب درآمد با الوپیک</h2>
          <div className="flex mb-10">

            {["پیک موتوری", "تاکسی موتوری", "وانت بار"].map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-5 py-3 rounded-lg font-bold ${selectedService === service
                  ? "bg-sky-500 text-white"
                  : "bg-gray-200 text-gray-800"
                  }`}
              >
                {service}
              </button>
            ))}
          </div>

          <p className="text-xl mb-5">
            با <span className="font-bold">{hours}</span> ساعت کار در روز می‌توانید تا{" "}
            <span className="font-bold text-green-600">
              {calculateIncome(hours, selectedService).toLocaleString("fa-IR")} تومان
            </span>{" "}
            درآمد کسب کنید.
          </p>

          <div className="w-full max-w-lg flex flex-col items-center">
            <input
              type="range"
              min="0"
              max="12"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between w-full text-gray-600 mt-2">
              <span>0</span>
              <span>12</span>
            </div>
          </div>
          <div className="flex m-5 *:m-5">
            <button className="bg-sky-500 text-2xl text-white py-2 px-5 rounded-xl">ثبت نام انلاین</button>
            <button className="border border-blue-600 text-2xl text-sky-500 py-2 px-5 rounded-xl">ثبت نام حضوری</button>
          </div>
        </div>
        <figure className="w-full md:w-5/12">
          <Image width={500} height={500} alt="courises" src="https://cdn.alopeyk.com/misc/website/images/original/couriers/header/bg.webp" />
        </figure>

      </section>
      <section className="w-full">
        <h2 className="w-full text-center text-3xl font-bold">از مزایای الوپیک بهره‌مند شوید
        </h2>
        <article className="w-full flex flex-wrap *:w-full *:md:w-5/12 justify-evenly *:shadow-2xl *:my-5 *:rounded-xl">
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/couriers/icon-cards/cod_instant_payment.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">

                برداشت آنی درآمد</h2>
              <p className="text-gray-500">درآمد خود را به صورت لحظه‌ای از الوپیک دریافت کنید.</p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/couriers/icon-cards/time_location.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">
                ساعت و منطقه دلخواه</h2>
              <p className="text-gray-500"> در هر زمان و مکان درخواست بگیرید و بدون محدودیت کسب درآمد کنید </p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/couriers/icon-cards/loyalty_club.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold"> باشگاه سفیران</h2>
              <p className="text-gray-500">
                از هر سفر امتیاز بگیرید و جوایز شگفت انگیز دریافت کنید.
              </p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/couriers/icon-cards/support_packs.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">بسته‌های حمایتی </h2>
              <p className="text-gray-500">با فعالیت در الوپیک از سهمیه ویژه بنزین، وام کم‌بهره و حمایت‌های دیگر برخوردار شوید.</p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/couriers/icon-cards/support.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">
                پشتیبانی ۲۴ ساعته </h2>
              <p className="text-gray-500">کارشناسان ما در بخش پشتیبانی همواره آماده رفع مشکلات شما هستند.
              </p>
            </div>

          </div>
          <div className="w-full flex">
            <figure className="w-3/12 ">
              <Image width={150} height={150} alt="sis" src='https://cdn.alopeyk.com/misc/website/images/original/couriers/icon-cards/easy_recruitment.svg' />
            </figure>
            <div className="w-8/12 *:p-2">
              <h2 className="text-2xl font-bold">
                استخدام سریع و ساده</h2>
              <p className="text-gray-500">به آسانی و در کم‌ترین زمان سفیر الوپیک شوید و شروع به کسب درآمد کنید.</p>
            </div>

          </div>
        </article>
      </section>
      <section className="w-full  my-20 flex justify-center ">
        <div className="rounded-xl flex flex-wrap justify-evenly *:m-10 bg-sky-400 w-11/12">

          <article className="w-full md:w-6/12 *:m-10">
            <h2 className="text-3xl text-white font-bold ">سفر بروید، جایزه بگیرید</h2>
            <p className="text-white text-xl ">با پذیرش درخواست و کسب امتیاز در باشگاه سفیران می‌توانید هدایایی همچون لوازم یدکی، کد‌های تخفیف و شانس شرکت در قرعه کشی دریافت کنید.</p>
            <button className="bg-sky-500 text-white py-2 text-2xl px-4 border rounded-2xl">بیشتر بدانیم</button>

          </article>
          <figure className="w-full md:w-4/12">
            <Image width={500} height={500} alt="box" src="https://cdn.alopeyk.com/misc/website/images/original/couriers/club.webp" />
          </figure>
        </div>

      </section>
    </>

  );
}
