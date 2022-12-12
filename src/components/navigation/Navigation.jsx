import React, { useState } from "react";
import { Link, AnimateScroll as scroll } from "react-scroll";
import { HiMenu, HiOutlineCode } from "react-icons/hi";
import { TbLetterX } from "react-icons/tb";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "About" },
    { name: "Services", link: "services" },
  ];

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  return (
    <div className="border-b-2 shadow-md border-gray-200  bg-gray-50  w-full ">
      <div className=" mx-auto flex items-center justify-between py-4 md:px-10 px-7">
        <div className=" cursor-pointer flex items-center ">
          <span>
            <HiOutlineCode color="blue" size={40} className="mr-1" />
          </span>
          <p className="text-2xl text-gray-600 font-semibold mr-2 ">
            MUSILI
            <span className="text-blue-600">.</span>
          </p>
        </div>
        <div>
          <ul className=" md:flex md:items-center hover:cursor-pointer">
            {links.map((each) => (
              <li
                key={each.name}
                className="md:mx-2 lg:mx-5 font-semibold text-xl"
              >
                <Link
                  to={each.link}
                  className="hidden md:block font-bold hover:text-blue-600 duration-500"
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {each.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link to="contact" smooth={true} offset={5} duration={500}>
            <button className="hidden  md:block bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <span> CONTACT ME</span>
            </button>
          </Link>
        </div>

        <div
          className="md:hidden hover:cursor-pointer duration-500"
          onClick={handleClick}
        >
          {!nav ? (
            <HiMenu size={40} color="blue" />
          ) : (
            <TbLetterX size={40} color="blue" />
          )}
        </div>
      </div>

      {/* drop down */}

      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : " md:hidden bg-gray-50  border-b-1 border-black shadow-md  w-full px-8"
          }
        >
          {links.map((each) => (
            <li
              key={each.name}
              className="my-8 border-b-2  border-gray-200 w-full "
            >
              <Link
                to={each.link}
              
                duration={500}
                className="font-bold    text-gray-600 hover:text-blue-600 duration-500"
                onClick={handleClose}
              >
                {each.name}
              </Link>
            </li>
          ))}
          <div>
            <Link
              to={"contact"}
           
              duration={500}
              onClick={handleClose}
            >
              <button className="mb-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded">
                CONTACT ME
              </button>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
