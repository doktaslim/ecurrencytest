import { useState } from "react";

import { faqs } from "../../constants/about";

export const Faqs = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleToggle =
    (title: string) => (e: React.MouseEvent<HTMLDetailsElement>) => {
      const details = e.currentTarget;
      setOpenItems((prev) => ({
        ...prev,
        [title]: details.open,
      }));
    };

  return (
    <div className="flex flex-col divide-y border-y">
      {faqs.map(({ text, title }) => (
        <details
          key={title}
          className="p-5 cursor-pointer"
          onToggle={handleToggle(title)}
        >
          <summary
            className={`text-brand list-none w-full text-lg ${
              openItems[title] ? "font-semibold" : "font-light"
            }`}
          >
            {title}
          </summary>
          <p className="mt-5 select-none text-lg">{text}</p>
        </details>
      ))}
    </div>
  );
};
