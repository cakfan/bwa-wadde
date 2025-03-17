import { AboutUs } from "@/components/AboutUs";
import { Companies } from "@/components/Companies";
import { Contact } from "@/components/Contact";
import { DownloadApp } from "@/components/DownloadApp";
import { Header } from "@/components/header";
import { OurApp } from "@/components/OurApp";
import { ServiceSection } from "@/components/services";
import { Statistics } from "@/components/Statistics";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Companies />
        <ServiceSection />
        <AboutUs />
        <Team />
        <Statistics />
        <OurApp />
        <DownloadApp />
        <Contact />
      </main>
    </>
  );
}
