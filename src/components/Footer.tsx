import Link from "next/link";
import { Logo } from "./header/Logo";

const footerMenu = {
  solutitons: [
    {
      href: "#",
      title: "Freelancer",
    },
    {
      href: "#",
      title: "Data Analytics",
    },
    {
      href: "#",
      title: "Small Business",
    },
  ],
  company: [
    {
      href: "#",
      title: "About",
    },
    {
      href: "#",
      title: "Career",
    },
    {
      href: "#",
      title: "Contact",
    },
  ],
  resource: [
    {
      href: "#",
      title: "Customers",
    },
    {
      href: "#",
      title: "Strategic Finance",
    },
    {
      href: "#",
      title: "Ebooks & Guides",
    },
  ],
  features: [
    {
      href: "#",
      title: "Freelancer",
    },
    {
      href: "#",
      title: "Data Analytics",
    },
    {
      href: "#",
      title: "Small Business",
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 mx-auto">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 py-24 pl-[220px]">
        <div className="flex gap-[52px]">
          <div className="flex max-w-[352px] flex-col gap-[26px]">
            <Logo />
            <p className="text-foreground/60 w-full text-lg leading-[26px] font-normal tracking-normal">
              XB gives you the blocks <br /> needed to create a truly
              professional website for your SaaS.
            </p>
          </div>
          <div className="flex gap-[46px]">
            <div className="flex flex-col gap-5 text-lg leading-[26px] font-medium">
              <h4 className="text-foreground/80">Solutions</h4>
              <ul className="space-y-5">
                {footerMenu.solutitons.map(({ href, title }, index) => (
                  <li key={index}>
                    <Link href={href} className="text-foreground/60">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 text-lg leading-[26px] font-medium">
              <h4 className="text-foreground/80">Company</h4>
              <ul className="space-y-5">
                {footerMenu.company.map(({ href, title }, index) => (
                  <li key={index}>
                    <Link href={href} className="text-foreground/60">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 text-lg leading-[26px] font-medium">
              <h4 className="text-foreground/80">Resource</h4>
              <ul className="space-y-5">
                {footerMenu.resource.map(({ href, title }, index) => (
                  <li key={index}>
                    <Link href={href} className="text-foreground/60">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5 text-lg leading-[26px] font-medium">
              <h4 className="text-foreground/80">Features</h4>
              <ul className="space-y-5">
                {footerMenu.features.map(({ href, title }, index) => (
                  <li key={index}>
                    <Link href={href} className="text-foreground/60">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-foreground/60 text-lg leading-[26px] font-normal">
          Copyright &copy; 2023 All Rights Reserved by XB
        </p>
      </div>
    </footer>
  );
};
