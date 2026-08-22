'use client'

import React, { useRef, useState, useEffect } from 'react'
import { ReviewCard } from '@/components/common/Card'

const REVIEWS = [
  {
    id: 1,
    name: '정은우',
    cohort: '17기 · 리서치팀',
    text: '단순히 아이디어로 끝나는 게 아니라, 직접 데이터를 수집하고 SDGs 관점에서 문제를 정의해 보는 과정이 정말 값졌습니다. 기획 프로세스를 제대로 배울 수 있어서 좋았어요.',
  },
  {
    id: 2,
    name: '김민솔',
    cohort: '16기 · 디자인팀',
    text: '디자인 시스템을 체계적으로 세우고, 테크팀과 소통하며 UI를 구현해 나가는 과정이 실무와 정말 맞닿아 있다고 느꼈어요. 함께 답을 찾아가는 법을 배웠어요!',
  },
  {
    id: 3,
    name: '이현승',
    cohort: '17기 · 테크팀',
    text: '기획과 디자인이 코드로 완성되는 순간이 가장 뿌듯했어요. 기획 단계부터 참여해 기술적인 의견을 나누며 실무 중심의 개발 프로세스를 겪어볼 수 있었습니다.',
  },
  {
    id: 4,
    name: '주은서',
    cohort: '16기 · 리서치팀',
    text: '지속가능성이라는 뚜렷한 주제 아래, 시장 분석부터 프로덕트 기획까지 치열하게 고민해 본 경험이 제 진로에 큰 확신을 주었습니다. SDP 덕분에 많이 성장했어요.',
  },
  {
    id: 5,
    name: '박예승',
    cohort: '17기 · 디자인팀',
    text: '단순히 예쁜 화면을 그리는 걸 넘어, 컴포넌트 시스템을 구축하고 테크팀과 협업하며 프로덕트 디자이너로서의 시야를 확실하게 넓힐 수 있는 시간이었습니다.',
  },
  {
    id: 6,
    name: '이혁주',
    cohort: '17기 · 리서치팀',
    text: '유저 페르소나를 세우고 직접 데이터를 수집하며 기획을 다듬을 수 있었습니다. 매주 세션에서의 적극적인 피드백 덕분에 논리적으로 설득하는 힘을 기를 수 있었어요.',
  },
  {
    id: 7,
    name: '송현빈',
    cohort: '16기 · 테크팀',
    text: 'API 연동부터 배포 후 트러블슈팅까지, 개발의 전 과정을 겪으며 진짜 서비스가 어떻게 굴러가는지 제대로 배웠습니다. 함께 치열하게 고민해 준 팀원들에게 감사합니다.',
  },
  {
    id: 8,
    name: '박준영',
    cohort: '17기 · 디자인팀',
    text: '유저 리서치를 바탕으로 사용자 여정을 설계해 보고, 실제 구현 가능한 UI로 풀어내는 과정에서 정말 많이 배웠습니다. 실제 서비스처럼 깊이 있게 고민해 볼 수 있는 환경이에요.',
  },
  {
    id: 9,
    name: '이혜민',
    cohort: '17기 · 리서치팀',
    text: '디자인, 테크 파트와 협업하며 제가 쓴 기획안이 실제 서비스로 구현되는 걸 보는 게 뿌듯했어요. 각 직군의 언어를 이해하고 조율하는 기획자 마인드를 배웠습니다.',
  },
  {
    id: 10,
    name: '김라율',
    cohort: '16기 · 디자인팀',
    text: '매주 서로의 작업물에 대해 피드백을 나누고 개선해 나가며 디자이너로서 더 성장할 수 있었습니다. 혼자서는 절대 해내지 못했을 결과물을 냈어요.',
  },
  {
    id: 11,
    name: '김수빈',
    cohort: '17기 · 테크팀',
    text: '다른 개발자들과 코드 리뷰를 주고받으며 기술적으로 크게 성장했습니다. 배포까지 고려한 아키텍처 설계는 어디서도 얻기 힘든 값진 자산이 됐어요.',
  },
  {
    id: 12,
    name: '손윤영',
    cohort: '16기 · 리서치팀',
    text: '열정 넘치는 팀원들과 밤새워 요구사항 정의서를 다듬던 기억이 생생합니다. 밀도 높은 협업과 진짜 서비스를 만드는 경험을 할 수 있었어요.',
  },
  {
    id: 13,
    name: '신주희',
    cohort: '17기 · 디자인팀',
    text: '서비스의 비주얼 방향성을 잡고, 기획과 개발 사이에서 조율하며 하나의 목표로 달렸던 밀도 높은 경험이었습니다. 실무 디자이너로 성장하고 싶다면 추천합니다.',
  },
  {
    id: 14,
    name: '정서연',
    cohort: '17기 · 리서치팀',
    text: '막연했던 서비스 구조를 IA와 플로우차트로 체계화하면서 실무적인 기획 프로세스를 깊이 있게 경험했습니다. 몰입할 수 있었던 최고의 학기였어요.',
  },
  {
    id: 15,
    name: '이근진',
    cohort: '17기 · 리서치팀',
    text: '매주 이어지는 팀원들과의 피드백 세션 덕분에 제 기획의 빈틈을 찾고 발전시킬 수 있었습니다. 열정 넘치는 사람들과 함께해서 크게 성장할 수 있었던 것 같습니다.',
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
