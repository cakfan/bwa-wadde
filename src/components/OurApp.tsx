/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const OurApp = () => {
  return (
    <section className="relative flex max-w-[1440px] mx-auto pl-[220px] mt-[85px] py-12">
      <div className="relative shrink-0 mt-[17px] mr-2">
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }assets/app-card.png`}
          alt="image card"
          className="w-fit h-[544px]"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col max-w-[514px]">
          <h2 className="capitalize leading-[62px] text-[56px] tracking-tight font-bold">
            Pave your path to triumph with XB innovation.
          </h2>
          <p className="font-normal tracking-[0.6px] text-foreground/60 mt-8 max-w-[460px] leading-10 text-2xl">
            X equips you with the essential tools to craft a genuinely
            professional SaaS website.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-[18px] mb-0.5">
          <div className="flex items-center gap-3.5">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }icons/check.svg`}
              alt="icon"
            />
            <p className="font-normal tracking-[0.6px] leading-8 text-xl text-foreground">
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
            <p className="font-normal tracking-[0.6px] leading-8 text-xl text-foreground">
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
            <p className="font-normal tracking-[0.6px] leading-8 text-xl text-foreground">
              Secure Transaction Platform
            </p>
          </div>
        </div>
        <Link
          href="#"
          className="leading-6 w-fit text-[16px] bg-primary rounded-full py-[18px] px-[22px] font-normal"
        >
          More About Us
        </Link>
      </div>
    </section>
  );
};
