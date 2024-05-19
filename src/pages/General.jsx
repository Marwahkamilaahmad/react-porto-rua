import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import personal from "../assets/personpink.png";
import personaldark from "../assets/personpurple.png";
import githubicons from "../assets/github-icons.png";
import linkedinicons from "../assets/linkedin-icons.png";

const General = ({ theme }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex justify-center md:justify-end items-center mb-10 md:mb-0">
        <img
          src={theme === "light" ? personal : personaldark}
          alt="Personal"
          className="md:max-w-md h-auto object-cover"
        />
      </div>
      <div className="flex-1 md:ml-12 mr-10">
        <h1
          className={`text-5xl font-bold mb-4 ${
            theme === "light"
              ? "text-transparent bg-gradient-to-r from-red-500 to-blue-600"
              : "text-transparent bg-gradient-to-r from-pink-500 to-cyan-500"
          } bg-clip-text`}
          data-aos={theme === "light" ? "fade-right" : "fade-down"}
        >
          Software Engineering Student
        </h1>

        <h4 className="text-lg font-semibold mb-2" data-aos="fade-left">
          Fullstack Developer
        </h4>
        <p className="text" data-aos="fade-left">
          Hi, Im Marwah Kamila. A Fullstack Developer from Indonesia. Im
          Interested in Next JS, Nuxt JS, Nest JS, Express JS, Golang.
        </p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/marwah-kamila-ahmad"
            target="_blank"
            className=" bg-pink-500 hover:bg-white hover:text-black text-white font-semibold py-2 px-4 mr-2 rounded"
          >
            <img
              src={linkedinicons}
              alt="LinkedIn Icon"
              className="inline-block h-5 w-5 mr-1"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/Marwahkamilaahmad"
            target="_blank"
            className="bg-white text-black font-semibold py-2 px-4 rounded"
          >
            <img
              src={githubicons}
              alt="GitHub Icon"
              className="inline-block h-6 w-6 mr-1"
            />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default General;