"use client";

import { cn } from "@/libs/utils";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */

const teamMembers = [
  {
    id: "team1",
    name: "Catherine Bennett",
    role: "Founder, Creative",
    img: `${
      process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
    }assets/team1.png`,
    testimonial:
      "Initially doubtful, the outcome surpassed all my anticipations. The powerful analytics and reporting features offered crucial perspectives on our business metrics.",
  },
  {
    id: "team2",
    name: "Tony Danza",
    role: "Designer, Creative",
    img: `${
      process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
    }assets/team2.png`,
    testimonial:
      "This platform revolutionized our workflow. The intuitive interface and seamless integration with our tools made collaboration effortless.",
  },
  {
    id: "team3",
    name: "Mike Torello",
    role: "AIGC, Creative",
    img: `${
      process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
    }assets/team3.png`,
    testimonial:
      "The automation features have significantly reduced our workload, allowing us to focus on innovation and creativity.",
  },
];

export const Team = () => {
  const [activeTab, setActiveTab] = useState("team1");

  return (
    <section className="mx-auto mt-16 w-full max-w-[1440px]">
      <div className="relative mt-[34px] flex w-full overflow-hidden py-16 pl-[220px]">
        {/* Team Members (Tabs) */}
        <div className="flex h-auto w-[312px] flex-none flex-col gap-4">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setActiveTab(member.id)}
              className={cn(
                "hover:bg-foreground/10 flex w-full cursor-pointer items-center justify-start gap-4 rounded-full py-3 pl-3.5 transition-all duration-300 ease-in",
                activeTab === member.id ? "bg-foreground/10" : "",
              )}
            >
              <img
                src={member.img}
                alt="team"
                className="h-16 w-16 rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-start text-xl leading-8 font-medium -tracking-[0.6px]">
                  {member.name}
                </p>
                <p className="text-foreground/60 text-start text-lg leading-[26px]">
                  {member.role}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Testimonial Section with Smooth Transition */}
        <div className="relative ml-[76px] w-[705px] flex-none">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={cn(
                "absolute inset-0 h-auto transform transition-opacity duration-300 ease-in-out",
                activeTab === member.id
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-95 opacity-0",
              )}
            >
              <div className="relative w-full">
                <p className="text-[36px] leading-[52px] font-bold tracking-[-1px]">
                  {member.testimonial}
                  <span className="text-foreground/40">
                    enabling us to implement informed.
                  </span>
                </p>
                <img
                  src={`${
                    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
                  }icons/quote-filled.svg`}
                  alt="icon"
                  className="absolute right-[16.18px] bottom-[18.52px]"
                />
              </div>
            </div>
          ))}
        </div>
        <img
          src={`${
            process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
          }icons/quote-filled.svg`}
          alt="icon"
          className="absolute top-16 -right-8 rotate-180"
        />
      </div>
    </section>
  );
};
