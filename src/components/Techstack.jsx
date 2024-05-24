import seleniumicons from "../assets/Selenium.png";
import javaicons from "../assets/java-icons.png";
import phpicons from "../assets/php-icons.png";
import nextjsicons from "../assets/nextjs.png";
import javascripticons from "../assets/javascript.png";
import golangicons from "../assets/golang.png";
import reacticons from "../assets/react-3.png";
import tailwindicons from "../assets/tailwind.png";
import bootstrapicons from "../assets/bootstrap.png";
import blendericons from "../assets/Blender.png";
import dockericons from "../assets/Docker.png";
import figmaicons from "../assets/Figma.png";
import firebaseicons from "../assets/Firebase.png";
import flaskicons from "../assets/Flask.png";
import fluttericons from "../assets/Flutter.png";
import gitlabicons from "../assets/GitLab.png";
import socketicons from "../assets/Socket.io.png";
import juniticons from "../assets/JUnit.png";
import laravelicons from "../assets/Laravel.png";
import mysqlicons from "../assets/MySQL.png";
import nodejsicons from "../assets/Node.js.png";
import jupytericons from "../assets/Jupyter.png";
import anstudicons from "../assets/AndroidStudio.png";

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
          src={seleniumicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={javaicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={javascripticons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={golangicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={reacticons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={phpicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={tailwindicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={bootstrapicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
      </div>
      <div className="flex item-center justify-center flex-wrap" data-aos="fade-right">
        <img
          src={nextjsicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={anstudicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={blendericons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={figmaicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={flaskicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={fluttericons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
      </div>
      <div className="flex item-center justify-center flex-wrap" data-aos="fade-left">
        <img
          src={juniticons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={jupytericons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={gitlabicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={dockericons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={firebaseicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={nodejsicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={mysqlicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
        <img
          src={laravelicons}
          alt=""
          className="h-20 w-20 rounded-full p-1 m-3"
        />
      </div>
    </div>
  );
}
