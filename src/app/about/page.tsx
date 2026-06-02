import Image from 'next/image'
import AboutHero from '@/components/about/AboutHero'
import AboutIntro from '@/components/about/AboutIntro'
import AboutDark from '@/components/about/AboutDark'
import TalentSection from '@/components/about/TalentSection'
import DepartmentSection from '@/components/about/DepartmentSection'

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <AboutIntro />

      {/* AboutIntro와 AboutDark의 경계. 높이 0인 기준점 */}
      <div className="relative z-10 h-0">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/eclipses.svg" alt="" width={23} height={222} />
        </div>
      </div>

      <AboutDark />
      <TalentSection />
      <DepartmentSection />
    </main>
  )
}
