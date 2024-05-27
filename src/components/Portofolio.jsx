import denteksipict1 from "../assets/denteksi1.png";
import konsultankupict1 from "../assets/konsultankupict1.png";
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
      "Pembuatan Todo List yang didukung dengan Rest API Go language dan library fiber dari golang",
    image: "/images/movie-api.png",
    githubLink: "https://github.com/your-username/movie-api",
    tags: ["Go", "Fiber"],
  },
  {
    title: "Android Calorie App",
    description:
      "Pembuatan Todo List yang didukung dengan Rest API Go language dan library fiber dari golang",
    image: "/images/movie-api.png",
    githubLink: "https://github.com/your-username/movie-api",
    tags: ["Android Studio", "Kotlin", "Firebase"],
  },
];

const PortfolioItem = () => {
  return (
    <div className="mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-cream rounded-2xl shadow-lg shadow-grey-600 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 "
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white text-gray-700 py-1 px-2 rounded-full text-sm"
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
