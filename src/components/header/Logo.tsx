/* eslint-disable @next/next/no-img-element */

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src={`${
          process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "/"
        }logo.svg`}
        alt="Logo"
        className="logo"
      />
    </div>
  );
};
