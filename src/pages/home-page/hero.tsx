import { motion } from "framer-motion";

import HeroImg from "../../assets/hero.png";
import { Button } from "../../components/button";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";

export const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
      className="h-[95dvh] relative w-full bg-no-repeat inset-0 bg-center bg-cover transform !transition duration-500"
    >
      <MaxWidthWrapper>
        <div className="flex items-center h-full">
          <div className="flex flex-col items-center md:items-start gap-4 text-brand text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg"
            >
              We're here to help you
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
              className="text-6xl md:text-7xl font-bold"
            >
              Relax & Rest
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
              className="w-full text-lg"
            >
              With the aid of our Melatonin Sleepstiq, we can assure you that
              you can <br className="hidden md:block" />
              get quality sleep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              <Button className="bg-brand_red text-white rounded-md p-3 w-full max-w-48">
                Visit Shop
              </Button>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
