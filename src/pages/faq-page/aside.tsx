import { aboutAside } from "../../constants/about";

export const Aside = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-brand font-semibold text-lg">
        Sleepstiq{" "}
        <span className="pr-4 pl-2 py-2 rounded bg-brand_yellow ml-1">
          Product
        </span>
      </p>
      {aboutAside.map((text) => (
        <p className="text-brand text-lg font-light my-1">{text}</p>
      ))}
    </div>
  );
};
