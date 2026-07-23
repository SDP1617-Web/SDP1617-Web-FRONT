'use client'

import { useEffect, useRef } from 'react'

const DOT_COUNT = 10
const DOT_SIZE = 20 // px
const COLOR = '#CCFB55'
const LERP = 0.28 // 따라오는 속도 (클수록 머리가 빠름)
const IDLE_MS = 2000 // 이 시간 동안 안 움직이면 사라짐

const CursorTrail = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // 마우스 없는 터치 기기에서는 비활성화
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dots = dotsRef.current
    const mouse = { x: -100, y: -100 }
    const pos = Array.from({ length: DOT_COUNT }, () => ({ x: -100, y: -100 }))
    let started = false
    let idleTimer: ReturnType<typeof setTimeout> | null = null
    let raf = 0

    const setOpacity = (v: string) => {
      if (containerRef.current) containerRef.current.style.opacity = v
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (!started) {
        started = true
        pos.forEach((p) => {
          p.x = mouse.x
          p.y = mouse.y
        })
      }
      setOpacity('1') // 움직이면 나타남
      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(() => setOpacity('0'), IDLE_MS) // 2초 뒤 사라짐
    }

    const animate = () => {
      // 머리는 마우스를, 이후 원은 앞 원을 따라감 (체인 + 꼬리 지연)
      let x = mouse.x
      let y = mouse.y
      pos.forEach((p, i) => {
        p.x += (x - p.x) * LERP
        p.y += (y - p.y) * LERP
        const el = dots[i]
        if (el) {
          el.style.transform = `translate(${p.x - DOT_SIZE / 2}px, ${p.y - DOT_SIZE / 2}px)`
        }
        x = p.x
        y = p.y
      })
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      if (idleTimer) clearTimeout(idleTimer)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transition: 'opacity 0.4s ease',
      }}
    >
      {Array.from({ length: DOT_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) dotsRef.current[i] = el
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: DOT_SIZE,
            height: DOT_SIZE,
            borderRadius: '9999px',
            backgroundColor: COLOR,
            opacity: 1 - i / (DOT_COUNT - 1), // 머리 1.0 → 꼬리 0.0
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}

export default CursorTrail
