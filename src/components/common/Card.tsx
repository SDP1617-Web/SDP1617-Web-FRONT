import { cn } from '@/lib/utils'

interface CardProps {
  title?: string
  category?: string
  subTitle?: string
  description?: string
  date?: string
  footerText?: string
  className?: string
  imageUrl?: string
  isActive?: boolean
  onClick?: () => void
  value?: string
  unit?: string
  sessions?: string[]
  goals?: string[]
  schedule?: string
  support?: string
  period?: string
  variant?: 'highlight' | 'default'
}

const CategoryChip = ({
  text,
  colorClass = 'text-sdp-grey-600',
}: {
  text: string
  colorClass?: string
}) => (
  <div className="bg-sdp-grey-100 flex w-fit items-center justify-center rounded-full px-3 py-1.5">
    <span className={cn('body2 font-normal', colorClass)}>{text}</span>
  </div>
)

const BulletItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <span className="bg-sdp-main-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
    <span className="caption text-white/70">{text}</span>
  </li>
)

// 1. HeroBannerCard
export const HeroBannerCard = ({ title, subTitle, className }: CardProps) => (
  <div
    className={cn(
      'group border-sdp-grey-800 relative flex h-[262px] w-[1194px] cursor-pointer flex-col justify-end overflow-hidden rounded-[40px] border p-10 transition-all duration-300',
      'bg-[#0A0A0A]',
      'hover:bg-sdp-grey-900 hover:shadow-[9px_10px_11px_0_rgba(0,0,0,0.25)]',
      className
    )}
  >
    <div className="flex flex-col gap-4">
      {subTitle && <h2 className="h2 text-white">{subTitle}</h2>}
      {title && (
        <p className="text-sdp-grey-400 text-[26px] leading-[38px] font-semibold whitespace-pre-line transition-all duration-300 group-hover:leading-[160%] group-hover:font-normal">
          {title}
        </p>
      )}
    </div>
  </div>
)

// 2. FeatureCard (세로형 다크 포인트)
export const FeatureCard = ({ title, description, className }: CardProps) => (
  <div
    className={cn(
      'group bg-sdp-grey-800 flex h-[498px] w-[381.66px] cursor-pointer flex-col justify-end overflow-hidden rounded-[40px] p-10 text-left',
      'transition-all duration-500 ease-in-out',
      'hover:w-[756px] hover:bg-linear-to-t hover:from-[#0A0A0A] hover:via-[#0A0A0A]/20 hover:to-transparent',
      className
    )}
  >
    <div className="flex flex-col gap-4 self-stretch">
      {title && (
        <h2 className="text-sdp-grey-50 self-stretch text-[32px] leading-[42px] font-bold">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-sdp-grey-500 w-[301.66px] self-stretch text-[20px] leading-[28px] font-normal transition-all duration-500">
          {description}
        </p>
      )}
    </div>
  </div>
)

// 3. ProjectCard
export const ProjectCard = ({
  title,
  description,
  category,
  imageUrl,
  className,
  isActive,
  onClick,
}: CardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'group flex h-auto min-h-[467px] w-full cursor-pointer flex-col overflow-hidden rounded-[21px] bg-white text-left transition-all',
      isActive
        ? 'shadow-[0_0_28px_0_rgba(204,251,85,0.5)]'
        : 'shadow-none hover:shadow-lg',
      className
    )}
  >
    <div
      className="bg-sdp-main-primary h-[293px] w-full shrink-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
    />
    <div className="flex flex-1 flex-col justify-center gap-3.5 p-7 md:p-8">
      {category && <CategoryChip text={category} />}
      <div className="flex flex-col gap-3">
        <h3 className="h3 text-sdp-grey-900 leading-tight">{title}</h3>
        <p className="body2 text-sdp-grey-600 line-clamp-1">{description}</p>
      </div>
    </div>
  </button>
)

