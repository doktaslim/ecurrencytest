import { useRef } from "react";
import { useInView } from "framer-motion";

import { MaxWidthWrapper } from "../../components/max-width-wrapper";
import ShopImg2 from "../../assets/special-pen-grouped.png";
import { Button } from "../../components/button";

export const Shop = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-10">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center w-full justify-between gap-2 md:gap-8">
          <div className="flex-1">
            <div className="w-full h-[400px] md:h-[650px]">
              <img
                src={ShopImg2}
                alt="Shop"
                width={2000}
                height={2000}
                className="w-auto h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(40px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-brand font-semibold text-4xl">Shop Now</h3>
              <p className="text-brand_light_ash text-lg leading-7 font-light ">
                Our Personal Diffuser is an aromatherapy device that contains a
                blend of melatonin, lavender, and chamomile. A few breaths of
                our plant-based essential oil mist will mellow you out, quiet
                the mind, and lull you to bed.
              </p>

              <Button className="bg-brand_red text-white rounded-md p-3 w-full max-w-48">
                Visit Shop
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
