import denteksipict1 from '../assets/denteksi1.png';
import konsultankupict1 from '../assets/konsultankupict1.png';

const projects = [
  {
    title: "Boba Store (E-Commerce App)",
    description:
      "A Boba Store (E-Commerce App) using Next JS, MongoDB, and Chakra UI. This project have authentication, multi-role, and e-commerce app without payment gateway.",
    image: denteksipict1,
    githubLink: "https://denteksi.com",
    tags: ["Next.js", "MongoDB", "Chakra UI"],
  },
  {
    title: "Youtube Comment Sentiment Analysis",
    description:
      "A Youtube Comment Sentiment Analysis using Python and Flask with Next JS and Chakra UI. This project is a part of smart system vocational olimpiade.",
    image: konsultankupict1,
    githubLink: "https://github.com/your-username/sentiment-analysis",
    tags: ["Python", "Flask", "Next.js", "Chakra UI"],
  },
  {
    title: "Nuxt JS Movie API",
    description:
      "Explore a Nuxt.js movie API project showcasing seamless navigation, modular components, and efficient API fetching for a streamlined movie browsing experience.",
    image: "/images/movie-api.png",
    githubLink: "https://github.com/your-username/movie-api",
    tags: ["Nuxt.js"],
  },
  // Add more projects here
];

const PortfolioItem = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-red-100 rounded-lg shadow-md overflow-hidden"
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
                    className="bg-gray-200 text-gray-700 py-1 px-2 rounded-full text-sm"
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