// 4. StatCard (수치/기수)
export const StatCard = ({ title, value, unit, className }: CardProps) => (
  <div
    className={cn(
      'bg-sdp-grey-900 relative flex w-full max-w-[588px] items-end justify-between rounded-lg p-[36px_48px]',
      className
    )}
  >
    <div
      className="pointer-events-none absolute right-[0.002px] bottom-0 rounded-lg mix-blend-color-dodge"
      style={{
        width: '342.17px',
        height: '123.568px',
        backgroundImage: 'url("/images/card5-bg.png")',
        backgroundPosition: '0.253px -133.821px',
        backgroundSize: '147.628% 543.758%',
        backgroundRepeat: 'no-repeat',
      }}
    />

    {title && (
      <h3
        className="z-10 w-[252px] shrink-0 text-left text-[26px] leading-[36px] text-white"
        style={{ fontWeight: 700 }}
      >
        {title}
      </h3>
    )}

    <div className="text-sdp-main-primary z-10 flex h-[69px] w-[209px] items-baseline justify-end gap-[7px]">
      <span
        className="text-right text-[72px] leading-[80px]"
        style={{ fontWeight: 700 }}
      >
        {value}
      </span>

      <span
        className="w-[28px] text-center text-[32px] leading-[42px]"
        style={{ fontWeight: 700 }}
      >
        {unit}
      </span>
    </div>
  </div>
)
// 5. ExternalCard (대외협력)
export const ExternalCard = ({
  title,
  subTitle,
  isActive = false,
  onClick,
  className,
}: CardProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group bg-sdp-grey-900 flex h-[325px] w-[384px] flex-col items-start justify-start overflow-hidden rounded-[20px] p-[48px_42px] text-left transition-all',
        className
      )}
    >
      <div className="flex flex-col gap-0">
        {title && (
          <span
            className={cn(
              'text-[48px] leading-none font-bold transition-colors duration-300',
              isActive
                ? 'text-sdp-main-primary'
                : 'text-sdp-grey-500 group-hover:text-sdp-main-primary'
            )}
          >
            {title}
          </span>
        )}

        {subTitle && (
          <span
            className={cn(
              'text-[32px] leading-none font-bold transition-colors duration-300',
              isActive
                ? 'text-sdp-main-primary'
                : 'text-sdp-grey-500 group-hover:text-sdp-main-primary'
            )}
          >
            {subTitle}
          </span>
        )}
      </div>
    </button>
  )
}
// 6. 팀 엠블럼 카드
export const EmblemCard = ({ title, description, className }: CardProps) => (
  <div
    className={cn(
      'group flex w-[383px] flex-col items-start gap-[27px] transition-all duration-300 ease-out',
      className
    )}
  >
    <div
      className={cn(
        'bg-sdp-grey-600 flex h-[325px] w-full items-center justify-center self-stretch rounded-[20px] px-[31px]',
        'transition-all duration-300 ease-out',

        'group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_-10px_rgba(204,251,85,0.3)]',

        'active:scale-[0.98]'
      )}
    >
      {title && (
        <h2 className="text-sdp-main-primary w-[321px] text-center text-[48px] leading-[73.019px] font-bold transition-colors">
          {title}
        </h2>
      )}
    </div>

    {description && (
      <p className="text-sdp-grey-200 self-stretch text-[22px] leading-[160%] font-normal tracking-[-0.55px] transition-transform duration-300 group-hover:-translate-y-1">
        {description}
      </p>
    )}
  </div>
)

// 7. ReviewCard (후기/텍스트)
export const ReviewCard = ({
  name,
  cohort,
  text,
  className,
}: CardProps & { name?: string; cohort?: string; text?: string }) => (
  <div
    className={cn(
      'flex h-[246px] w-[378px] flex-col items-start gap-6 self-stretch bg-white',
      'border-sdp-grey-100 rounded-[21.333px] border-[1.333px]',
      'p-[20.333px_26.667px_21.333px]',
      className
    )}
  >
    <div className="flex items-center gap-4 self-stretch">
      <div className="flex flex-col">
        {name && (
          <p className="text-sdp-grey-800 text-[18px] leading-[26.667px] font-semibold">
            {name}
          </p>
        )}

        {cohort && (
          <p className="text-sdp-grey-500 text-[14px] leading-[21.333px] font-normal">
            {cohort}
          </p>
        )}
      </div>
    </div>
    {text && (
      <p className="text-sdp-grey-900 line-clamp-4 w-full self-stretch text-[18px] leading-[30.333px] font-normal">
        {text}
      </p>
    )}
  </div>
)

// 8. QuarterCard (분기별 프로그램)
export const QuarterCard = ({
  period,
  sessions = [],
  goals = [],
  support,
  schedule,
  className,
  onClick,
}: CardProps) => (
  <div
    className={cn(
      'flex min-h-[280px] w-full max-w-[1055px] flex-col items-start bg-white',
      'border-sdp-grey-100 rounded-[26.667px] border-[1.333px]',
      'gap-[21.333px] p-[32px_42.667px]',
      className
    )}
  >
    <div className="flex w-full items-start gap-[104px] self-stretch">
      <div className="flex flex-1 flex-col items-start gap-2">
        <p className="text-sdp-grey-600 text-[18px] leading-[26px] font-normal">
          세션 구성
        </p>
        <div className="text-sdp-grey-900 text-[20px] leading-[28px] font-normal">
          {sessions.join(', ')}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-start gap-2">
        <p className="text-sdp-grey-600 text-[18px] leading-[26px] font-normal">
          이번 주 목표
        </p>
        <div className="text-sdp-grey-900 text-[20px] leading-[28px] font-normal">
          {goals.join(', ')}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-start gap-2">
        <p className="text-sdp-grey-600 text-[18px] leading-[26px] font-normal">
          지원
        </p>
        <div className="text-sdp-grey-900 text-[20px] leading-[28px] font-normal">
          {support}
        </div>
      </div>
    </div>

    <div className="h-[0.8px] w-full self-stretch bg-[#E8E8E8]" />

    {/* 하단 영역 */}
    <div className="flex w-full items-center justify-between self-stretch">
      <div className="flex items-center gap-4">
        <div className="rounded-[44739200px] bg-[#F3F3F3] px-[10.667px] py-[5.333px]">
          <span className="text-sdp-grey-500 text-[18px] leading-[26px] font-normal">
            {period}
          </span>
        </div>

        {schedule && (
          <p className="text-sdp-grey-500 text-[18px] leading-[26px] font-normal">
            {schedule}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={onClick}
        className="text-sdp-grey-600 text-[18px] leading-[26px] font-normal hover:underline"
      >
        상세보기
      </button>
    </div>
  </div>
)
