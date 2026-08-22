import HeroSection1 from '@/components/home/sections/HeroSection1'
import IntroSection from '@/components/home/sections/IntroSection'
import GoalsSection from '@/components/home/sections/GoalsSection'
import StatsSection from '@/components/home/sections/StatsSection'
import ProjectsSection from '@/components/home/sections/ProjectsSection'
import ActivitiesSection from '@/components/home/sections/ActivitiesSection'
import FaqSection from '@/components/home/sections/FaqSection'
import PartnersSection from '@/components/home/sections/PartnersSection'

const Home = () => {
  return (
    <main className="flex-1">
      <HeroSection1 />
      <IntroSection />
      <GoalsSection />
      <StatsSection />
      {/* <ProjectsSection /> */}
      <ActivitiesSection />
      <FaqSection />
      <PartnersSection />
    </main>
  )
}

export default Home
