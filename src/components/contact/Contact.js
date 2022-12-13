import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Common from "../common/Common";
import Error from "../common/Error";

const Contact = () => {
  const form = useRef();

  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e.target.value)

    emailjs
      .sendForm(
        process.env.React_App_SERVICE_KEY,
        process.env.React_App_TEMPLATE_KEY,
        form.current,
        process.env.React_App_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSend(true);
          var timeout = setTimeout(function () {
            setSend(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          var timeout = setTimeout(function () {
            setError(false);
          }, 3000);
        }
      );
  };

  return (
    <section id="contact">
      <div>
        <p className="text-xl pt-10 lg:pt-5 md:text-2xl font-semibold text-center">
          Contact Me
        </p>
      </div>
      <div className="aboutUnderline mx-auto my-1"></div>
      <div className="container mx-auto py-2 pb-32 md:py-8 lg:py-6 md:flex items-center">
        <div className="md:w-1/2 ">
          <img
            src="/pics/social-media-marketing-g1a3447de7_1280.png"
            className=" w-[95%] lg:w-[450px] object-cover"
            alt=""
          />
        </div>
        <div className="px-5 w-full  md:px-0 md:w-[48%] mx-auto lg:w-1/2 ">
          <div className="w-full ">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white shadow-lg border border-gray-200  rounded px-4 pt-6 pb-8 mb-4"
            >
              {send && <Common />}
              {error && <Error />}
              <div className="mb-2 lg:mb-4">
                <label
                  className="block text-gray-700 text-md font-bold mb-1 lg:mb-2"
                  htmlFor="username"
                >
                  Email:
                </label>
                <input
                  className="form-input"
                  name="user_email"
                  id="username"
                  type="email"
                  placeholder="email@dormain.com"
                  required
                />
              </div>
              <div className="mb-2 ">
                <label
                  className="block text-gray-700 text-md font-bold mb-1 "
                  htmlFor="password"
                >
                  Name
                </label>
                <input
                  className="form-input"
                  name="user_name"
                  id="password"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="message"
                  className="block mb-1 lg:mb-2 text-md font-bold  dark:text-white"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="textBox"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center mt-3 w-full justify-center">
                <button
                  className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-3 px-2 rounded-lg focus:outline-none focus:shadow-outline"
                  type="submit"
                  value="Send"
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
};

export default Contact;
