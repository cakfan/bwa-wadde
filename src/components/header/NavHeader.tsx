/* eslint-disable @next/next/no-img-element */

import { ActionHeader } from "./ActionHeader";
import { Logo } from "./Logo";
import Link from "next/link";

const navItems = [
  {
    href: "#",
    title: "All Paged",
    sub: true,
  },
  {
    href: "#",
    title: "Pricing",
  },
  {
    href: "#",
    title: "Contact",
  },
  {
    href: "#",
    title: "About",
  },
];

const NavItem = ({ href, title, sub }: (typeof navItems)[0]) => {
  return (
    <li>
      <Link href={href} className="header-link">
        <span className="">{title}</span>
        {sub && (
          <img
            src={`${
              process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
            }icons/arrow-bottom.svg`}
            alt="more"
            className="h-5 w-5"
          />
        )}
      </Link>
    </li>
  );
};

export const NavHeader = () => {
  return (
    <nav className="h-navbar px-8 z-50 flex items-center justify-between">
      <Logo />
      <ul className="flex gap-10">
        {navItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
      <ActionHeader />
    </nav>
  );
};
