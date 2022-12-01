import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <div>
      {/* landing page */}
      <section id="landing " className="bg-gray-50 ">
        <div className="container mx-auto  md:flex py-14 lg:py-20  md:h-[60vh] lg:h-[90vh] md:space-x-8">
          {/* main introduction */}
          <div className="w-full  md:pt-6 lg:pt-10 md:w-1/2  ">
            <h2 className="text-4xl lg:text-6xl px-4 font-bold drop-shadow-md">
              Hey, I'm
              <div className="text-5xl my-2 md:my-4 lg:text-8xl">
                Brian Musili
              </div>
            </h2>
            <div className="w-full px-4 my-6 lg:text-2xl   md:my-8 font-semibold">
              <span className="text-blue-600 text-2xl mb-4 lg:text-4xl drop-shadow-md">
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
        <div className="lg:h-[95vh] container mx-auto py-16">
          <div>
            <p className="text-4xl md:text-6xl font-semibold text-center">
              About Me
            </p>
            <div className="aboutUnderline mx-auto my-1"></div>
          </div>

          <div className="md:flex justify-between mt-6 md:mt-14">
            {/* picture */}
            <div className="md:w-1/2 py-2">
              <img
                src="/pics/musili.jpg"
                alt=""
                className="h-[350px] mx-auto rounded-full w-[75%] object-contain bg-gray-100 shadow-lg drop-shadow-lg md:h-[90%] lg:object-cover lg:w-[53%] lg:h-[85%]"
              />
            </div>

            {/* about me */}

            <div className="md:w-1/2 mt-6 md:mt-0 py-4 ">
              <p className="mx-auto w-[90%] lg:text-2xl">
                I’m a Full stack Developer located in Nairobi, Kenya, passionate
                about building robust, beautiful and clean experiences for my
                users. I enjoy taking complex concepts and turning them into
                simple and beautiful interface designs. I look at languages and
                frameworks as just tools that help bring an idea to life, thus I
                learn what needs to be learnt in order to build what needs to be
                built.
              </p>
              <br />
              <p className=" mx-auto w-[90%] lg:text-2xl font-semibold">
                <span className="font-bold">Skills: </span>
                JavaScript, React, TypeScript, Express, Node, Redux,
              </p>

              <br />
              <p className=" mx-auto w-[90%] lg:text-2xl font-semibold">
                <span className="font-bold">Tools: </span>
                CSS, HTML, Git,Tailwind, Bootstrap, Mongo DB, SQL, MS server
              </p>

              <div className="flex  justify-between items-center  mx-auto w-[90%] mt-14 ">
                <button className="  bg-transparent  lg:text-2xl py-3  px-6 lg:px-10 hover:bg-blue-500 text-blue-700 font-bold hover:text-white  border border-blue-500 hover:border-transparent rounded">
                  Download CV
                </button>
                <button className=" bg-blue-500  lg:text-2xl py-3  px-6 lg:px-10  text-white font-bold hover:text-white  border border-blue-500 hover:bg-blue-700 rounded">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}

      <section id="services" className="bg-zinc-50">
        <div className="container mx-auto py-16">
          <div>
            <p className="text-3xl md:text-5xl font-semibold text-center">
              Services
            </p>
          </div>
          <div className="aboutUnderline mx-auto my-1"></div>

          {/* tools and services */}
          <div
            id="main-container"
            className="my-8 p-6 md:p-4   grid  md:grid-cols-2 lg:grid-cols-3 grid-rows-2 md:grid-rows-2  gap-6 "
          >
            {/* services */}

            <div id="services" className="border-white shadow-lg rounded-md bg-white">
              <div>
                <img
                  src="/pics/web-g413f50a65_1280.jpg"
                  className="h-[250px] w-full object-cover"
                  alt=""
                />
              </div>
              <div className="">
                <p className="text-center mt-4 font-semibold text-2xl md:text-3xl">
                  Web Development
                </p>
              </div>
            </div>

            <div
              id="services"
              className="border border-sky-200 shadow-lg p-3 order-3  lg:order-2 md:col-span-2 md:row-span-2  rounded-md"
            >
              <div className="mx-3">
                <p className="text-xl text-blue-900  my-10 md:text-3xl font-semibold text-center">
                  Programming Languages and Tools
                </p>
              </div>
              <div className="grid gap-4  grid-cols-3 md:grid-cols-4 grid-rows-4 ">
                <div className="tools">
                  <img
                    src="/pics/icons8-react.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">React JS</p>
                </div>
                <div className="tools">
                  <img
                    src="/pics/icons8-node-js.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">Node JS</p>
                </div>
                <div className="tools">
                  <img
                    src="/pics/icons8-tailwindcss.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">Tailwind CSS</p>
                </div>
                <div className="tools">
                  <img
                    src="/pics/icons8-mongodb.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">Mongo DB</p>
                </div>
                <div className="tools">
                  <img
                    src="/pics/icons8-javascript-logo.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">JavaScript</p>
                </div>
                <div className="tools">
                  <img
                    src="/pics/icons8-mysql-logo.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">My Sql</p>
                </div>
                <div className="tools">
                  <img
                    src="/pics/icons8-typescript.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">TypeScript</p>
                </div>
                <div className="tools">
                  <img
                    src="/pics/icons8-html-5.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">HTML 5</p>
                </div>

                <div className="tools">
                  <img
                    src="/pics/icons8-css3.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">CSS 3</p>
                </div>

                <div className="tools">
                  <img
                    src="/pics/icons8-git.svg"
                    className="icon-size"
                    alt=""
                  />
                  <p className="tools-text">Git</p>
                </div>
              </div>
            </div>

            <div
              id="services"
              className=" lg:order-3 rounded-md border-white shadow-lg bg-white"
            >
              <div className="">
                <img
                  src="/pics/web-design-g4b18c5b33_1280.jpg"
                  className="h-[250px] w-full object-cover"
                  alt=""
                />
              </div>
              <div className="">
                <p className="text-center my-4 font-semibold text-2xl md:text-3xl">
                  Responsive Web Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
