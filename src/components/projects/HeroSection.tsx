// app/project/components/HeroSection.tsx

import type { CSSProperties } from 'react'

import Image from 'next/image'

import Container from '../layout/Container'
import ProjectCard from './ProjectCard'

// 상수
const HERO_HEIGHT = '360px'

const TITLE_FONT_FAMILY = 'Pretendard Variable'
const TITLE_FONT_SIZE = '64px'
const TITLE_COLOR = '#FFFFFF'

export default function HeroSection() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: HERO_HEIGHT }}
      >
        <Image
          src="/images/project/project-header.jpg"
          alt="project-header"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />

        <div style={overlayStyle} />

        <Container className="relative flex h-full items-center">
          <h1 style={titleStyle}>PROJECT</h1>
        </Container>
      </section>

      {/* Project Card Section */}
      <Container>
        <section className="py-24">
          <div className="grid grid-cols-2 gap-10">
            <ProjectCard
              title="Beanspot"
              description="안정화를 갖기 위해 노력중"
              image="/images/project/project-1.png"
            />

            <ProjectCard
              title="카카오톡 선물하기 플랫폼"
              description="다양한 상품을 전달하는 서비스"
              image="/images/project/project-2.png"
            />

            <ProjectCard
              title="네트워킹 데이"
              description="자유롭게 활동을 공유하는 행사"
              image="/images/project/project-3.png"
            />

            <ProjectCard
              title="행복부에서 진행하는 활동들"
              description="다양한 활동 및 프로그램"
              image="/images/project/project-4.png"
            />
          </div>
        </section>
      </Container>
    </>
  )
}

const overlayStyle: CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
}

const titleStyle: CSSProperties = {
  fontFamily: TITLE_FONT_FAMILY,
  fontWeight: 700,
  fontSize: TITLE_FONT_SIZE,
  color: TITLE_COLOR,
}
