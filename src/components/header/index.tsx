import { BackgroundHeader } from "./BackgroundHeader";
import { Hero } from "./Hero";
import { NavHeader } from "./NavHeader";

export const Header = () => {
  return (
    <header className="relative mx-auto overflow-hidden">
      <BackgroundHeader />
      <div className="w-full max-w-[1440px] mx-auto h-[816px]">
        <NavHeader />
        <Hero />
      </div>
    </header>
  );
};
