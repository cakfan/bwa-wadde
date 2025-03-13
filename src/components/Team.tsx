/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export const Team = () => {
  return (
    <div className="flex w-full overflow-hidden pt-16 mt-[1px] pr-[127px]">
      <div className="team-container">
        <Link href="#" className="team-people active">
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
        </Link>
        <Link href="#" className="team-people">
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
        </Link>
        <Link href="#" className="team-people">
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
        </Link>
      </div>
      <div className="relative ml-[76px]">
        <p className="text-[36px] w-[705px] font-bold leading-[52px] tracking-[-1px]">
          Initially doubtful, the outcome surpassed all my anticipations. The
          powerful analytics and reporting features offered crucial perspectives
          on our business metrics,{" "}
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
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }icons/quote-filled.svg`}
          alt="icon"
          className="absolute top-0 -right-40 rotate-180"
        />
      </div>
    </div>
  );
};
