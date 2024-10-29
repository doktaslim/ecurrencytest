import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Drawer from "react-modern-drawer";

import { Logo } from "./logo";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { Button } from "./button";
import { navLinks } from "../constants/nav-links";
import { useScroll } from "../hooks/useScroll";
import { useDrawer } from "../hooks/useDrawer";

import "react-modern-drawer/dist/index.css";

export const Navbar = () => {
  const { scrollState } = useScroll();
  const { pathname } = useLocation();
  const { isOpen, toggleDrawer } = useDrawer();

  useEffect(() => {
    toggleDrawer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <header
        className={`fixed w-full py-2 z-50 ${
          scrollState > 200 ? "bg-gray-50/80" : "bg-transparent"
        }`}
      >
        <MaxWidthWrapper>
          <div className="flex items-center h-full">
            <Logo location="header" />

            {/* mobile menu button */}
            <Button
              onClick={toggleDrawer}
              className="block md:hidden ml-auto mr-1"
            >
              <Menu className="h-6 w-6" />
            </Button>

            <nav className="hidden md:flex items-center gap-12 mr-auto flex-1 justify-center">
              {navLinks.map(({ label, href }) => (
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    `text-base text-brand ${
                      isActive ? "text-brand font-semibold" : "font-light"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </MaxWidthWrapper>
      </header>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className="bg-transparent px-4 block md:hidden"
        size={300}
        style={{
          // background: "rgba(255, 255, 255, 0.85)",
          // backdropFilter: "saturate(140%) blur(10px)",
        }}
      >
        <div className="flex flex-col gap-4 my-2">
          <div className="w-full flex items-center justify-between relative">
            {/* logo */}
            <div className="">
              <Logo location="header" />
            </div>

            {/* mobile Button */}
            <Button
              onClick={toggleDrawer}
              className="block md:hidden cursor-pointer h-6 w-6"
            >
              <X />
            </Button>
          </div>

          {/* mobile menu */}
          <nav className="h-full w-full">
            <div className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map(({ label, href }) => (
                <NavLink
                  key={label}
                  to={href}
                  className={({ isActive }) =>
                    `text-base text-brand ${
                      isActive ? "text-brand font-semibold" : "font-light"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </Drawer>
    </>
  );
};
