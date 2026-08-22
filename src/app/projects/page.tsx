// 프로세스 페이지
import HeroSection from '@/components/projects/HeroSection'
import ProjectSection from '@/components/projects/ProjectSection'
import ProgramSection from '@/components/projects/ProgramSection'
import { ReviewSection } from '@/components/projects/ReviewSection'

export default function ProjectsPage() {
  return (
    <>
      <main className="bg-sdp-grey-900 min-h-screen">
        <HeroSection />
        {/* <ProjectSection /> */}
        <ProgramSection />
        <ReviewSection />
      </main>
    </>
  )
}
