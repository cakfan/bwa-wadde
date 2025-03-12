import { BackgroundHeader } from "./BackgroundHeader";
import { Hero } from "./Hero";
import { NavHeader } from "./NavHeader";

export const Header = () => {
  return (
    <header className="relative w-full h-[816px] overflow-hidden">
      <BackgroundHeader />
      <NavHeader />
      <Hero />
    </header>
  );
};
