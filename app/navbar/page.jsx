import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="md:flex md:p-5 items-center">
      <figure>
        <Link href="/">
          <Image
            width={200}
            height={200}
            alt="alopeyk"
            src="https://cdn.alopeyk.com/misc/website/images/original/layouts/logo.svg"
          />
        </Link>
      </figure>

      <ul className="flex text-xl *:mx-5 ">
        <li className="relative group">
          <Link href="#">خدمات</Link>
          <ul className="absolute -left-5 top-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 bg-white text-black mt-2 p-2 rounded-lg w-[150px] transition-all duration-300">
            <li className="p-2">
              <Link href="/services/alopeyk">الوپیک</Link>
            </li>
            <li className="p-2">
              <Link href="/services/alotaxi">الوتاکسی</Link>
            </li>
            <li className="p-2">
              <Link href="/services/alovanet">الووانت</Link>
            </li>
          </ul>

        </li>
        <li>
          <Link href="/business">کسب و کار</Link>
        </li>
        <li>
          <Link href="/Couriers">ثبت نام سفیران</Link>
        </li>
        <li>
          <Link href="/Contact-us">تماس با ما</Link>
        </li>


      </ul>
    </nav>
  );
}
