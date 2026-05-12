'use client'

import { useState } from 'react'
import { Card1, Card2, Card3, Card4, Card5 } from '@/components/common/Card'

export default function CardTestPage() {
  // Card4의 활성화 상태를 관리하기 위한 state
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <main className="bg-sdp-grey-50 min-h-screen w-full py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-24 px-10">
        {/* Header */}
        <div className="border-sdp-grey-200 border-b pb-8">
          <h1 className="h1 text-sdp-grey-900">Component Gallery</h1>
          <p className="body1 text-sdp-grey-500 mt-2">
            Design System 기반 카드 컴포넌트 1-5 테스트
          </p>
        </div>

        {/* Section 1 & 2: Wide Cards */}
        <div className="flex flex-col gap-10">
          <section>
            <p className="caption text-sdp-grey-400 mb-4 font-mono">
              #CARD 1 - Main Dark
            </p>
            <Card1
              subTitle="01. Innovation"
              title="지속 가능한 미래를 위한 인터페이스 솔루션과 가이드라인"
            />
          </section>

          <section>
            <p className="caption text-sdp-grey-400 mb-4 font-mono">
              #CARD 2 - Detail White
            </p>
            <Card2
              title="사용자 데이터 기반 인터랙션 최적화 리포트"
              description="복잡한 데이터 구조를 직관적인 UI로 풀어내는 과정에서 발견한 UX 패턴과 성능 개선 사례를 상세히 공유합니다."
              date="2026.05.12"
              footerText="Insight & Tech"
            />
          </section>
        </div>

        {/* Section 3 & 4: Grid Layout */}
        <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[auto_1fr]">
          <section>
            <p className="caption text-sdp-grey-400 mb-4 font-mono">
              #CARD 3 - Vertical Point
            </p>
            <Card3
              title="03"
              description="전략적인 기획과 디자인 시스템 구축을 통한 일관성 확보"
            />
          </section>

          <section className="flex flex-col gap-6">
            <p className="caption text-sdp-grey-400 mb-4 font-mono">
              #CARD 4 - Image Thumbnail (Click Interaction)
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card4
                isActive={activeCard === 2}
                onClick={() => setActiveCard(2)}
                category="Development"
                title="Next.js 프레임워크 도입"
                description="고성능 웹 서비스를 위한 기술 스택 전환 가이드"
              />
            </div>
          </section>
        </div>

        {/* Section 5: Stat Cards */}
        <section>
          <p className="caption text-sdp-grey-400 mb-4 font-mono">
            #CARD 5 - Display Stat
          </p>
          <div className="flex flex-wrap gap-6">
            <Card5 title="몇 기수?" value="17" unit="기" />
          </div>
        </section>
      </div>
    </main>
  )
}
