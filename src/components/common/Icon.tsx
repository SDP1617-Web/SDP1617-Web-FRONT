import { cn } from '@/lib/utils'

const COLORS = {
  active: 'var(--color-sdp-main-primary)',
  off: 'var(--color-sdp-grey-800)',
  close: 'var(--color-sdp-grey-200)',
  calendar: 'var(--color-sdp-grey-300)',
} as const

const ICON_SIZES = {
  pattern1: 100,
  pattern2: 100,
  pattern3: 100,
  close: 21,
  calendar: 30,
} as const

// 도트 타입 정의 (r은 선택 사항)
interface Dot {
  cx: number
  cy: number
  r?: number // rotation angle
}

// 패턴 아이콘용 개별 도트 좌표 데이터

const DOT_DATA: Record<string, Dot[]> = {
  pattern1: [
    { cx: 51.0874, cy: 6.20366 },
    { cx: 51.0874, cy: 28.6011 },
    { cx: 6.29055, cy: 50.9996 },
    { cx: 51.0874, cy: 51.0005 },
    { cx: 93.5688, cy: 51.1724 },
    { cx: 51.0874, cy: 73.398 },
    { cx: 28.689, cy: 73.398 },
    { cx: 71.2583, cy: 73.4839 },
    { cx: 51.0874, cy: 95.7964 },
  ],
  pattern2: [
    { cx: 17.4356, cy: 81.8572, r: 45 },
    { cx: 33.2715, cy: 66.0203, r: 45 },
    { cx: 49.1113, cy: 50.1814, r: 45 },
    { cx: 80.7871, cy: 50.1814, r: 45 },

    { cx: 80.7871, cy: 81.8581, r: 45 },
    { cx: 64.9492, cy: 34.3435, r: 45 },
    { cx: 50.7483, cy: 20.0205, r: 135 },
    { cx: 19.1936, cy: 20.0205, r: 135 },
    { cx: 80.7871, cy: 18.5056, r: 45 },
  ],
  pattern3: [
    { cx: 48.108, cy: 50.502 },
    { cx: 48.108, cy: 28.532 },
    { cx: 48.108, cy: 72.466 },
    { cx: 72.185, cy: 50.502 },
    { cx: 28.222, cy: 50.502 },
    { cx: 48.108, cy: 6.563 },
    { cx: 48.108, cy: 94.437 },
    { cx: 94.169, cy: 50.502 },
    { cx: 6.239, cy: 50.502 },
  ],
}

type IconName = keyof typeof ICON_SIZES

interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: IconName
  level?: number // 0~9
}

export const Icon = ({ name, level = 0, className, ...props }: IconProps) => {
  const viewBoxes: Record<IconName, string> = {
    pattern1: '0 0 100 102',
    pattern2: '0 0 100 102',
    pattern3: '0 0 101 102',
    close: '0 0 21 21',
    calendar: '0 0 30 30',
  }

  const renderStaticIcon = () => {
    if (name === 'close') {
      return (
        <>
          <line
            x1="2.48453"
            y1="2.16406"
            x2="17.6885"
            y2="17.3681"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="-1"
            x2="22.5017"
            y2="-1"
            transform="matrix(-0.707107 0.707107 0.707107 0.707107 19.875 2.16406)"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )
    }
    if (name === 'calendar') {
      return (
        <path
          d="M23.75 5H21.25V3.75C21.25 3.41848 21.1183 3.10054 20.8839 2.86612C20.6495 2.6317 20.3315 2.5 20 2.5C19.6685 2.5 19.3505 2.6317 19.1161 2.86612C18.8817 3.10054 18.75 3.41848 18.75 3.75V5H11.25V3.75C11.25 3.41848 11.1183 3.10054 10.8839 2.86612C10.6495 2.6317 10.3315 2.5 10 2.5C9.66848 2.5 9.35054 2.6317 9.11612 2.86612C8.8817 3.10054 8.75 3.41848 8.75 3.75V5H6.25C5.25544 5 4.30161 5.39509 3.59835 6.09835C2.89509 6.80161 2.5 7.75544 2.5 8.75V23.75C2.5 24.7446 2.89509 25.6984 3.59835 26.4017C4.30161 27.1049 5.25544 27.5 6.25 27.5H23.75C24.7446 27.5 25.6984 27.1049 26.4017 26.4017C27.1049 25.6984 27.5 24.7446 27.5 23.75V8.75C27.5 7.75544 27.1049 6.80161 26.4017 6.09835C25.6984 5.39509 24.7446 5 23.75 5ZM25 23.75C25 24.0815 24.8683 24.3995 24.6339 24.6339C24.3995 24.8683 24.0815 25 23.75 25H6.25C5.91848 25 5.60054 24.8683 5.36612 24.6339C5.1317 24.3995 5 24.0815 5 23.75V15H25V23.75ZM25 12.5H5V8.75C5 8.41848 5.1317 8.10054 5.36612 7.86612C5.60054 7.6317 5.91848 7.5 6.25 7.5H8.75V8.75C8.75 9.08152 8.8817 9.39946 9.11612 9.63388C9.35054 9.8683 9.66848 10 10 10C10.3315 10 10.6495 9.8683 10.8839 9.63388C11.1183 9.39946 11.25 9.08152 11.25 8.75V7.5H18.75V8.75C18.75 9.08152 18.8817 9.39946 19.1161 9.63388C19.3505 9.8683 19.6685 10 20 10C20.3315 10 20.6495 9.8683 20.8839 9.63388C21.1183 9.39946 21.25 9.08152 21.25 8.75V7.5H23.75C24.0815 7.5 24.3995 7.6317 24.6339 7.86612C24.8683 8.10054 25 8.41848 25 8.75V12.5Z"
          fill="currentColor"
        />
      )
    }
    return null
  }

  const renderPatternIcon = () => {
    // 타입 캐스팅으로 에러 방지
    const dots = DOT_DATA[name as string] || []

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
            filter: isOn
              ? 'drop-shadow(0 0 3px var(--color-sdp-main-primary))'
              : 'none',
          }}
        />
      )
    })
  }

  const staticColor =
    name === 'close'
      ? COLORS.close
      : name === 'calendar'
        ? COLORS.calendar
        : 'currentColor'

  return (
    <svg
      viewBox={viewBoxes[name]}
      width={ICON_SIZES[name]}
      height={ICON_SIZES[name]}
      fill="none"
      style={{ color: staticColor }}
      className={cn('shrink-0', className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {name.startsWith('pattern') ? renderPatternIcon() : renderStaticIcon()}
    </svg>
  )
}
