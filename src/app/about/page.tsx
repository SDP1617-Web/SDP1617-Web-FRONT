import Image from "next/image";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutDark from "@/components/about/AboutDark";
import TalentSection from "@/components/about/TalentSection";
import DepartmentSection from "@/components/about/DepartmentSection";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <div className="relative">
        <AboutIntro />
        <div className="pointer-events-none absolute left-1/2 top-[var(--intro-height)] z-10 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/eclipses.svg"
            alt=""
            width={23}
            height={222}
            priority
          />
        </div>
        <AboutDark />
      </div>

      <TalentSection />
      <DepartmentSection />
    </main>
  );
}