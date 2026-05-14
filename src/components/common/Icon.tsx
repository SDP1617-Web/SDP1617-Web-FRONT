import { cn } from '@/lib/utils'
import { DOT_DATA } from '@/constants/iconData'
import CalendarIcon from '@/assets/icons/calendar.svg'
import CloseIcon from '@/assets/icons/close.svg'

const COLORS = {
  active: 'var(--color-sdp-main-primary)',
  off: 'var(--color-sdp-grey-800)',
  close: 'var(--color-sdp-grey-200)',
  calendar: 'var(--color-sdp-grey-300)',
} as const

const ICON_CONFIG = {
  pattern1: { size: 100, viewBox: '0 0 100 102' },
  pattern2: { size: 100, viewBox: '0 0 100 102' },
  pattern3: { size: 100, viewBox: '0 0 101 102' },
  close: { size: 21, viewBox: '0 0 21 21', Component: CloseIcon },
  calendar: { size: 30, viewBox: '0 0 30 30', Component: CalendarIcon },
} as const

type IconName = keyof typeof ICON_CONFIG

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  level?: number
}

export const Icon = ({ name, level = 0, className, ...props }: IconProps) => {
  const config = ICON_CONFIG[name]

  // 3. 정적 아이콘 (Close, Calendar) 렌더링
  if ('Component' in config) {
    const { Component, size } = config
    const color = name === 'close' ? COLORS.close : COLORS.calendar
    return (
      <Component
        width={size}
        height={size}
        style={{ color }}
        className={cn('shrink-0', className)}
        {...props}
      />
    )
  }

  // 4. 패턴 아이콘(점) 렌더링 로직
  const renderDots = () => {
    const dots = DOT_DATA[name] || []
    return dots.map((dot, index) => {
      const isOn = index < level
      const fill = isOn ? COLORS.active : COLORS.off

      if (name === 'pattern3') {
        return (
          <circle
            key={index}
            cx={dot.cx}
            cy={dot.cy}
            r="6.08"
            fill={fill}
            className="transition-colors duration-300"
          />
        )
      }

      return (
        <ellipse
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          rx="6.2"
          ry="6.2"
          transform={dot.r ? `rotate(${dot.r} ${dot.cx} ${dot.cy})` : undefined}
          fill={fill}
          className="transition-colors duration-300"
          style={{
            filter: isOn ? `drop-shadow(0 0 3px ${COLORS.active})` : 'none',
          }}
        />
      )
    })
  }

  return (
    <svg
      viewBox={config.viewBox}
      width={config.size}
      height={config.size}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      {...props}
    >
      {renderDots()}
    </svg>
  )
}
