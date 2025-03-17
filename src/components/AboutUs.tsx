import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const AboutUs = () => {
  return (
    <section className="mx-auto w-full">
      <div className="flex max-w-[1440px] flex-col gap-16 pl-[220px] py-12 mb-[50px]">
        <div className="flex w-full gap-16 justify-start items-center">
          <div className="flex flex-col justify-start flex-1 shrink-0 max-w-[460px]">
            <span className="section mb-3">About Us</span>
            <h2 className="capitalize">Embark on Your Digital </h2>
            <p className="section mt-9 text-2xl leading-10 mb-[52px]">
              FramerBite offers the key components to build a professional-grade
              website for your SaaS, a fact well-known to readers familiar with
              the industry.
            </p>
            <Link href="#" className="btn primary outline md">
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
