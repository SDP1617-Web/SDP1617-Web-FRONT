'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Icon } from '@/components/common/Icon'

const GOALS = [
  { pattern: 'pattern1', label: '쓰레기를 줄이고' }, // ↓
  { pattern: 'pattern2', label: '발전' }, // ↗
  { pattern: 'pattern3', label: '삶을 더하고' }, // ✛
] as const

const DOTS_PER_ICON = 9

const GoalsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, {
    margin: '-30% 0px -30% 0px',
  })
  const [levels, setLevels] = useState<number[]>([0, 0, 0])

  useEffect(() => {
    // 화면에서 벗어나면 모두 끄고 대기 (다시 들어오면 처음부터 재생)
    if (!inView) {
      setLevels([0, 0, 0])
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []
    const DOT_GAP = 90 // 점 하나씩 켜지는 간격(ms)
    const ICON_GAP = 250 // 화살표 사이 추가 간격(ms)
    let delay = 300 // 진입 후 시작 지연

    GOALS.forEach((_, iconIdx) => {
      for (let d = 1; d <= DOTS_PER_ICON; d++) {
        timers.push(
          setTimeout(() => {
            setLevels((prev) => {
              const next = [...prev]
              next[iconIdx] = d
              return next
            })
          }, delay)
        )
        delay += DOT_GAP
      }
      delay += ICON_GAP
    })

    return () => timers.forEach(clearTimeout)
  }, [inView])

  return (
    <section
      style={{ marginTop: '271px', alignSelf: 'stretch' }}
      className="flex justify-center"
    >
      <div style={{ width: '1202px' }} className="flex flex-col">
        <p className="h2" style={{ color: 'var(--color-sdp-grey-900)' }}>
          SDP 목표는
        </p>

        <div
          ref={ref}
          style={{ marginTop: '36px', height: '337px' }}
          className="bg-sdp-grey-900 flex items-center justify-around rounded-[20px]"
        >
          {GOALS.map((goal, i) => (
            <div
              key={goal.pattern}
              className="flex flex-col items-center gap-[36px]"
            >
              <Icon
                name={goal.pattern}
                level={levels[i]}
                width={120}
                height={120}
                className="overflow-visible"
              />
              <p
                className="h3 font-bold"
                style={{ color: 'var(--color-sdp-main-primary)' }}
              >
                {goal.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GoalsSection
