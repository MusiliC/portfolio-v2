import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      {/* landing page */}
      <section id="landing " className="bg-gray-50 ">
        <div className="container mx-auto  md:flex py-14 lg:py-20 h-[100vh] md:h-[60vh] lg:h-[90vh] md:space-x-8">
          {/* main introduction */}
          <div className="w-full  md:pt-6 lg:pt-0 md:w-1/2  ">
            <h2 className="text-4xl lg:text-6xl px-4 font-bold drop-shadow-md">
              Hey, I'm
              <div className="text-5xl my-2 md:my-4 lg:text-8xl">
                Brian Musili
              </div>
            </h2>
            <div className="w-full px-4 my-6 lg:text-2xl   md:my-8 font-semibold">
              Hello, I'm Brian Musili,{" "}
              <span className="text-blue-600 text-2xl lg:text-4xl drop-shadow-md">
                Junior Full Stack Developer
              </span>{" "}
              , a student in Dedan Kimathi University of technology.My personal
              philosophy when it comes to programming its all about doing
              practice frequently to master the concepts and structure without
              quitting.
            </div>
            <div className="flex px-2 my-6  w-full justify-between flex-wrap ">
              <Link to={"/contact"}>
                <button className="btn">Hire Me</button>
              </Link>
              <Link>
                <button className="btn">Github</button>
              </Link>
            </div>
          </div>

          {/* image */}
          <div className="w-full  px-2 h-[370px] md:h-[90%] lg:h-full md:w-1/2 ">
            <img
              src="/pics/interface-gad897d0ae_1280.png"
              className="object-cover h-full md:mt-7 lg:mt-0   mx-auto md:h-[70%] lg:h-[100%] lg:w-[80%] rounded-full"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* about page */}

      <section id="about">
        <div className="h-[95vh] container mx-auto">
          <p>About me</p>

          <div>
            {/* picture */}
            <div>
                <img src="" alt="" />
            </div>

            {/* about me */}

            <div>
                <p>more</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
