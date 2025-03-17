/* eslint-disable @next/next/no-img-element */
import { CardServiceContainer } from "./Card";

export const ServiceSection = () => {
  return (
    <section className="flex flex-col gap-[68px] justify-center px-[209px] pt-[72px] pb-3 mb-[68px]">
      <h2 className="text-[56px] font-bold leading-[62px] capitalize">
        We&apos;re here to assist you in creating, managing
      </h2>
      <div className="flex w-[1021px] flex-col gap-[34px]">
        <div className="flex w-full gap-[34px]">
          <CardServiceContainer>
            <div className="flex w-[344px] justify-around items-center pb-[42px] border-b-2 border-dotted border-foreground/10">
              <h3>Invesment Fund</h3>
              <div className="ml-16 rounded-full bg-secondary p-3">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }icons/filter.svg`}
                  alt="filter"
                  className="h-6 w-6"
                />
              </div>
            </div>
            <p className="section mb-[82px]">
              FramerBite delivers the essential components to build a polished
              and professional website for your SaaS business.
            </p>
            <div className="mx-auto rounded-t-xl shrink-0 max-w-[316px] h-[149px]">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                }assets/entertainment.png`}
                alt="image"
                className="w-full"
              />
            </div>
          </CardServiceContainer>
          <CardServiceContainer className="w-[571px]">
            <div className="flex justify-between items-center w-full pb-[42px] border-b-2 border-dotted border-foreground/10">
              <h3>Retirement Plan</h3>
              <div className="ml-16 rounded-full bg-secondary p-3">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }icons/file.svg`}
                  alt="file"
                  className="h-6 w-6"
                />
              </div>
            </div>
            <p className="section mb-[49px]">
              FramerBite offers the essential building blocks for developing a
              sophisticated website for your SaaS, a well-established fact
              recognized by numerous desktop publishing packages and web page
              editors.
            </p>
            <div className="flex w-full justify-center gap-8">
              <div className="mx-auto rounded-t-xl shrink-0 w-[313px] h-[154px]">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }assets/chart1.png`}
                  alt="image"
                  className="w-full"
                />
              </div>
              <div className="mx-auto rounded-t-xl shrink-0 w-[163px] h-[154px]">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }assets/chart2.png`}
                  alt="image"
                  className="w-full"
                />
              </div>
            </div>
          </CardServiceContainer>
        </div>
        <CardServiceContainer className="flex-row w-full px-[46px] pb-8">
          <div className="flex flex-col w-full max-w-[408px] h-[374px]">
            <div className="rounded-full w-fit bg-secondary p-3 mb-10">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                }icons/payment.svg`}
                alt="icon"
                className="h-6 w-6"
              />
            </div>
            <h3 className="mr-[37px]">
              Global Visa and Mastercard with Multi-Currency Support
            </h3>
            <p className="section mt-[26px]">
              FramerBite provides the necessary elements for crafting a
              professional-grade website for your SaaS, acknowledged by various
              desktop publishing tools
            </p>
          </div>
          <div className="flex flex-1 items-end justify-end">
            <div className="rounded-xl shrink-0 max-w-[462px] h-[278px]">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                }assets/visa.png`}
                alt="image"
                className=""
              />
            </div>
          </div>
        </CardServiceContainer>
      </div>
    </section>
  );
};
