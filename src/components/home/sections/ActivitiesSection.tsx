'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '@/components/common/Button'

const TABS = [
  {
    id: 'alumnaimentoring',
    label: '알럼나이 멘토링',
    images: [
      '/activities/alumnai-mentoring.png',
      '/activities/alumnai-mentoring2.png',
      '/activities/alumnai-mentoring3.png',
    ],
  },
  {
    id: 'networkingday',
    label: '네트워킹 데이',
    images: ['/activities/networking-day.png'],
  },
  {
    id: 'mentoring',
    label: '기후환경 동아리 멘토링',
    images: ['/activities/mentoring.png'],
  },
  {
    id: 'mini-semina',
    label: '미니 세미나',
    images: ['/activities/mini-semina.png', '/activities/mini-semina2.png'],
  },
  {
    id: 'open-semina',
    label: '오픈 세미나',
    images: ['/activities/open-semina.png'],
  },
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
  const [imageIndex, setImageIndex] = useState(0)

  const activeTabData = TABS.find((t) => t.id === activeTab) ?? TABS[0]
  const images = activeTabData.images
  const hasMultipleImages = images.length > 1
  const currentImage = images[imageIndex] ?? images[0]

  // 탭이 바뀌면 이미지 인덱스를 처음으로 리셋
  useEffect(() => {
    setImageIndex(0)
  }, [activeTab])

  const goToPrev = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setImageIndex((prev) => (prev + 1) % images.length)
  }

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
          <div className="flex flex-col items-center gap-3">
            <div style={imageFrameStyle}>
              <Image
                key={currentImage} // 이미지 전환 시 트랜지션이 깔끔하게 재시작되도록
                src={currentImage}
                alt={`${activeTabData.label} ${imageIndex + 1}`}
                fill
                style={{ objectFit: 'contain' }}
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={goToPrev}
                    aria-label="이전 사진"
                    className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
                  >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path
                        d="M7 1L1 7L7 13"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="다음 사진"
                    className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
                  >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path
                        d="M1 1L7 7L1 13"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* 점 인디케이터 자리 - 항상 렌더링해서 높이를 고정, 점 자체만 조건부 */}
            <div className="flex h-2 items-center gap-2">
              {hasMultipleImages &&
                images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setImageIndex(i)}
                    aria-label={`${i + 1}번째 사진 보기`}
                    className={
                      i === imageIndex
                        ? 'bg-sdp-main-primary h-2 w-2 rounded-full transition-all'
                        : 'bg-sdp-grey-200 hover:bg-sdp-grey-300 h-2 w-2 rounded-full transition-all'
                    }
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivitiesSection
