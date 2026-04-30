import ExtraSection from "@/components/ExtraSection";
import HeroSection from "@/components/HeroSection";
import PopularProducts from "@/components/PopularProducts";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <PopularProducts></PopularProducts>
      <ExtraSection></ExtraSection>
    </>
  );
}
