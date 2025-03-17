/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="mt-3.5 ml-[150.52px] h-[306px] max-w-[851px]">
        <h1 className="text-foreground relative flex flex-wrap text-7xl leading-[88px] font-bold">
          <span className="mt-[66px]">Intelligent</span>
          <div className="relative h-[186.71px] w-[168.77px] shrink-0">
            <Image
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/person1.png`}
              alt="Person 1"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span className="mt-[66px]">Tools for</span>
          <div className="w-full"></div>{" "}
          {/* Untuk pindah ke baris berikutnya */}
          <span className="pl-[140px]">Savvy Businesses</span>
          <div className="absolute -bottom-[31.29px] -left-[27.87px] h-[186.44px] w-[182.92px] shrink-0">
            <Image
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/person2.png`}
              alt="Person 2"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </h1>
      </div>

      <p className="text-foreground/60 ml-[151px] w-[656px] text-2xl leading-10 font-normal tracking-wider">
        FramerBite provides the essential elements for crafting a top-tier
        website for your SaaS platform.
      </p>

      <div className="mt-20 ml-[146px] flex items-center gap-10">
        <Link
          href="#"
          className="bg-primary w-fit rounded-full px-7 py-[18px] text-[16px] leading-6 font-medium"
        >
          Get Started Now
        </Link>
        <div className="flex items-center gap-6">
          <div className="relative flex">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/circle-person-1.png`}
              alt="person"
              className="h-[60px] w-[60px] shrink-0 rounded-full"
            />
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/circle-person-2.png`}
              alt="person"
              className="-ml-4 h-[60px] w-[60px] shrink-0 rounded-full"
            />
            <div className="bg-foreground border-foreground/40 -ml-4 flex h-[60px] w-[60px] items-center justify-center rounded-full border">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                }icons/plus.svg`}
                alt="person"
                className="h-6 w-6"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-4xl leading-[52px] font-bold">
              <strong>3.2m</strong>
            </p>
            <p className="text-foreground/60 text-[18px] leading-[26px] font-normal opacity-60">
              Success clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
