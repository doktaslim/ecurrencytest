import { Link } from "react-router-dom";

import NavbarLogo from "../assets/nav-logo.png";
import FooterLogo from "../assets/foot-logo.png";
import { ROUTES } from "../router/routes";

interface FooterProps {
  location: "header" | "footer";
}

export const Logo = ({ location }: FooterProps) => {
  return (
    <div className="h-auto w-16 md:w-24">
      <Link
        className="h-full w-full"
        to={ROUTES.HOME}
      >
        <img
          src={location === "header" ? NavbarLogo : FooterLogo}
          alt="Logo"
          width={1000}
          height={1000}
        />
      </Link>
    </div>
  );
};
