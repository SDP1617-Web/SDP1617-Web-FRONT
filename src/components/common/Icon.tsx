import { cn } from '@/lib/utils'
import { DOT_DATA } from '@/constants/iconData'
import CalendarIcon from '@/assets/icons/calendar.svg'
import CloseIcon from '@/assets/icons/close.svg'
import EmailIcon from '@/assets/icons/email.svg'
import InstagramIcon from '@/assets/icons/instagram.svg'

const COLORS = {
  active: 'var(--color-sdp-main-primary)',
  off: 'var(--color-sdp-gray-800)',
  close: 'var(--color-sdp-gray-200)',
  calendar: 'var(--color-sdp-gray-300)',
  email: 'var(--color-sdp-gray-700)',
  instagram: 'var(--color-sdp-gray-700)',
} as const

const ICON_CONFIG = {
  pattern1: { size: 100, viewBox: '0 0 100 102' },
  pattern2: { size: 100, viewBox: '0 0 100 102' },
  pattern3: { size: 100, viewBox: '0 0 101 102' },
  close: { size: 21, viewBox: '0 0 21 21', Component: CloseIcon },
  calendar: { size: 30, viewBox: '0 0 30 30', Component: CalendarIcon },
  email: { size: 20, viewBox: '0 0 20 20 ', Component: EmailIcon },
  instagram: { size: 20, viewBox: '0 0 17 20', Component: InstagramIcon },
} as const

type IconName = keyof typeof ICON_CONFIG

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  level?: number
}

export const Icon = ({ name, level = 0, className, ...props }: IconProps) => {
  const config = ICON_CONFIG[name]

  // 정적 아이콘 (Close, Calendar) 렌더링
  if ('Component' in config) {
    const { Component, size } = config
    const colorClass =
      name === 'close'
        ? 'text-[var(--color-sdp-grey-200)]'
        : 'text-[var(--color-sdp-grey-300)]'
    return (
      <Component
        width={size}
        height={size}
        className={cn('shrink-0', colorClass, className)}
        {...props}
      />
    )
  }

  // 패턴 아이콘(점) 렌더링 로직
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
