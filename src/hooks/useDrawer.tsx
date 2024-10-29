import { useState } from "react";

export const useDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    return setIsOpen((prevState) => !prevState);
  };

  return {
    isOpen,
    toggleDrawer,
  };
};
