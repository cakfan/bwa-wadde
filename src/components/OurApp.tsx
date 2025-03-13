/* eslint-disable @next/next/no-img-element */

export const OurApp = () => {
  return (
    <section className="relative flex pl-[220px] py-12">
      <div className="relative mt-[31px] mr-[68px]">
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }assets/app-card.png`}
          alt="image card"
          className="w-auto h-[544px]"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col w-[514px]">
          <h2>Pave your path to triumph with XB innovation.</h2>
          <p className="section mt-8 w-[460px] leading-10 text-2xl">
            X equips you with the essential tools to craft a genuinely
            professional SaaS website.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-[18px] mb-[34px]">
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
        <button type="button" className="btn primary md">
          More About Us
        </button>
      </div>
    </section>
  );
};
