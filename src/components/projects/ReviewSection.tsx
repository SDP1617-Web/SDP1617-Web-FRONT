'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ReviewCard } from '@/components/common/Card'

const REVIEWS = [
  {
    id: 1,
    name: '이서연',
    cohort: '16기 · 프론트엔드 개발',
    text: '디자인 시스템과 컴포넌트 구조를 같이 정의하면서 협업하는 방법을 자연스럽게 배울 수 있었어요. 코드 리뷰 문화도 큰 도움이 됐습니다.',
  },
  {
    id: 2,
    name: '박준영',
    cohort: '16기 · 개발자',
    text: '세미나에서 실무자들의 데이터 활용 사례를 들으면서, 우리가 만든 서비스에도 지표를 어떻게 녹여야 할지 감을 잡을 수 있었습니다. 감사합니다 SDP!!',
  },
  {
    id: 3,
    name: '김민솔',
    cohort: '16기 · UI/UX 디자인',
    text: '프로젝트가 단순 산출물로 끝나지 않고, 매주 세션과 피드백을 통해 점점 다듬어지는 과정이 인상 깊었어요. 실제 서비스처럼 고민해 볼 수 있는 경험이었습니다.',
  },
  {
    id: 4,
    name: '박우주',
    cohort: '16기 · 프론트엔드 개발자',
    text: '디자인 시스템과 컴포넌트 구조를 같이 정의하면서 협업하는 방법을 자연스럽게 배울 수 있었어요. 코드 리뷰 문화도 큰 도움이 됐습니다.',
  },
  {
    id: 5,
    name: '이소희',
    cohort: '16기 · 프론트엔드 개발자',
    text: '디자인 시스템과 컴포넌트 구조를 같이 정의하면서 협업하는 방법을 자연스럽게 배울 수 있었어요. 코드 리뷰 문화도 큰 도움이 됐습니다.',
  },
]

export const ReviewSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const dragCleanupRef = useRef<(() => void) | null>(null)

  const [showLeftShadow, setShowLeftShadow] = useState(true)
  const [showRightShadow, setShowRightShadow] = useState(true)

  const checkScrollPosition = () => {
    const slider = scrollRef.current
    if (!slider) return

    const { scrollLeft, scrollWidth, clientWidth } = slider
    setShowLeftShadow(scrollLeft > 1)
    setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 1)
  }

  const startAutoScroll = (direction: 'left' | 'right') => {
    if (animationRef.current) return

    const scroll = () => {
      if (scrollRef.current) {
        const speed = 6
        const delta = direction === 'right' ? speed : -speed
        const prev = scrollRef.current.scrollLeft
        scrollRef.current.scrollLeft = prev + delta
        checkScrollPosition()
        if (scrollRef.current.scrollLeft === prev) {
          animationRef.current = null
          return
        }
        animationRef.current = requestAnimationFrame(scroll)
      }
    }
    animationRef.current = requestAnimationFrame(scroll)
  }

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = scrollRef.current
    if (!slider) return

    stopAutoScroll()
    slider.classList.add('active')
    const startX = e.pageX - slider.offsetLeft
    const scrollLeft = slider.scrollLeft

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.pageX - slider.offsetLeft
      const walk = (x - startX) * 1.5
      slider.scrollLeft = scrollLeft - walk
      checkScrollPosition()
    }

    const cleanupDrag = () => {
      slider.classList.remove('active')
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', cleanupDrag)
      dragCleanupRef.current = null
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', cleanupDrag)
    dragCleanupRef.current = cleanupDrag
  }

  useEffect(() => {
    const slider = scrollRef.current
    if (slider) {
      const initialCenter = (slider.scrollWidth - slider.clientWidth) / 2
      slider.scrollLeft = initialCenter
    }

    const timer = setTimeout(checkScrollPosition, 100)
    window.addEventListener('resize', checkScrollPosition)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkScrollPosition)
      stopAutoScroll()
      dragCleanupRef.current?.()
    }
  }, [])

  return (
    <section className="relative w-[1920px] max-w-full overflow-hidden bg-black py-16">
      <div className="flex w-full flex-col gap-4 px-[360px]">
        <div>
          <h2 className="h2 text-white">활동 후기</h2>
        </div>
        <p className="h4 text-sdp-grey-400">
          기수별 프로젝트와 세션을 경험한 학회원들의 목소리입니다.
        </p>
      </div>

      <div className="relative mt-9 w-full">
        {showLeftShadow && (
          <div
            onMouseEnter={() => startAutoScroll('left')}
            onMouseLeave={stopAutoScroll}
            className="pointer-events-none absolute top-0 bottom-4 left-0 z-10 w-[246px] select-none"
            style={{
              background:
                'linear-gradient(90deg, var(--color-sdp-grey-900) 5.7%, rgba(20, 20, 20, 0.00) 99.51%)',
            }}
          />
        )}

        {showRightShadow && (
          <div
            onMouseEnter={() => startAutoScroll('right')}
            onMouseLeave={stopAutoScroll}
            className="pointer-events-none absolute top-0 right-0 bottom-4 z-10 w-[246px] select-none"
            style={{
              background:
                'linear-gradient(270deg, var(--color-sdp-grey-900) 5.7%, rgba(20, 20, 20, 0.00) 99.51%)',
            }}
          />
        )}

        <div
          onMouseEnter={() => startAutoScroll('left')}
          onMouseLeave={stopAutoScroll}
          className="absolute top-0 bottom-4 left-0 z-20 w-[100px] cursor-w-resize"
        />
        <div
          onMouseEnter={() => startAutoScroll('right')}
          onMouseLeave={stopAutoScroll}
          className="absolute top-0 right-0 bottom-4 z-20 w-[100px] cursor-e-resize"
        />

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onScroll={checkScrollPosition}
          className="flex cursor-grab gap-5 overflow-x-auto pb-4 select-none [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              cohort={review.cohort}
              text={review.text}
              className="shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
