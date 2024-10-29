import { Triangle } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import Man from "../../assets/man.png";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";

export const Story = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="py-10 md:py-20 text-brand">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col gap-5 flex-1"
          >
            <p>Our Amazing Story</p>

            <h3 className="text-4xl font-semibold">
              10k+Happy <span className="bg-brand_yellow px-2">Customers</span>
            </h3>

            <p className="text-brand_light_ash w-full leading-7 text-lg font-light">
              There&apos;s no secret sauce, no wizard behind the curtain. What{" "}
              <br className="hidden md:block" /> makes Aerolab tick is an
              interdisciplinary team with a <br className="hidden md:block" />{" "}
              framework that fosters candid collaboration.
            </p>

            <div className="flex items-center gap-1 text-sm">
              <Triangle className="rotate-90 size-3 fill-brand flex-shrink-0" />{" "}
              <span className="underline font-semibold">
                More know About us
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="shadow-2xl bg-brand_yellow p-7 md:p-12 flex flex-col min-h-80 md:min-h-96 rounded gap-4">
              <em className="text-brand_yellow_thick text-lg md:text-2xl leading-9 flex-grow font-light">
                I&apos;m a very anxious person but use this and feel so relaxed
                and sleep way better now with the aid of sleepstiq.{" "}
              </em>

              <div className="flex items-center gap-3">
                <div className="size-16">
                  <img
                    src={Man}
                    alt="Man"
                    width={1000}
                    height={1000}
                  />
                </div>

                <div className="flex flex-col">
                  <h4 className="text-brand_yellow_thick font-semibold text-lg">
                    James Miller
                  </h4>
                  <p>CEO, Techbias</p>
                </div>
              </div>

              <div className="flex items-center justify-center w-full">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div
                    key={i}
                    className="size-2 bg-brand_yellow_thick rounded-full mx-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
