import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

import "./home.css";

export const Home = () => {
  return (
    <div>
      {/* landing page */}
      <section id="landing" name="Home" className="bg-gray-50 ">
        <div className="container mx-auto  lg:flex py-10  lg:pt-20   md:h-[100vh] lg:h-screen md:space-x-8">
          {/* main introduction */}
          <div className="w-full  md:pt-2  lg:w-1/2  ">
            <h2 className="text-4xl md:text-6xl px-4 font-bold drop-shadow-md">
              Hey, I'm
              <div className="text-5xl my-2 md:my-4 md:text-7xl lg:text-8xl">
                Brian Musili
              </div>
            </h2>
            <div className="w-full px-4 my-6 md:text-2xl   md:my-8 font-semibold">
              <span className="text-blue-600 text-2xl mb-4 md:text-4xl drop-shadow-md">
                Junior Full Stack Developer
                <br />
              </span>
              <p className="mt-8">
                My personal philosophy when it comes to programming its all
                about doing practice frequently to master the concepts and
                structure without quitting.
              </p>
            </div>
            <div className="flex px-2 my-6  w-full justify-between flex-wrap ">
              <Link to={"/contact"}>
                <button className="btn">Hire Me</button>
              </Link>
              <a
                href="http://github.com/MusiliC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn flex items-center space-x-2">
                  <BsGithub size={30} />
                  <p>Github</p>
                </button>
              </a>
            </div>
          </div>

          {/* image */}
          <div className="w-full  px-2 h-[370px] md:h-[70%] lg:h-[80%] lg:w-1/2 ">
            <img
              src="/pics/interface-gad897d0ae_1280.png"
              className="object-cover h-full md:mt-7 lg:mt-0   mx-auto md:w-[70%] md:h-[70%] lg:h-full lg:w-[80%] rounded-full"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};
