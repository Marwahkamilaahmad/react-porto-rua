const sosmed = [
  {
    title: "Instagram",
    image: "",
    description: "@thisismarwah",
    link: "https://www.instagram.com/thisismarwah/",
  },
  {
    title: "Linkedin",
    image: "",
    description: "Marwah Kamila Ahmad",
    link: "https://www.linkedin.com/in/marwah-kamila-ahmad",
  },
  {
    title: "Github",
    image: "",
    description: "marwahkamilaahmad",
    link: "https://github.com/Marwahkamilaahmad",
  },
];

export default function SocialMedia() {
  return (
    <div className="mx-auto py-16" data-aos ="fade-down">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sosmed.map((sosmed) => (
          <div
            key={sosmed.title}
            className="bg-white text-black rounded-2xl shadow-sm shadow-white overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{sosmed.title}</h3>
              <p className="text-gray-500 text-base">{sosmed.description}</p>
              <div className="mt-6 flex justify-end space-x-4">
                <a
                  href={sosmed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-black font-bold py-2 px-4 rounded-full"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
