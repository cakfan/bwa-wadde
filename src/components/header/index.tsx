import { BackgroundHeader } from "./BackgroundHeader";
import { Hero } from "./Hero";
import { NavHeader } from "./NavHeader";

export const Header = () => {
  return (
    <header className="relative mx-auto overflow-hidden">
      <BackgroundHeader />
      <NavHeader />
      <div className="mx-auto w-full max-w-[1440px] pb-[139px]">
        <Hero />
      </div>
    </header>
  );
};
