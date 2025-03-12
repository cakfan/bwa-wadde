/* eslint-disable @next/next/no-img-element */
export const AboutUs = () => {
  return (
    <section className="flex justify-start gap-[68px] pl-[220px] py-12 mb-[50px]">
      <div className="flex flex-col justify-start w-[460px]">
        <span className="section mb-3">About Us</span>
        <h2>Embark on Your Digital </h2>
        <p className="section mt-9 text-2xl leading-10 mb-[52px]">
          FramerBite offers the key components to build a professional-grade
          website for your SaaS, a fact well-known to readers familiar with the
          industry.
        </p>
        <button type="button" className="btn primary outline md">
          More About Us
        </button>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }assets/card-about.png`}
          alt="image"
          className="h-[494px]"
        />
      </div>
    </section>
  );
};
