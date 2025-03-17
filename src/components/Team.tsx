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
    <section className="mx-auto w-full mt-16">
      <div className="flex w-full pl-[220px] max-w-[1440px] overflow-hidden py-16 mt-[34px]">
        {/* Team Members (Tabs) */}
        <div className="w-[312px] flex-none h-auto flex flex-col gap-4">
          {teamMembers.map((member) => (
            <button
              key={member.id}
              onClick={() => setActiveTab(member.id)}
              className={cn(
                "flex w-full items-center justify-start gap-4 rounded-full pl-3.5 py-3 ease-in transition-all duration-300 hover:bg-foreground/10 cursor-pointer",
                activeTab === member.id ? "bg-foreground/10" : ""
              )}
            >
              <img
                src={member.img}
                alt="team"
                className="w-16 h-16 rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-xl leading-8  text-start -tracking-[0.6px] font-medium">
                  {member.name}
                </p>
                <p className="text-lg leading-[26px] text-start  text-foreground/60">
                  {member.role}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Testimonial Section with Smooth Transition */}
        <div className="relative ml-[76px] flex-none w-[705px]">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`absolute h-auto inset-0 transition-opacity duration-300 ease-in-out transform ${
                activeTab === member.id
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="relative w-full">
                <p className="text-[36px] font-bold leading-[52px] tracking-[-1px]">
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
          ))}
        </div>
      </div>
    </section>
  );
};
