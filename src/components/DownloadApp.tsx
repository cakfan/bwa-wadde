/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const DownloadApp = () => {
  return (
    <section className="bg-foreground/5 mx-auto">
      <div className="mx-auto mt-[54px] flex w-full max-w-[1440px] justify-center gap-16 pt-[95px] pl-[220px]">
        <div className="mt-20 h-[494px] max-w-[472px] shrink-0 pt-0.5">
          <img
            src={`${
              process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
            }assets/app-preview.png`}
            alt="app preview"
            className="h-full w-full"
          />
        </div>
        <div className="ml-1 flex flex-1 flex-col gap-8 pb-12">
          <div className="flex max-w-[528px] flex-col gap-8">
            <h2 className="text-[56px] leading-[62px] font-bold tracking-tight capitalize">
              Download Our Mobile App
            </h2>
            <p className="text-foreground/60 max-w-[460px] text-2xl leading-10 font-normal tracking-[0.6px]">
              X provides you with the essential toolkit to develop a genuinely
              polished website
            </p>
          </div>
          <div className="flex flex-col gap-[18px]">
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
                WeChat & live chat
              </p>
            </div>
          </div>
          <div className="mt-0.5 flex gap-5">
            <Link href="#">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                }assets/appstore.png`}
                alt="appstore"
                className="h-[54px] w-fit"
              />
            </Link>
            <Link href="#">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                }assets/playstore.png`}
                alt="playstore"
                className="h-[54px] w-fit"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
