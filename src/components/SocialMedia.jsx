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
    description: "@thisismarwah",
    link: "https://www.instagram.com/thisismarwah/",
  },
  {
    title: "Github",
    image: "",
    description: "@thisismarwah",
    link: "https://www.instagram.com/thisismarwah/",
  },
];

export default function SocialMedia() {
  return (
    <div className="mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sosmed.map((sosmed) => (
          <div
            key={sosmed.title}
            className="bg-cream rounded-2xl shadow-lg shadow-grey-600 overflow-hidden"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{sosmed.title}</h3>
              <p className="text-gray-700 text-base">{sosmed.description}</p>
              <div className="mt-6 flex justify-end space-x-4">
                <a
                  href={sosmed.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-white font-bold py-2 px-4 rounded-full"
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
