import { ROUTES } from "../router/routes";

export const navLinks = [
  {
    label: "Home",
    href: ROUTES.HOME,
  },
  {
    label: "About",
    href: ROUTES.ABOUT,
  },
  {
    label: "Shop",
    href: ROUTES.SHOP,
  },
  {
    label: 'FAQ',
    href: ROUTES.FAQ
  }
] as const;
