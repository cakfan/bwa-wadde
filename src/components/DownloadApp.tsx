/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const DownloadApp = () => {
  return (
    <section className="mx-auto bg-foreground/5">
      <div className="flex w-full max-w-[1440px] mx-auto justify-center gap-16 pl-[220px] mt-[54px] pt-[95px]">
        <div className="mt-20 pt-0.5 shrink-0 h-[494px] max-w-[472px]">
          <img
            src={`${
              process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
            }assets/app-preview.png`}
            alt="app preview"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col flex-1 ml-1 gap-8 pb-12">
          <div className="flex flex-col gap-8 max-w-[528px]">
            <h2 className="line-clamp-2 capitalize">Download Our Mobile App</h2>
            <p className="section leading-10 text-2xl max-w-[460px]">
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
                WeChat & live chat
              </p>
            </div>
          </div>
          <div className="flex mt-0.5 gap-5">
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
