import ExtraSection from "@/components/ExtraSection";
import HeroSection from "@/components/HeroSection";
import PopularProducts from "@/components/PopularProducts";

export const metadata = {
    title: "SunCart | Home",
    description: "A modern summer eCommerce platform where users can explore and purchase seasonal product",
};
export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <PopularProducts></PopularProducts>
      <ExtraSection></ExtraSection>
    </>
  );
}
