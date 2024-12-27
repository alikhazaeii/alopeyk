'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (href) => {
    setActiveLink(href);
    closeMenu(); 
  };

  return (
    <nav className="md:fixed md:p-5 items-center flex justify-evenly md:justify-start h-full md:h-[100px] bg-white border w-full z-10">
      <figure className="w-5/12 md:w-3/12 flex justify-center">
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
        className={`h-full *:my-5 *:mx-5 md:flex text-lg transition-all duration-300 ${
          isMenuOpen
            ? "flex flex-col items-center absolute bg-white w-full top-[70px] left-0 z-10 p-5"
            : "hidden md:flex"
        }`}
      >
        {[
          { href: "/business", label: "کسب و کار" },
          { href: "/Couriers", label: "ثبت نام سفیران" },
          { href: "/Contact-us", label: "تماس با ما" },
        ].map((link) => (
          <li key={link.href} className="mb-4 md:mb-0 md:mr-5">
            <Link
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`pb-2 ${
                activeLink === link.href
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              } transition-all duration-300`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="bg-sky-500 py-2 px-10 font-bold tex-xl border rounded-lg md:absolute md:left-10 text-white ">
        <Link href="/login">ورود</Link>
      </button>
    </nav>
  );
}
