import { Search } from "lucide-react";
import { motion } from 'framer-motion';

import { MaxWidthWrapper } from "../../components/max-width-wrapper";

export const Hero = () => {
  return (
    <motion.section className="h-[80dvh] bg-brand_yellow relative w-full bg-no-repeat inset-0 bg-center bg-cover transform !transition duration-500">
      <MaxWidthWrapper>
        <div className="flex items-center h-full">
          <div className="flex flex-col items-center justify-center w-full gap-4 text-brand text-center md:text-left">
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
              className="text-5xl md:text-7xl font-bold"
            >
              How can we assist?
            </motion.h1>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.95 }}
              className="relative bg-white rounded-md w-full md:max-w-3xl h-16"
            >
              <Search className="absolute top-1/2 -translate-y-1/2 left-4 size-9 text-brand" />
              <input
                type="search"
                name=""
                id=""
                className="flex-1 w-full h-full border focus:border-brand outline-none focus:border-2 rounded-md pl-16 pr-4 placeholder:font-light"
                placeholder="Search Faqs here"
              />
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </motion.section>
  );
};
