import { Faqs } from "./faqs";
import { Hero } from "./hero";
import { Layout } from "./layout";

export const FaqsPage = () => {
  return (
    <div className="relative">
      <Hero />
      <Layout>
        <Faqs />
      </Layout>
    </div>
  );
};
