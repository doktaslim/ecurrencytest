import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./routes";
import { Layout } from "../components/layout";
import { HomePage } from "../pages/home-page";
import { AboutPage } from "../pages/about-page";
import { ErrorPage } from "../pages/error-page";
import { FaqsPage } from "../pages/faq-page";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTES.SHOP,
        element: <AboutPage />
      },
      {
        path: ROUTES.FAQ,
        element: <FaqsPage />,
      },
    ],
  },
]);