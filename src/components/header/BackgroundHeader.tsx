import Image from "next/image";

export const BackgroundHeader = () => {
  return (
    <div className="absolute left-[674px] -z-10 top-9 w-[1414px] h-[900.11] bg-background">
      <Image
        src={`${
          process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
        }assets/bg-header.png`}
        alt="background header"
        width={1343}
        height={768}
        className="w-full h-full mix-blend-soft-light"
      />
    </div>
  );
};
