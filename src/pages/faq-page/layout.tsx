import { PropsWithChildren } from "react";

import { MaxWidthWrapper } from "../../components/max-width-wrapper";
import { Aside } from "./aside";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 py-14">
        <aside className="col-span-1 md:col-span-3">
          <Aside />
        </aside>
        <section className="col-span-1 md:col-span-9">{children}</section>
      </div>
    </MaxWidthWrapper>
  );
};
