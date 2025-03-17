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
    <section className="mt-[59px] flex flex-col items-center gap-[18px] px-[138.55px] pb-[122px]">
      <p className="w-full max-w-[682px] text-center text-4xl leading-[52px] font-bold">
        Join over 55,000 businesses that have achieved their goals.
      </p>
      <div className="bg-foreground flex w-[1162.89px] gap-12 rounded-full px-[82px] py-[50px]">
        {companiesList.map((item, index) => (
          <div
            key={index}
            className="flex h-8 w-fit items-center justify-center"
          >
            <img src={item} alt="Logo" />
          </div>
        ))}
      </div>
    </section>
  );
};
