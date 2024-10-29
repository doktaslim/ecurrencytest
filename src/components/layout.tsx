import { Outlet } from "react-router-dom";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Layout = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
