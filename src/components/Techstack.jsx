import githubicons from "../assets/github-icons.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Techstack() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mt-8">
      <div className="flex item-center justify-center flex-wrap" data-aos="fade-left">
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
      </div>
      <div className="flex item-center justify-center flex-wrap" data-aos="fade-right">
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
      </div>
      <div className="flex item-center justify-center flex-wrap" data-aos="fade-left">
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={githubicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
      </div>
    </div>
  );
}
