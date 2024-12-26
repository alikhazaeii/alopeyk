'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false); 
  };

  return (
    <nav className=" md:fixed md:p-5 items-center flex justify-evenly md:justify-start h-full md:h-[100px] bg-white border w-full z-10">
      <figure className="w-5/12 md:w-3/12 ">
        <Link href="/">
          <Image
            width={200}
            height={200}
            alt="alopeyk"
            src="https://cdn.alopeyk.com/misc/website/images/original/layouts/logo.svg"
          />
        </Link>
      </figure>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-3xl">
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      <ul
        className={`h-full *:my-5 *:mx-2 md:flex text-lg  transition-all duration-300 ${
          isMenuOpen ? "flex flex-col items-center absolute bg-white w-full top-[70px] left-0 z-10 p-5" : "hidden md:flex"
        }`}
      >
        <li className="relative">
          <button onClick={toggleDropdown} className="text-lg">خدمات</button>
          {isDropdownOpen && (
            <ul className="absolute left-0 top-5 bg-white text-black mt-2 p-2 rounded-lg w-[150px] transition-all duration-300">
              <li className="p-2">
                <Link href="/services/alopeyk" onClick={closeMenu}>الوپیک</Link>
              </li>
              <li className="p-2">
                <Link href="/services/alotaxi" onClick={closeMenu}>الوتاکسی</Link>
              </li>
              <li className="p-2">
                <Link href="/services/alovanet" onClick={closeMenu}>الووانت</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/business" onClick={closeMenu}>کسب و کار</Link>
        </li>
        <li>
          <Link href="/Couriers" onClick={closeMenu}>ثبت نام سفیران</Link>
        </li>
        <li>
          <Link href="/Contact-us" onClick={closeMenu}>تماس با ما</Link>
        </li>
      </ul>
    </nav>
  );
}
