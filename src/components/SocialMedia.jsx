import { motion } from "framer-motion";

const socials = [
  {
    title: "LinkedIn",
    description: "Marwah Kamila Ahmad",
    link: "https://www.linkedin.com/in/marwah-kamila-ahmad",
  },
  {
    title: "GitHub",
    description: "marwahkamilaahmad",
    link: "https://github.com/Marwahkamilaahmad",
  },
  {
    title: "Instagram",
    description: "@thisismarwah",
    link: "https://www.instagram.com/thisismarwah/",
  },
];

export default function SocialMedia() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {socials.map((item) => (
        <motion.a
          key={item.title}
          whileHover={{ y: -5 }}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel group rounded-[28px] p-6 text-inherit"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] opacity-50">
                {item.title}
              </p>
              <h3 className="mt-4 text-2xl font-black tracking-[-0.04em]">
                {item.description}
              </h3>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-lg font-black text-slate-950 transition group-hover:translate-x-1 group-hover:-translate-y-1 dark:bg-white/10 dark:text-white">
              -&gt;
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
