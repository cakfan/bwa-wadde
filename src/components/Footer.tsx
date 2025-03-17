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
    <footer className="flex flex-col gap-14 pl-[220px] py-24 bg-foreground/5">
      <div className="flex gap-[52px]">
        <div className="flex flex-col gap-[26px] max-w-[352px]">
          <Logo />
          <p className="text-lg leading-[26px] tracking-normal w-full font-normal text-foreground/60">
            XB gives you the blocks <br /> needed to create a truly professional
            website for your SaaS.
          </p>
        </div>
        <div className="flex gap-[46px]">
          <div className="flex flex-col gap-5 text-lg font-medium leading-[26px]">
            <h4 className="text-foreground/80 line-clamp-1">Solutions</h4>
            <ul className="space-y-5">
              {footerMenu.solutitons.map(({ href, title }, index) => (
                <li key={index}>
                  <Link href={href} className="line-clamp-1 text-foreground/60">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 text-lg font-medium leading-[26px]">
            <h4 className="text-foreground/80 line-clamp-1">Company</h4>
            <ul className="space-y-5">
              {footerMenu.company.map(({ href, title }, index) => (
                <li key={index}>
                  <Link href={href} className="line-clamp-1 text-foreground/60">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 text-lg font-medium leading-[26px]">
            <h4 className="text-foreground/80 line-clamp-1">Resource</h4>
            <ul className="space-y-5">
              {footerMenu.resource.map(({ href, title }, index) => (
                <li key={index}>
                  <Link href={href} className="line-clamp-1 text-foreground/60">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 text-lg font-medium leading-[26px]">
            <h4 className="text-foreground/80 line-clamp-1">Features</h4>
            <ul className="space-y-5">
              {footerMenu.features.map(({ href, title }, index) => (
                <li key={index}>
                  <Link href={href} className="line-clamp-1 text-foreground/60">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-lg leading-[26px] font-normal text-foreground/60">
        Copyright &copy; 2023 All Rights Reserved by XB
      </p>
    </footer>
  );
};
