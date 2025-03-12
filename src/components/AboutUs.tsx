/* eslint-disable @next/next/no-img-element */
export const AboutUs = () => {
  return (
    <section className="flex flex-col gap-[68px] pl-[220px] py-12 mb-[50px]">
      <div className="flex justify-start items-center ">
        <div className="flex flex-col justify-start w-[460px]">
          <span className="section mb-3">About Us</span>
          <h2>Embark on Your Digital </h2>
          <p className="section mt-9 text-2xl leading-10 mb-[52px]">
            FramerBite offers the key components to build a professional-grade
            website for your SaaS, a fact well-known to readers familiar with
            the industry.
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
      </div>
      <div className="relative flex overflow-hidden">
        <div className="team-container">
          <div className="team-people active">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/team1.png`}
              alt="team"
            />
            <div className="flex flex-col">
              <h6>Catherine Bennett</h6>
              <p>Founder, Creative</p>
            </div>
          </div>
          <div className="team-people">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/team2.png`}
              alt="team"
            />
            <div className="flex flex-col">
              <h6>Tony Danza</h6>
              <p>Designer, Creative</p>
            </div>
          </div>
          <div className="team-people">
            <img
              src={`${
                process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
              }assets/team3.png`}
              alt="team"
            />
            <div className="flex flex-col">
              <h6>Mike Torello</h6>
              <p>AIGC, Creative</p>
            </div>
          </div>
        </div>
        <div className="relative w-[705px] ml-[76px]">
          <p className="text-4xl font-bold leading-[52px] tracking-[-1px]">
            Initially doubtful, the outcome surpassed all my anticipations. The
            powerful analytics and reporting features offered crucial
            perspectives on our business metrics,{" "}
            <span className="text-foreground/40">
              enabling us to implement informed
            </span>
          </p>
          <img
            src={`${
              process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
            }icons/quote-filled.svg`}
            alt="icon"
            className="absolute bottom-[18.52px] right-[16.18px]"
          />
        </div>
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }icons/quote-filled.svg`}
          alt="icon"
          className="absolute top-0 -right-8 rotate-180"
        />
      </div>
    </section>
  );
};
