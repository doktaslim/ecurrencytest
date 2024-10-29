import { Testimonies } from "../home-page/testimonies";
import { About } from "./about";
import { Hero } from "./hero";

export const AboutPage = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <hr className="h-1 max-w-7xl mx-auto" />
      <Testimonies />
    </div>
  );
};
