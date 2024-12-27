import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full flex flex-wrap justify-evenly my-10 border-t-2 py-5'>
      <article className='w-full md:w-8/12 *:w-6/12 *:md:w-3/12 flex flex-wrap '>
        <ul className='text-2xl font-bold *:text-lg  *:my-4 *:font-semibold'>خدمات
          <li> الوپیک</li>
          <li>الوتاکسی</li>
          <li>الووانت</li>
          <li>الوپست</li>
        </ul>
        <ul className='text-2xl font-bold *:text-lg  *:my-4 *:font-semibold'>کسب‌و‌کارها
          <li>خدمات کسب‌وکار</li>
          <li>الونومیک</li>
          <li>وب سرویس</li>
        </ul>
        <ul className='text-2xl font-bold *:text-lg  *:my-4 *:font-semibold'>همراه با ما
          <li> درباره ما</li>
          <li>ثبت نام سفیران</li>
          <li>فرصت‌های شغلی</li>
          <li>وبلاگ الوپیک</li>
          <li>تماس با ما</li>
        </ul>
        <ul className='text-2xl font-bold *:text-lg  *:my-4 *:font-semibold'>آموزش
          <li>سوالات متداول</li>
          <li>شرایط و ضوابط</li>
        </ul>
      </article>
      <article className='w-full md:w-3/12 *:m-5 *:text-lg *:font-bold text-center capitalize'>
        <h2>This project Coded By Ali khazaei </h2>
        <h2>ali.tradding021@gmail.com</h2>
        <ul className='flex *:mx-2 *:border *:rounded-full justify-center  transition-all duration-300' >
          <li className='hover:scale-125 text-2xl'><Link href="https://www.instagram.com/ali_khazaei_developer/"><FaInstagram /></Link>
          </li>
          <li className='hover:scale-125 text-2xl'><Link href="https://www.linkedin.com/in/ali-khazaei021/"><IoLogoLinkedin /></Link>
          </li>
          <li className='hover:scale-125 text-2xl'><Link href="https://github.com/alikhazaeii"><FaGithub /></Link>
          </li>
        </ul>
        <figure className='flex justify-center items-center'>
          <Image width={100} height={100} alt='footerone' src='https://cdn.alopeyk.com/misc/website/images/original/layouts/main/footer/enamad.jpg' />
          <Image src="https://cdn.alopeyk.com/misc/website/images/original/layouts/main/footer/namad.jpg" width={100} height={100} alt='footertwo' />
        </figure>
      </article>
      <figure className='flex w-full py-5 border-t-2 *:mx-2 justify-center flex-wrap'>
        <Image width={200} height={200} alt='ibapp' src="https://cdn.alopeyk.com/misc/website/images/original/common/web-app.svg"/>
        <Image width={200} height={200} alt='bazar'src="https://cdn.alopeyk.com/misc/website/images/original/common/cafe-bazaar.svg"/>
        <Image width={200} height={200} alt='googlestore' src="https://cdn.alopeyk.com/misc/website/images/original/common/google-play.svg"/>
      </figure>
    </footer>
  )
}
