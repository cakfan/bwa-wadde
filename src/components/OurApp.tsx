/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const OurApp = () => {
  return (
    <section className="relative flex pl-[220px] py-12">
      <div className="relative mt-[17px] mr-2">
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }assets/app-card.png`}
          alt="image card"
          className="w-fit h-[544px]"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col w-[514px]">
          <h2 className="capitalize">
            Pave your path to triumph with XB innovation.
          </h2>
          <p className="section mt-8 w-[460px] leading-10 text-2xl">
            X equips you with the essential tools to craft a genuinely
            professional SaaS website.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-[18px] mb-0.5">
          <div className="flex items-center gap-3.5">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }icons/check.svg`}
              alt="icon"
            />
            <p className="section leading-8 text-xl text-foreground">
              Effortless Browsing
            </p>
          </div>
          <div className="flex items-center gap-3.5">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }icons/check.svg`}
              alt="icon"
            />
            <p className="section leading-8 text-xl text-foreground">
              Secure Top 5% Industry Experts for Your Project
            </p>
          </div>
          <div className="flex items-center gap-3.5">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }icons/check.svg`}
              alt="icon"
            />
            <p className="section leading-8 text-xl text-foreground">
              Secure Transaction Platform
            </p>
          </div>
        </div>
        <Link href="#" className="btn primary md font-normal">
          More About Us
        </Link>
      </div>
    </section>
  );
};
