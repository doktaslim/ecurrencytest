import { useRef } from "react";
import { useInView } from "framer-motion";

import SleepingWoman from "../../assets/womansleep.png";

export const Mission = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="py-10 relative">
      <div className="relative flex flex-col md:flex-row items-center w-full justify-between gap-8">
        <div className="relative left-0 lg:left-20 flex-1 px-4 md:px-2 lg:px-0">
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col gap-6 w-full md:w-10/12"
          >
            <h3 className="text-brand font-semibold text-4xl">Our Mission</h3>
            <p className="text-brand_light_ash text-lg leading-7 font-light">
              We started Sleepstiq with 1 simple goal: to be your best friend at
              bedtime. We, just like you, deal with stress, unease, and trouble
              sleeping from a number of silly things like school, work, screens,
              numbers, and people. That's why we created products that aim to -
            </p>

            <ul className="list-none text-brand_light_ash text-lg leading-7 font-light">
              <li>✓ Promote Calm</li>
              <li>✓ Support Sleep</li>
              <li>✓ Reduce Stress</li>
              <li>✓ Aid Relaxation</li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-[400px] md:h-[650px]">
            <img
              src={SleepingWoman}
              alt="Sleeping woman"
              width={2000}
              height={2000}
              className="w-auto h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
