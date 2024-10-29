import { useRef } from "react";
import { useInView } from "framer-motion";

import { Button } from "../../components/button";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";

export const Visit = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <MaxWidthWrapper>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(40px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="h-[45dvh] md:h-[60dvh] flex justify-center items-center"
      >
        <div className="flex flex-col items-center gap-4 text-brand">
          <h3 className="text-3xl font-semibold">Visit Our Shop</h3>
          <p className="text-brand_light_ash leading-8 font-light text-center w-full md:w-9/12">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <Button className="bg-brand_red text-white rounded-md p-3 w-full max-w-48">
            Visit Shop
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
