import React from "react";
import { Link, AnimateScroll as scroll } from "react-scroll";
import { BsGithub } from "react-icons/bs";

import "./home.css";

export const Home = () => {
  return (
    <div>
      <section id="landing" name="Home" className="bg-gray-50 py-10 ">
        <div className="container mx-auto lg:flex lg:space-x-8">
          {/* intro */}
          <div className="w-full  md:pt-2  lg:w-1/2 ">
            <h2 className="text-4xl px-4 font-bold drop-shadow-md lg:text-4xl">
              Hey, I'm
              <div className="text-4xl my-2 md:my-2  lg:text-5xl">
                Brian Musili
              </div>
            </h2>

            <div className="w-full px-4 my-3 md:text-xl   md:my-8 font-semibold">
              <span className="text-blue-600 text-xl mb-4 md:text-2xl drop-shadow-md">
                Junior Full Stack Developer
                <br />
              </span>
              <p className="mt-4">
                My personal philosophy when it comes to programming its all
                about doing practice frequently to master the concepts and
                structure without quitting.
              </p>
            </div>

            {/* buttons */}

            <div className="flex px-2 my-6  w-full justify-between flex-wrap ">
              <Link
                to={"contact"}
                className="hidden md:block font-bold hover:text-blue-600 duration-500"
                smooth="true"
                offset={30}
                duration={500}
              >
                <button className="btn">Hire Me</button>
              </Link>
              <a
                href="http://github.com/MusiliC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn flex items-center space-x-2">
                  <BsGithub size={20} />
                  <p>Github</p>
                </button>
              </a>
            </div>
          </div>

          {/* image */}

          <div className="w-full lg:w-1/2 ">
            <img
              src="/pics/interface-gad897d0ae_1280.png"
              className="mx-auto h-[300px] w-[300px] object-cover rounded-full md:h-[400px] md:w-[400px] "
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
