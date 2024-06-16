import { footerLinks } from "../constants";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <p className="font-semibold text-gray text-xs">
          More ways to shop.{" "}
          <span className="underline text-blue cursor-pointer">
            {" "}
            Find an Apple Store
          </span>{" "}
          Or{" "}
          <span className="underline text-blue cursor-pointer">
            other retailer near you.
          </span>{" "}
          Or call 1-800-MY-APPLE.
        </p>
      </div>
      <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="font-semibold text-gray text-xs">
          Copyright © {date} Apple Inc. All rights reserved.
        </p>
        <div className="flex flex-row">
          {footerLinks.map((link, i) => (
            <p
              key={link}
              className="font-semibold text-gray text-xs text-nowrap hover:text-blue cursor-pointer"
            >
              {link}{" "}
              {i !== footerLinks.length - 1 && <span className="mx-2">|</span>}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
