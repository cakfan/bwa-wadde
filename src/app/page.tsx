import { AboutUs } from "@/components/AboutUs";
import { Companies } from "@/components/Companies";
import { DownloadApp } from "@/components/DownloadApp";
import { Header } from "@/components/header";
import { OurApp } from "@/components/OurApp";
import { ServiceSection } from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <Companies />
      <ServiceSection />
      <AboutUs />
      <OurApp />
      <DownloadApp />
    </>
  );
}
