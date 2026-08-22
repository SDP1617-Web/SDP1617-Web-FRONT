'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/common/Button'

const TABS = [
  {
    id: 'alumnaimentoring',
    label: '알럼나이 멘토링',
    image: '/activity-orientation.png',
  },
  {
    id: 'networkingday',
    label: '네트워킹 데이',
    image: '/activity-environment.png',
  },
  {
    id: 'mentoring',
    label: '기후환경 동아리 멘토링',
    image: '/activity-volunteer.png',
  },
  { id: 'minisemina', label: '미니 세미나', image: '/activity-mt.png' },
  { id: 'opensemina', label: '오픈 세미나', image: '/activity-homecoming.png' },
]

const imageFrameStyle: CSSProperties = {
  width: '787px',
  height: '412px',
  borderRadius: '8px',
  border: '1px solid #B8B8B8',
  overflow: 'hidden',
  position: 'relative',
  flexShrink: 0,
}

const ActivitiesSection = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id)
  const activeImage =
    TABS.find((t) => t.id === activeTab)?.image ?? TABS[0].image

  return (
    <section style={{ marginTop: '195px' }} className="flex justify-center">
      <div style={{ width: '1202px' }} className="flex flex-col">
        {/* 타이틀 */}
        <p
          className="h2"
          style={{ color: 'var(--color-sdp-grey-900)', marginBottom: '36px' }}
        >
          지속가능한 발전을 위해
          <br />
          노력하는 모습들
        </p>

        {/* 탭 + 이미지 */}
        <div className="flex flex-row" style={{ gap: '107px' }}>
          {/* 좌측 탭 리스트 */}
          <div className="flex flex-col" style={{ gap: '0px' }}>
            {TABS.map((tab) => (
              <Button
                key={tab.id}
                variant="v2"
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* 우측 이미지 */}
          <div style={imageFrameStyle}>
            <Image
              src={activeImage}
              alt={activeTab}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesSection
