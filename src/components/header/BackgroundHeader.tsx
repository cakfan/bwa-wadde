import Image from "next/image";

export const BackgroundHeader = () => {
  return (
    <div className="absolute -right-[580px] -z-10 top-5 w-[1343px] h-[768px] bg-background opacity-50">
      <Image
        src={`${
          process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
        }assets/bg-header.png`}
        alt="background header"
        width={1343}
        height={768}
        className="w-full h-full object-cover mix-blend-soft-light"
      />
    </div>
  );
};
