import { AboutUs } from "@/components/AboutUs";
import { Companies } from "@/components/Companies";
import { Header } from "@/components/header";
import { ServiceSection } from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <Companies />
      <ServiceSection />
      <AboutUs />
    </>
  );
}
