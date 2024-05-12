import personal from '../assets/personpurple.png';

const General = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
        <div className="flex-1 flex item-center">
            <img src={personal} alt="" className="md:max-w-md h-auto object-cover"></img>
        </div>
    </section>
  );
};

export default General;
