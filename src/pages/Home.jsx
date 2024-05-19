import EducationTimeline from "../components/EducationTimeline";
import Techstack from "../components/Techstack";

export default function Home() {
  return (
    <main className="container mx-auto max-width text-center">
      <section>
        <h4 className="text-dark-heading dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Tech Stack
        </h4>
        <Techstack />
        <h4 className="text-dark-heading dark:text-light-heading xl:text-3xl xl:leading-tight font-bold">
          Education & Timeline
        </h4>
        <EducationTimeline />
      </section>
    </main>
  );
}
