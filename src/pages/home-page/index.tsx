import { Hero } from "./hero";
import { Mission } from "./mission";
import { Products } from "./products";
import { Shop } from "./shop";
import { Story } from "./story";
import { Testimonies } from "./testimonies";
import { TrustedByLogos } from "./trusted-by-logos";
import { Visit } from "./visit";

export const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      <TrustedByLogos />
      <Story />
      <Testimonies />
      <hr className="h-1 max-w-7xl mx-auto" />
      <Shop />
      <Mission />
      <Visit />
      <hr className="h-1 max-w-7xl mx-auto" />
      <Products />
    </div>
  );
};
