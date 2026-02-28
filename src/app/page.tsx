import CompaniesSection from "@/components/CompaniesSection/CompaniesSection";
import DashboardSection from "@/components/DashboardSection/DashboardSection";
import ExploreCategory from "@/components/ExploreCategory/ExploreCategory";
import Hero from "@/components/HeroSection/HeroSection";
 

export default function Home() {
  return (
    <div>
      <Hero />
      <CompaniesSection/>
      <ExploreCategory/>
      <DashboardSection/>
    </div>
  );
}
