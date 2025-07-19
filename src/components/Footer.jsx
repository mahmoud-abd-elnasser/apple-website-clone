import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray-400 text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue-500">Find an Apple Store</span>{" "}
            or <span className="underline text-blue-500">other retailer</span>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray-400 text-xs mt-2">
            or call +201550587650
          </p>
        </div>
        <div className="h-[1px] bg-neutral-700 w-full my-5" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray-400 text-xs">
            Copyrights @ 2025 Apple Inc. all rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p className="font-semibold text-gray-400 text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
