import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
      <div>
        <p className="text-3xl pt-10 md:text-5xl font-semibold text-center">
            Contact Me
        </p>
      </div>
      <div className="aboutUnderline mx-auto my-1"></div>
      <div className="container mx-auto py-2 pb-32 md:py-8 lg:py-2 md:flex items-center">
        <div className="md:w-1/2 ">
          <img
            src="/pics/social-media-marketing-g1a3447de7_1280.png"
            className=" w-[95%] lg:w-[90%] object-cover"
            alt=""
          />
        </div>
        <div className="px-5 w-full  md:px-0 md:w-[48%] mx-auto lg:w-1/2 ">
          <div className="w-full ">
            <form className="bg-white shadow-lg border border-gray-200  rounded px-4 pt-6 pb-8 mb-4">
              <div className="mb-2 lg:mb-4">
                <label
                  className="block text-gray-700 text-md font-bold mb-1 lg:mb-2"
                  htmlFor="username"
                >
                  Email:
                </label>
                <input
                  className="form-input"
                  id="username"
                  type="email"
                  placeholder="email@dormain.com"
                />
              </div>
              <div className="mb-2 lg:mb-4">
                <label
                  className="block text-gray-700 text-md font-bold mb-1 lg:mb-2"
                  htmlFor="password"
                >
                  Subject
                </label>
                <input
                  className="form-input"
                  id="password"
                  type="text"
                  placeholder="subject"
                />
              </div>

              <div className="mb-4 lg:mb-6">
                <label
                  for="message"
                  class="block mb-1 lg:mb-2 text-md font-bold  dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="textBox"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact