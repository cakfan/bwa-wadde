/* eslint-disable @next/next/no-img-element */
const companiesList = [
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }assets/logo1.png`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }assets/logo2.png`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }assets/logo3.png`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }assets/logo4.png`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }assets/logo5.png`,
  `${
    process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
  }assets/logo6.png`,
];

export const Companies = () => {
  return (
    <section className="flex flex-col gap-[18px] items-center mt-[59px] pb-[122px]">
      <p className="w-[682px] leading-[52px] font-bold text-center text-4xl">
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
