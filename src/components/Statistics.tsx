/* eslint-disable @next/next/no-img-element */
const statistics = [
  {
    count: "300+",
    icon: `${
      process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
    }icons/UsersThree.svg`,
    description: "partner with us",
  },
  {
    count: "$3.2b+",
    icon: `${
      process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
    }icons/Money.svg`,
    description: "Cumulative trending",
  },
  {
    count: "860k",
    icon: `${
      process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
    }icons/ProjectorScreenChart.svg`,
    description: "Successful projects",
  },
  {
    count: "1.6%",
    icon: `${
      process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
    }icons/Kanban.svg`,
    description: "Low interest rate",
  },
];

export const Statistics = () => {
  return (
    <section className="mx-auto mt-16 max-w-[1440px]">
      <div className="mt-[15px] w-full py-12 pl-[220px]">
        <div className="flex w-full items-center gap-[63px]">
          {statistics.map(({ count, icon, description }, index) => (
            <div key={index} className="flex w-auto flex-col gap-2">
              <span className="text-center text-7xl leading-[88px] font-bold tracking-tight text-[#1560F2]">
                {count}
              </span>
              <div className="flex items-center gap-2">
                <img src={icon} alt="icon" className="h-8 w-8" />
                <span className="text-foreground/60 text-lg leading-[26px]">
                  {description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
