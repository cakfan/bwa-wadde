import Image from "next/image";

export const BackgroundHeader = () => {
  return (
    <div className="absolute left-[50vw] bg-background -z-10 top-9 w-[1414px] h-[900.11]">
      <Image
        src={`${
          process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
        }assets/bg-header.png`}
        alt="background header"
        width={1414}
        height={900.11}
        className="object-cover mix-blend-soft-light"
      />
    </div>
  );
};
