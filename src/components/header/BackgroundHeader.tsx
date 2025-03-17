import Image from "next/image";

export const BackgroundHeader = () => {
  return (
    <div className="bg-background absolute top-0 left-[50vw] -z-10 h-[900.11] w-[1414px]">
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
