import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const AboutUs = () => {
  return (
    <section className="mx-auto max-w-[1440px]">
      <div className="mb-[50px] flex flex-col gap-16 py-12 pl-[220px]">
        <div className="flex w-full items-center justify-start gap-16">
          <div className="flex max-w-[460px] flex-1 shrink-0 flex-col justify-start">
            <span className="text-primary mb-3 text-lg leading-[26px] font-medium uppercase">
              About Us
            </span>
            <h2 className="text-[56px] leading-[62px] font-bold tracking-tight capitalize">
              Embark on Your Digital{" "}
            </h2>
            <p className="text-foreground/60 mt-9 mb-[52px] text-2xl leading-10 font-normal tracking-[0.6px]">
              FramerBite offers the key components to build a professional-grade
              website for your SaaS, a fact well-known to readers familiar with
              the industry.
            </p>
            <Link
              href="#"
              className="border-primary text-primary w-fit rounded-full border-2 bg-transparent px-[22px] py-[18px] text-[16px] leading-6 font-medium"
            >
              More About Us
            </Link>
          </div>
          <div className="flex shrink-0 items-center pl-1">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/card-about.png`}
              alt="image"
              className="h-[494px] w-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
