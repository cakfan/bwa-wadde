import { BackgroundHeader } from "./BackgroundHeader";
import { Hero } from "./Hero";
import { NavHeader } from "./NavHeader";

export const Header = () => {
  return (
    <header className="mx-auto">
      <div className="relative w-full max-w-[1440px] mx-auto h-[816px] overflow-hidden">
        <BackgroundHeader />
        <NavHeader />
        <Hero />
      </div>
    </header>
  );
};
