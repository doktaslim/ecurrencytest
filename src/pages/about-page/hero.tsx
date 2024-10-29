import { motion } from "framer-motion";

import HeroImg from "../../assets/about-hero.png";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";

export const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
      className="h-[80dvh] relative w-full bg-no-repeat inset-0 bg-center bg-cover transform !transition duration-500"
    >
      <MaxWidthWrapper>
        <div className="flex items-center h-full">
          <div className="flex flex-col items-center md:items-start justify-center gap-4 text-brand text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg"
            >
              We're here to help you
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-5xl text-center md:text-7xl font-bold"
            >
              Relax & Rest
            </motion.h1>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
