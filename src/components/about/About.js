import React from 'react'


const About = () => {

    const handleDownload = () => {};

  return (
    <section name="About" id="about">
      <div className=" container mx-auto lg:py-16">
        <div>
          <p className="text-3xl pt-10 md:text-4xl font-semibold text-center">
            About Me
          </p>
          <div className="aboutUnderline mx-auto my-1"></div>
        </div>

        <div className="lg:flex justify-between mt-6 md:mt-14">
          {/* picture */}
          <div className="lg:w-1/2 py-2">
            <img
              src="/pics/musili.jpg"
              alt=""
              className="h-[300px] mx-auto rounded-full w-[300px] object-contain bg-gray-100 shadow-lg drop-shadow-lg md:h-[400px] md:w-[400px] "
            />
          </div>

          {/* about me */}

          <div className="lg:w-1/2 mt-6 md:mt-0 py-4 ">
            <p className="mx-auto w-[90%] lg:text-xl">
              I’m a Full stack Developer located in Nairobi, Kenya, passionate
              about building robust, beautiful and clean experiences for my
              users. I enjoy taking complex concepts and turning them into
              simple and beautiful interface designs. I look at languages and
              frameworks as just tools that help bring an idea to life, thus I
              learn what needs to be learnt in order to build what needs to be
              built.
            </p>
            <br />
            <p className=" mx-auto w-[90%] lg:text-xl font-semibold">
              <span className="font-bold">Skills: </span>
              JavaScript, React, TypeScript, Express, Node, Redux,
            </p>

            <br />
            <p className=" mx-auto w-[90%] lg:text-xl font-semibold">
              <span className="font-bold">Tools: </span>
              CSS, HTML, Git,Tailwind, Bootstrap, Mongo DB, SQL, MS server
            </p>

            <div className="flex  justify-between items-center  mx-auto w-[90%] mt-14 ">
              <button
                onClick={handleDownload}
                className=" bg-transparent  lg:text-xl py-2  px-4 lg:px-10 hover:bg-blue-500 text-blue-700 font-bold hover:text-white  border border-blue-500 hover:border-transparent rounded"
              >
                Download CV
              </button>
              <button className=" bg-blue-500  lg:text-xl py-2  px-4 lg:px-10  text-white font-bold hover:text-white  border border-blue-500 hover:bg-blue-700 rounded">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About