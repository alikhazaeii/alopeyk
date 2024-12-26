import Image from 'next/image'
import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";


export default function Contact() {
  return (
    <>
      <section className="h-screen w-screen pt-24">
        <figure className="relative w-full h-full ">
          <Image
            src="/tamas.jpg"
            alt="head"
            layout="fill"
            objectFit="cover"
          />
          <div className='bg-black opacity-60 absolute w-full h-full'></div>
          <figcaption className='absolute w-full h-full flex justify-center items-center'>
            <div className='flex flex-wrap justify-center items-center *:my-5' >
              <p className='text-xl md:text-3xl font-bold text-white w-full text-center'> تیم پشتیبانی الوپیک <br />
                آماده پاسخگویی به نیازهای شماست</p>
              <button className='bg-sky-500 text-white p-4 font-bold text-xl rounded-xl flex justify-center items-center *:mx-2'> <FiPhoneCall /> 021-51797000
              </button>
            </div>
          </figcaption>
        </figure>
      </section>
      <section className='w-full flex flex-wrap justify-evenly'>
        <article className='w-full md:w-5/12 *:my-5'>
          <figure className='w-full flex justify-center'>
            <Image width={200} height={200} alt='img' src="https://cdn.alopeyk.com/misc/website/images/original/contact-us/support-chat.svg" />
          </figure>
          <div className='text-center *:my-2'>
            <h2 className='font-bold text-2xl'>گفتکو با کارشناس</h2>
            <p className='text-gray-500'>در هر زمان از شبانه‌روز به صورت آنلاین با کارشناسان ما گفتگو کنید.</p>
            <button className='py-2 px-5 bg-sky-400 text-white rounded-lg'>گفتگو با کارشناس</button>
          </div>
        </article>
        <article className='w-full md:w-5/12 *:my-5'>
          <figure className='w-full flex justify-center'>
            <Image width={200} height={200} alt='img' src="https://cdn.alopeyk.com/misc/website/images/original/contact-us/faq.svg" />
          </figure>
          <div className='text-center *:my-2'>
            <h2 className='font-bold text-2xl'>سوالات متداول</h2>
            <p className='text-gray-500'>پاسخ سوالات خود را بدون اتلاف زمان در بین سوالات متداول پیدا کنید.</p>
            <button className='py-2 px-5 bg-sky-400 text-white rounded-lg'>سوالات متداول</button>
          </div>
        </article>
      </section>
      <section className='w-full justify-evenly flex flex-wrap my-10 *:my-10'>
        <h2 className='w-full text-center text-3xl font-bold'>ارتباط با الوپیک</h2>
        <div className='w-full md:w-5/12 *:flex *:items-center *:mx-2 *:my-5'>
          <h2 className='text-2xl'>دفتر مرکزی: تهران، خیابان احمد قصیر(بخارست)، خیابان ششم، پلاک ۶ <IoLocationOutline className='text-3xl mx-5 ' />
          </h2>
          <p>
            021-51797000 <MdOutlineMail className='text-3xl mx-5 ' />
          </p>
          <span>
            support[at]alopeyk.com <IoCallOutline className='text-3xl mx-5 ' />
          </span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7914676510636!2d51.42055738976506!3d35.73134675993931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e014fcdbe35b9%3A0xa5469c2a20ed4dff!2sPCJ9%2B8WJ%20District%206%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2snl!4v1735247099016!5m2!1sen!2snl"
          width="600"
          height="450"
          style={{ border: 0 }} // تبدیل به یک شیء جاوااسکریپت
          allowFullScreen={true} // رفع خطای JSX
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // رفع خطای JSX
        ></iframe>

        
      </section>
    </>
  )
}
