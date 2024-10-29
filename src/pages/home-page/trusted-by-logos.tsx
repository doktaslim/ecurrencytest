import { trustedByLogos } from "../../constants/trusted-by";

export const TrustedByLogos = () => {
  return (
    <div className="bg-white shadow-2xl rounded w-[90%] md:max-w-7xl h-20 mx-auto relative bottom-8 z-30">
      <div className="h-full flex items-center gap-4 justify-evenly w-full">
        {trustedByLogos.map((logo, index) => (
          <div
            key={index}
            className="h-auto w-16 md:w-32"
          >
            <img
              src={logo}
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
