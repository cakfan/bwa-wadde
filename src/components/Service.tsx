/* eslint-disable @next/next/no-img-element */

export const ServiceSection = () => {
  return (
    <section className="mt-[72px] mb-[12px] flex flex-col items-center justify-center px-[209px]">
      <div className="mb-[68px] flex max-w-[1021px] flex-col gap-[68px] pt-[72px] pb-3">
        <h2 className="text-[56px] leading-[62px] font-bold tracking-tight capitalize">
          We&apos;re here to assist you in creating, managing
        </h2>
        <div className="col-span-2 grid grid-cols-[416px_571px] gap-[34px]">
          <div className="flex h-[493px] max-w-[416px] flex-col items-center justify-between rounded-[12px] bg-white/5 px-[36px] pt-[52px]">
            <div>
              <div className="custom-border-bottom-dashed flex items-center justify-between pb-[38px]">
                <h3 className="text-3xl leading-10 font-bold tracking-[-1px]">
                  Invesment Fund
                </h3>
                <div className="bg-secondary ml-16 rounded-full p-3">
                  <img
                    src={`${
                      process.env.NODE_ENV === "production"
                        ? "/bwa-wadde/"
                        : "/"
                    }icons/filter.svg`}
                    alt="filter"
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <p className="text-foreground/60 pt-3 text-xl leading-[28px] tracking-[0.6px]">
                FramerBite delivers the essential components to build a polished
                and professional website for your SaaS business.
              </p>
            </div>
            <div className="mx-auto h-[149px] max-w-[316px] shrink-0 rounded-t-xl">
              <img
                src={`${
                  process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                }assets/entertainment.png`}
                alt="image"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex h-[493px] max-w-[571px] flex-col items-center justify-between rounded-[12px] bg-white/5 px-[36px] pt-[52px]">
            <div>
              <div className="custom-border-bottom-dashed flex items-center justify-between pb-[38px]">
                <h3 className="text-3xl leading-10 font-bold tracking-[-1px]">
                  Retirement Plan
                </h3>
                <div className="bg-secondary ml-16 rounded-full p-3">
                  <img
                    src={`${
                      process.env.NODE_ENV === "production"
                        ? "/bwa-wadde/"
                        : "/"
                    }icons/file.svg`}
                    alt="file"
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <p className="text-foreground/60 pt-3 text-xl leading-7 font-normal tracking-[0.6px]">
                FramerBite offers the essential building blocks for developing a
                sophisticated website for your SaaS, a well-established fact
                recognized by numerous desktop publishing packages and web page
                editors.
              </p>
            </div>
            <div className="flex w-full justify-center gap-8">
              <div className="mx-auto h-[154px] w-[313px] shrink-0 rounded-t-xl">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }assets/chart1.png`}
                  alt="image"
                  className="w-full"
                />
              </div>
              <div className="mx-auto h-[154px] w-[163px] shrink-0 rounded-t-xl">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }assets/chart2.png`}
                  alt="image"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex h-[458px] w-full flex-row items-end justify-between rounded-[12px] bg-white/5 px-[36px] pt-[52px] pb-[32px]">
            <div className="flex h-[374px] w-full max-w-[408px] flex-col">
              <div className="bg-secondary mb-10 w-fit rounded-full p-3">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }icons/payment.svg`}
                  alt="icon"
                  className="h-6 w-6"
                />
              </div>
              <h3 className="mr-[37px] text-3xl leading-10 font-bold tracking-[-1px]">
                Global Visa and Mastercard with Multi-Currency Support
              </h3>
              <p className="text-foreground/60 mt-[26px] text-xl leading-7 font-normal tracking-[0.6px]">
                FramerBite provides the necessary elements for crafting a
                professional-grade website for your SaaS, acknowledged by
                various desktop publishing tools
              </p>
            </div>
            <div className="flex flex-1 items-end justify-end">
              <div className="h-[278px] max-w-[462px] shrink-0 rounded-xl">
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }assets/visa.png`}
                  alt="image"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
