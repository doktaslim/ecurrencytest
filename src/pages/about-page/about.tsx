import ProductImg from "../../assets/special-pen.png";
import { Button } from "../../components/button";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";

export const About = () => {
  return (
    <div className="py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <div className="h-full md:h-[600px] w-full">
              <img
                src={ProductImg}
                alt="Product img"
                className="h-full w-full object-contain md:object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <h3 className="text-4xl font-bold text-brand">About Product</h3>

              <p className="text-brand_light_ash leading-8 text-lg">
                Our Personal Diffuser is an aromatherapy device that contains a
                blend of melatonin, lavender, and chamomile. A few breaths of
                our plant-based essential oil mist will mellow you out, quiet
                the mind, and lull you to bed.
              </p>

              <div className="leading-8 text-lg flex flex-col gap-1">
                <p>
                  😊{" "}
                  <em className="text-brand_ash_secondary">
                    Promotes calm and relaxation.
                  </em>
                </p>
                <p>
                  💤{" "}
                  <em className="text-brand_ash_secondary">
                    Inhalation allows for a rapid effect.
                  </em>
                </p>
                <p>
                  ✅{" "}
                  <em className="text-brand_ash_secondary">
                    100% drug-free, plant-based ingredients.
                  </em>
                </p>
                <p>
                  ‍⚕️{" "}
                  <em className="text-brand_ash_secondary">
                    3rd-party lab tested.
                  </em>
                </p>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-0.5 text-lg">
                  <p className="font-light flex-grow">Price</p>
                  <p className="font-semibold">USD 50</p>
                </div>

                <div className="flex flex-col gap-0.5 text-lg mt-2.5">
                  <p className="font-light flex-grow">Unit</p>
                  <input
                    type="number"
                    className="rounded border max-w-32 h-10 border-brand pl-2"
                  />
                </div>
              </div>

              <Button className="bg-brand_red text-white rounded-md p-3 w-full max-w-48">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
