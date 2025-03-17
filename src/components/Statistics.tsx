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
    <section className="mx-auto mt-16">
      <div className="py-12 mt-[15px] w-full pl-[220px] max-w-[1440px]">
        <div className="statistics-container">
          {statistics.map(({ count, icon, description }, index) => (
            <div key={index} className="statistics">
              <div className="statistics">
                <span className="count">{count}</span>
                <div className="flex items-center gap-2">
                  <img src={icon} alt="icon" />
                  <span className="description">{description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
