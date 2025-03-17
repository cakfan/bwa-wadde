/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="#" className="flex items-center">
      <img
        src={`${
          process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
        }logo.svg`}
        alt="Logo"
        className="w-[144px]"
      />
    </Link>
  );
};
