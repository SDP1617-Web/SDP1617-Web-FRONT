'use client'

import { useEffect, useRef, useState } from 'react'

const DESIGN_WIDTH = 1920

export default function ScaleWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const update = () => {
      if (!innerRef.current) return

      let s = window.innerWidth / DESIGN_WIDTH

      setScale(s)
      setHeight(innerRef.current.scrollHeight * s)
    }

    update()

    window.addEventListener('resize', update)

    const ro = new ResizeObserver(update)
    if (innerRef.current) ro.observe(innerRef.current)

    return () => {
      window.removeEventListener('resize', update)
      ro.disconnect()
    }
  }, [])

  return (
    <div style={{ height, overflow: 'hidden' }}>
      <div
        ref={innerRef}
        style={
          {
            width: DESIGN_WIDTH,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            '--sw-scale': scale,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  )
}
