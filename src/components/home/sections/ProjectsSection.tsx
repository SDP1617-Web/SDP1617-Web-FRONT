import type { CSSProperties } from 'react'
import Image from 'next/image'
import { FeatureCard } from '@/components/common/Card'

const sectionStyle: CSSProperties = {
  width: '100%',
  height: '886px',
  backgroundColor: 'var(--color-sdp-grey-900)',
  position: 'relative',
  overflow: 'hidden',
}

const sphere1Style: CSSProperties = {
  width: '475px',
  height: '476px',
  borderRadius: '525px',
  opacity: 0.4,
  background: 'rgba(0, 0, 0, 0.00)',
  boxShadow: '0 4.487px 33.767px 10.096px rgba(255, 255, 255, 0.52) inset',
  position: 'absolute',
  top: '30px',
  right: '200px',
}

const sphere2Style: CSSProperties = {
  width: '652px',
  height: '563px',
  position: 'absolute',
  top: '100px',
  right: '-70px',
}

const CARDS = [
  {
    title: '대외 프로젝트',
    description: '최신 기술 스택을 사용한\n종단 간 제품 구축 및 프로젝트 수행.',
  },
  {
    title: '알럼나이 초청',
    description: '최신 기술 스택을 사용한\n종단 간 제품 구축 및 프로젝트 수행.',
  },
  {
    title: '정기 세션',
    description: '최신 기술 스택을 사용한\n종단 간 제품 구축 및 프로젝트 수행.',
  },
]

export default function ProjectsSection() {
  return (
    <section style={sectionStyle}>
      <div style={sphere1Style} />
      <Image
        src="/sphere2.svg"
        alt="sphere2"
        width={652}
        height={563}
        style={sphere2Style}
      />

      <div
        style={{
          maxWidth: '1202px',
          paddingTop: '80px',
          position: 'relative',
          zIndex: 10,
        }}
        className="mx-auto flex h-full flex-col"
      >
        {/* 타이틀 */}
        <p className="h2 text-white">SDP 프로젝트</p>
        <p
          className="body1"
          style={{ color: 'var(--color-sdp-grey-400)', marginTop: '16px' }}
        >
          단순한 동아리가 아닌, 혁신가를 위한 생태계입니다.
        </p>

        <div
          style={{ marginTop: '48px', gap: '24px' }}
          className="flex flex-row"
        >
          {CARDS.map((card, i) => (
            <FeatureCard
              key={i}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
