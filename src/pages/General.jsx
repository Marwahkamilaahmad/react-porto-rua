import personal from '../assets/personpink.png';

const General = () => {
  return (
    <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
    <div className="flex-1 flex justify-center md:justify-end items-center mb-10 md:mb-0">
      <img src={personal} alt="Personal" className="md:max-w-md h-auto object-cover" />
    </div>
    <div className="flex-1 md:ml-10 mr-10">
      <h1 className="text-2xl font-bold mb-4">Software Engineering Student</h1>
      <h4 className="text-lg font-semibold mb-2">Fullstack Developer</h4>
      <p className="text-gray-700">Hi, I'm Marwah Kamila. A Fullstack Developer from Indonesia. I'm Interested in Next JS, Nuxt JS, Nest JS, Express JS, Golang.</p>
    </div>
  </section>
  );
};

export default General;
