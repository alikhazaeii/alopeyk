import Image from 'next/image'
import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
export default function Contact() {
  return (
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
  )
}
