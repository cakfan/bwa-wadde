/* eslint-disable @next/next/no-img-element */
const companiesList = [
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }icons/logo1.svg`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }icons/logo2.svg`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }icons/logo3.svg`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }icons/logo4.svg`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }icons/logo5.svg`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }icons/logo6.svg`,
];

export const Companies = () => {
  return (
    <section className="flex flex-col gap-[18px] items-center mt-[59px] px-[138.55px] pb-[122px]">
      <p className="w-full max-w-[682px] leading-[52px] font-bold text-center text-4xl">
        Join over 55,000 businesses that have achieved their goals.
      </p>
      <div className="flex gap-12 bg-foreground rounded-full px-[82px] py-[50px]">
        {companiesList.map((item, index) => (
          <div key={index} className="companies-logo">
            <img src={item} alt="Logo" className="companies-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};
