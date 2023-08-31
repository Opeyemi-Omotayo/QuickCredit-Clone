import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="font-mono bg-primary">
        <div className="items-center justify-between hidden px-8 lg:flex">
          
          <Link to="/" className="flex items-center">
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
          
            <ul className="flex">
              <li className="mr-4">
                <a href="/#aboutUS" smooth>
                  ABOUT{" "}
                </a>
              </li>
              <li className="mr-4">
                <a href="/#process">THE PROCESS</a>
              </li>
              <li className="mr-4">
                <a href="/#whyUs">WHY US</a>
              </li>
              <li className="mr-4">
                <a href="/#faqs">FAQs</a>
              </li>
              <li className="mr-4">
                <Link to="/app/users/login">
                 LOGIN 
                </Link>
              </li>
              <li>
                <Link href="/app/users/registration" className="px-4 py-3 border border-green-600 rounded-md">
                  Register
                </Link>
              </li>
            </ul>
        </div>

        {/* mobile */}
        <div className="flex items-center justify-between px-4 lg:hidden">
          <Link to="/" className="flex items-center text-xl font-bold ">
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
          <ul
            onClick={() => setNav(!nav)}
            className={`absolute top-[63px] z-20 bg-gray-50 items-center w-full left-0 py-10 text-sky h-full ${
              nav ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-between text-lg h-96">
              <li >
                <a href="/#aboutUS" smooth>
                  ABOUT{" "}
                </a>
              </li>
              <li>
                <a href="/#process">THE PROCESS</a>
              </li>
              <li>
                <a href="/#whyUs">WHY US</a>
              </li>
              <li >
                <a href="/#faqs">FAQs</a>
              </li>
              <li className="flex items-center justify-center w-32 p-2 text-black bg-white rounded-full cursor-pointer">
                <Link to="/app/users/login" className="flex items-center">
                LOGIN 
                </Link>
              </li>
              <li className="flex items-center justify-center w-32 p-2 text-white bg-black rounded-full cursor-pointer">
                <Link to="/app/users/registration" className="flex items-center">
                Register
                </Link>
              </li>
            </div>
          </ul>
          <div
            className="block text-3xl text-white lg:hidden"
            onClick={() => setNav(!nav)}
          >
            {!nav ? <CiMenuBurger /> : <TfiClose/>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
