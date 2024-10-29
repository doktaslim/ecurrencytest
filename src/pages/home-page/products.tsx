import { Star } from "lucide-react";

import { MaxWidthWrapper } from "../../components/max-width-wrapper";
import { productReview } from "../../constants/products";

export const Products = () => {
  return (
    <div className="py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-brand_yellow_thick text-4xl">
            Product Reviews
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productReview.map(({ image, text, user }) => (
              <div className="rounded min-h-52 h-full flex flex-col gap-4 w-full bg-white shadow-xl">
                <div>
                  <img
                    src={image}
                    alt={text}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-4 p-4 md:p-6 min-h-52">
                  <em className="text-brand_yellow_thick flex-grow">{text}</em>

                  <div className="flex flex-col gap-1">
                    <p className="text-brand_yellow_thick font-semibold">
                      {user}
                    </p>

                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-5 flex-shrink-0 fill-brand_green"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
