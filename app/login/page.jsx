import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <section className='w-full h-full flex flex-wrap items-center justify-center bg-[#0099ff] relative z-20 *:py-10'>
      <figure className="w-full flex justify-center mb-8">
        <Image height={200} width={200} alt='loginpic' src="https://app.alopeyk.com/static/img/logo/logo-full-white.svg" />
      </figure>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-md my-10'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-700'>ایجاد حساب الوپیک</h2>
        <form>
          <div className='mb-4'>
            <input
              type='text'
              id='text'
              name='text'
              required
              placeholder='نام'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              name='text'
              placeholder='نام خانوادگی'
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              name='text'
              placeholder='نام شهر'
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>
          <div className='mb-4'>
            <input
              type='number'
              name='text'
              placeholder='شماره همراه'
              required
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 appearance-none'
              
            />
          </div>
          <div className='mb-4'>
            <input
              type='email'
              name='text'
              placeholder='ایمیل (اختیاری)'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              name='text'
              placeholder='کد معرف(اختیاری)'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
          >
            <Link href="/">ثبت نام</Link>
          </button>
        </form>
      </div>
    </section>
  );
}
