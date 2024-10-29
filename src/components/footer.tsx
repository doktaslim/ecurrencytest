import { Link } from "react-router-dom";

import { Logo } from "./logo";
import { MaxWidthWrapper } from "./max-width-wrapper";
import {
  footerCompany,
  footerContact,
  socialLinks,
} from "../constants/footer-links";
import Icon from "./icon";

export const Footer = () => {
  return (
    <footer className="bg-brand text-white py-10">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center w-full gap-10">
          <Logo location="footer" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-0 gap-y-10 lg:gap-4 w-full">
            <div className="col-span-2 w-full flex flex-col gap-4">
              <h4 className="uppercase">Company</h4>

              <div className="flex flex-col gap-4">
                {footerCompany.map((link) => (
                  <Link
                    key={link}
                    to={link}
                    className="text-brand_ash hover:text-white"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-3 w-full flex flex-col gap-4">
              <h4 className="uppercase">Contact</h4>
              <div className="flex flex-col gap-4">
                {footerContact.map(({ text, label }) => (
                  <div
                    className="flex flex-col gap-2"
                    key={label}
                  >
                    <p className="text-brand_ash">{label}</p>
                    {label.toLowerCase() === "phone" ? (
                      <a
                        className="font-bold"
                        href={`tel:${text.replace(/\s/g, "")}`}
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="font-bold">{text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 w-full flex flex-col gap-4">
              <h4 className="uppercase">Consumer Advisory</h4>
              <p className="text-base">
                These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease. This product should be used only
                as directed on the label. All trademarks and copyrights are
                property of their respective owners and not affiliated with nor
                do they endorse this product. Results may vary. <br /> <br />
                By using our website or product, you agree to follow our{" "}
                <Link
                  to={"#"}
                  className="text-brand_light"
                >
                  terms of service
                </Link>
                .
              </p>
            </div>

            <div className="hidden lg:block border-r mx-10 w-px rounded h-3/4 border-brand_ash" />

            <div className="col-span-3 w-full flex flex-col gap-4">
              <h4 className="uppercase">Get In Touch</h4>

              <div className="flex-grow flex flex-col gap-4">
                <p className="text-base text-brand_ash">
                  Feel free to get in touch with us via email
                </p>

                <a
                  href="mailto:hello@sleepstiq.com"
                  className="text-2xl font-bold text-white"
                >
                  hello@sleepstiq.com
                </a>

                <div className="flex items-center gap-6">
                  {socialLinks.map(({ label }) => (
                    <div
                      className="bg-brand_light rounded-full size-12 grid place-items-center"
                      key={label}
                    >
                      <Icon
                        className="fill-brand size-8"
                        name={
                          label === "Facebook"
                            ? "Facebook"
                            : label === "Twitter"
                            ? "Twitter"
                            : label === "LinkedIn"
                            ? "Linkedin"
                            : "Youtube"
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-brand_ash">
                &copy; 2020@sleepstiq. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
