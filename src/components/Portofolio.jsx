import denteksipict1 from "../assets/denteksi6.png";
import konsultankupict1 from "../assets/konsultankupict1.png";
import todolistgo from "../assets/todolist6.png";
import calorieapp from "../assets/calorieapp-ui4.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Denteksi Website",
    description:
      "Denteksi adalah website dengan teknologi AI untuk mendeteksi adanya permasalahan pada gigi. Proyek ini dibangun dengan laravel dan database MySql",
    image: denteksipict1,
    githubLink: "https://denteksi.com",
    tags: ["Laravel", "MySql", "Bootstrap"],
  },
  {
    title: "Konsultanku Mobile",
    description:
      "Konsultanku adalah aplikasi penghubung pihak UMKM dengan mahasiswa di indonesia yang akan bersama sama memberikan solusi pada masalah UMKM. Proyek dibangun dengan produk google",
    image: konsultankupict1,
    githubLink: "https://github.com/your-username/sentiment-analysis",
    tags: ["Flutter", "Go", "Firebase"],
  },
  {
    title: "Golang API Todo List",
    description:
      "Todo List yang didukung dengan Rest API Go language dan library fiber dari golang",
    image: todolistgo,
    githubLink: "https://github.com/Marwahkamilaahmad/todo-with-go",
    tags: ["Go", "Fiber"],
  },
  {
    title: "Android Calorie App",
    description:
      "Aplikasi mobile android yang didukung oleh firebase sebagai database dan autentikasi",
    image: calorieapp,
    githubLink: "https://github.com/Marwahkamilaahmad/ANDROID_CALORIE_APP",
    tags: ["Android", "Kotlin", "Firebase"],
  },
];

const PortfolioItem = ({theme, setTheme}) => {
  return (
    <div className="mx-auto py-16 px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className={theme == "light" ?  "bg-cream rounded-2xl shadow-lg shadow-grey-600 overflow-hidden" : "bg-gradient-to-r from-pink-700 to-pink-400 rounded-2xl shadow-lg shadow-grey-600 overflow-hidden" }
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 "
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-black text-base text-sm">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-gray-700 py-1 px-3 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioItem;
