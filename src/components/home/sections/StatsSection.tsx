'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { StatCard } from '@/components/common/Card'

const STATS_CARDS = [
  { title: '몇 기수?', value: '17', unit: '기' },
  { title: '환경을 위한 프로젝트', value: '545', unit: '개' },
  { title: '관심 지원자', value: '340', unit: '명' },
  { title: '몇 기수?', value: '17', unit: '기' },
]

// 초반 우다다다 → 마지막 한두 개 천천히 (강한 감속)
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

const DURATION = 2000 // 카운트업 시간(ms)

function AnimatedStatCard({
  title,
  value,
  unit,
  run,
}: {
  title: string
  value: string
  unit: string
  run: boolean
}) {
  const target = Number(value)
  const isNumeric = Number.isFinite(target)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    // 화면 밖이면 0으로 리셋하고 대기 (다시 들어오면 처음부터)
    if (!run || !isNumeric) {
      setDisplay(0)
      return
    }

    let raf = 0
    let start: number | null = null

    const tick = (now: number) => {
      if (start === null) start = now
      const t = Math.min((now - start) / DURATION, 1)
      setDisplay(Math.round(easeOutExpo(t) * target))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, isNumeric])

  return (
    <StatCard
      title={title}
      value={isNumeric ? String(display) : value}
      unit={unit}
    />
  )
}

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, {
    margin: '-25% 0px -25% 0px',
  })

  return (
    <section
      style={{ marginTop: '120px', marginBottom: '121px' }}
      className="flex justify-center"
    >
      <div style={{ width: '1202px' }} className="flex flex-col">
        {/* 타이틀 */}
        <p className="h2" style={{ color: 'var(--color-sdp-grey-900)' }}>
          성장하는 학회
        </p>

        {/* 카드 2x2 그리드 */}
        <div
          ref={ref}
          style={{ marginTop: '36px', gap: '25px' }}
          className="grid grid-cols-2"
        >
          {STATS_CARDS.map((card, i) => (
            <AnimatedStatCard
              key={i}
              title={card.title}
              value={card.value}
              unit={card.unit}
              run={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
