/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const OurApp = () => {
  return (
    <section className="relative mx-auto mt-[85px] flex max-w-[1440px] py-12 pl-[220px]">
      <div className="relative mt-[17px] mr-2 shrink-0">
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }assets/app-card.png`}
          alt="image card"
          className="h-[544px] w-fit"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex max-w-[514px] flex-col">
          <h2 className="text-[56px] leading-[62px] font-bold tracking-tight capitalize">
            Pave your path to triumph with XB innovation.
          </h2>
          <p className="text-foreground/60 mt-8 max-w-[460px] text-2xl leading-10 font-normal tracking-[0.6px]">
            X equips you with the essential tools to craft a genuinely
            professional SaaS website.
          </p>
        </div>
        <div className="mt-8 mb-0.5 flex flex-col gap-[18px]">
          <div className="flex items-center gap-3.5">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }icons/check.svg`}
              alt="icon"
            />
            <p className="text-foreground text-xl leading-8 font-normal tracking-[0.6px]">
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
            <p className="text-foreground text-xl leading-8 font-normal tracking-[0.6px]">
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
            <p className="text-foreground text-xl leading-8 font-normal tracking-[0.6px]">
              Secure Transaction Platform
            </p>
          </div>
        </div>
        <Link
          href="#"
          className="bg-primary w-fit rounded-full px-[22px] py-[18px] text-[16px] leading-6 font-normal"
        >
          More About Us
        </Link>
      </div>
    </section>
  );
};
