import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollState, setScrollState] = useState(0);

  const onScroll = () => {
    setScrollState(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrollState };
};
