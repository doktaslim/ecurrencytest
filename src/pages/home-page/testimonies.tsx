import { Star } from "lucide-react";

import { MaxWidthWrapper } from "../../components/max-width-wrapper";
import { testimonies } from "../../constants/testimonies";

export const Testimonies = () => {
  return (
    <div className="py-10">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonies.map(({ text, user }) => (
            <div className="rounded min-h-52 h-full flex flex-col gap-4 w-full bg-brand_yellow p-4 md:p-6">
              <em className="text-brand_yellow_thick flex-grow">{text}</em>

              <div className="flex flex-col gap-1">
                <p className="text-brand_yellow_thick font-semibold">{user}</p>

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
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
