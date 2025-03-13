/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="mt-3.5 ml-[100px] w-[851px] h-[306px]">
        <h1 className="relative flex flex-wrap justify-center text-foreground items-center text-7xl font-bold leading-[88px] text-center">
          <span>Intelligent</span>
          <div className="relative w-[168.77px] h-[186.71px]">
            <Image
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/person1.png`}
              alt="Person 1"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <span>Tools for</span>
          <div className="w-full"></div>{" "}
          {/* Untuk pindah ke baris berikutnya */}
          <span>Savvy Businesses</span>
          <div className="absolute left-[-50px] bottom-[-20px] w-[182.92px] h-[186.44px]">
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

      <p className="w-[656px] leading-10 tracking-wider text-2xl ml-[151px] font-normal text-foreground/60">
        FramerBite provides the essential elements for crafting a top-tier
        website for your SaaS platform.
      </p>

      <div className="flex gap-10 items-center mt-20 ml-[146px]">
        <Link href="#" className="btn primary lg">
          Get Started Now
        </Link>
        <div className="relative flex">
          <img
            src={`${
              process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
            }assets/circle-person-1.png`}
            alt="person"
            className="circle-person"
          />
          <img
            src={`${
              process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
            }assets/circle-person-2.png`}
            alt="person"
            className="circle-person -ml-4"
          />
          <button type="button" className="btn-icon -ml-4">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }icons/plus.svg`}
              alt="person"
              className="circle-person"
            />
          </button>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col gap-0.5">
            <p className="leading-[52px] font-bold text-4xl">3.2m</p>
            <p className="leading-[26px] text-[18px] text-foreground/60 font-normal">
              Success clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
