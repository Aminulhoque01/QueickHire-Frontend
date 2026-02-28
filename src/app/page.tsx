import CompaniesSection from "@/components/CompaniesSection/CompaniesSection";
import DashboardSection from "@/components/DashboardSection/DashboardSection";
import ExploreCategory from "@/components/ExploreCategory/ExploreCategory";
import FeaturedJobs from "@/components/FeaturedJobs/FeaturedJobs";
import Hero from "@/components/HeroSection/HeroSection";
import LatestJobs from "@/components/LatestJobs/LatestJobs";
 

export default function Home() {
  return (
    <div>
      <Hero />
      <CompaniesSection/>
      <ExploreCategory/>
      <DashboardSection/>
      <FeaturedJobs/>
      <LatestJobs/>
    </div>
  );
}
