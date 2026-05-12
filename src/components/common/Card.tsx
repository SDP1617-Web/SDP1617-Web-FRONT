import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  category?: string
  subTitle?: string
  description?: string
  date?: string
  footerText?: string
  className?: string
  imageUrl?: string
  isActive?: boolean
  onClick?: () => void
  value?: string // Card5용
  unit?: string // Card5용
}

const CategoryChip = ({
  text,
  colorClass = 'text-sdp-grey-600',
}: {
  text: string
  colorClass?: string
}) => (
  <div className="bg-sdp-grey-100 flex items-start rounded-full px-[10.667px] py-[5.333px]">
    <span className={cn('body2 font-normal', colorClass)}>{text}</span>
  </div>
)

// Card 1: 메인 다크 카드
export const Card1 = ({ title, subTitle, className }: CardProps) => (
  <div
    className={cn(
      'border-sdp-grey-800 relative flex h-[262px] w-[1193.66px] flex-col justify-end overflow-hidden rounded-[40px] border p-[40px]',
      'bg-linear-to-b from-transparent via-[rgba(10,10,10,0.2)] to-[#0A0A0A]',
      className
    )}
  >
    <div className="flex flex-col gap-4">
      <h3 className="text-[26px] leading-[38px] font-semibold text-white">
        {subTitle}
      </h3>
      <h2 className="h2 text-sdp-grey-400">{title}</h2>
    </div>
  </div>
)

// Card 2: 상세 정보 화이트 카드
export const Card2 = ({
  title,
  description,
  date,
  footerText,
  className,
}: CardProps) => (
  <div
    className={cn(
      'border-sdp-grey-100 flex h-[280px] w-[1055px] flex-col gap-[21.333px] rounded-[26.667px] border-[1.333px] bg-white p-[32px_42.667px]',
      className
    )}
  >
    <div className="flex flex-col gap-2">
      <h1 className="body1 text-sdp-grey-900">{title}</h1>
      <div className="h-[0.8px] bg-[#E8E8E8]" />
      <p className="body2 text-sdp-grey-600 line-clamp-2">{description}</p>
    </div>
    <div className="mt-auto flex items-center gap-4">
      <CategoryChip text={date || ''} colorClass="text-sdp-grey-500" />
      {footerText && (
        <span className="body2 text-sdp-grey-500">{footerText}</span>
      )}
    </div>
  </div>
)

// Card 3: 세로형 포인트 카드
export const Card3 = ({ title, description, className }: CardProps) => (
  <div
    className={cn(
      'bg-sdp-grey-800 flex h-[498px] w-[381.66px] flex-col justify-end gap-4 rounded-[40px] p-[40px]',
      className
    )}
  >
    <h2 className="h2 text-sdp-grey-50">{title}</h2>
    <p className="body1 text-sdp-grey-400">{description}</p>
  </div>
)

// Card 4: 프로젝트 이미지 썸네일 카드
export const Card4 = ({
  title,
  description,
  category,
  imageUrl,
  className,
  isActive,
  onClick,
}: CardProps) => (
  <div
    onClick={onClick}
    className={cn(
      'flex h-[467px] w-[576px] cursor-pointer flex-col overflow-hidden rounded-[21.333px] bg-white transition-all',
      isActive ? 'shadow-[0_0_28px_0_#CCFB55]' : 'shadow-none',
      className
    )}
  >
    <div
      className="h-[293.333px] bg-[#CCFB55] bg-cover bg-center"
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
    />
    <div className="flex h-[174px] flex-col justify-center gap-[13.333px] p-[26.667px_32px]">
      {category && <CategoryChip text={category} />}
      <div className="flex flex-col gap-3">
        <h3 className="text-sdp-grey-900 text-[26px] leading-[38px] font-semibold">
          {title}
        </h3>
        <p className="body2 text-sdp-grey-600">{description}</p>
      </div>
    </div>
  </div>
)

// Card 5: 수치/기수 카드
export const Card5 = ({ title, value, unit, className }: CardProps) => (
  <div
    className={cn(
      'bg-sdp-grey-900 relative flex w-[588px] items-end justify-between overflow-hidden rounded-[8px] p-[36px_48px]',
      className
    )}
  >
    <div
      className="absolute right-0 bottom-0 opacity-100 mix-blend-color-dodge"
      style={{
        width: '342.17px',
        height: '123.568px',
        backgroundImage: 'url("/images/card5-bg.png")',
        backgroundPosition: '0.253px -133.821px',
        backgroundSize: '147.628% 543.758%',
      }}
    />
    <h3 className="z-10 w-[252px] text-[26px] leading-[36px] font-bold text-white">
      {title}
    </h3>
    <div className="text-sdp-main-primary z-10 flex items-end gap-[7px] font-bold">
      <span className="text-[72px] leading-[80px]">{value}</span>
      <span className="mb-[6px] text-[32px] leading-[42px]">{unit}</span>
    </div>
  </div>
)
