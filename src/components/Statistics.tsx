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
      <div className="py-12 mt-[15px] w-full pl-[220px]">
        <div className="flex w-full items-center gap-[63px]">
          {statistics.map(({ count, icon, description }, index) => (
            <div key={index} className="flex flex-col gap-2 w-auto">
              <span className="text-7xl text-center font-bold leading-[88px] tracking-tight text-[#1560F2]">
                {count}
              </span>
              <div className="flex items-center gap-2">
                <img src={icon} alt="icon" className="w-8 h-8" />
                <span className="text-foreground/60 leading-[26px] text-lg">
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
