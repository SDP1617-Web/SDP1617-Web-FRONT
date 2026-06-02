import { cn } from '@/lib/utils'
import { Button } from './Button'

interface LayoutInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  num?: string
  subTitle?: string
  title?: string
  maxLength?: number
}

export const LayoutInput = ({
  num = '1',
  subTitle,
  title,
  maxLength = 500,
  className,
  value,
  onChange,
  ...props
}: LayoutInputProps) => {
  const currentLength = typeof value === 'string' ? value.length : 0

  return (
    <div
      className={cn(
        'flex w-full flex-col items-start gap-[28px] text-left',
        className
      )}
    >
      <div className="item flex items-start gap-[22px] self-stretch">
        <Button variant="v4">{num}</Button>
        <div className="flex flex-1 flex-col gap-1">
          {title && (
            <h3 className="h3 text-sdp-grey-800 leading-9 font-semibold">
              {title}
            </h3>
          )}
          {subTitle && (
            <h4 className="h4 text-sdp-grey-700 font-medium">{subTitle}</h4>
          )}
        </div>
      </div>

      <div className="border-sdp-grey-300 focus-within:border-sdp-grey-400 flex h-[290px] w-full flex-col items-end gap-[18px] rounded-[20px] border-2 bg-transparent p-[24px] transition-all">
        <textarea
          className="h4 text-sdp-grey-900 placeholder:text-sdp-grey-500 h-[180px] shrink-0 resize-none self-stretch border-none bg-transparent outline-none"
          maxLength={maxLength}
          value={value}
          onChange={onChange}
          {...props}
        />
        <div className="self-stretch text-right text-[22px] leading-[30px]">
          <span className="text-sdp-grey-800">{currentLength}</span>
          <span className="text-sdp-grey-400"> / {maxLength}</span>
        </div>
      </div>
    </div>
  )
}

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
  suffix?: React.ReactNode
}

export const BaseInput = ({
  className,
  value,
  onChange,
  onClear,
  placeholder,
  suffix,
  ...props
}: BaseInputProps) => {
  const hasValue = typeof value === 'string' && value.length > 0

  return (
    <div
      className={cn(
        'flex h-[66px] w-full items-center justify-between self-stretch rounded-[20px] border-2 bg-transparent px-[23.881px] pt-[27.861px] pb-[29.851px] transition-all',
        hasValue ? 'border-sdp-grey-400' : 'border-sdp-grey-300',
        className
      )}
    >
      <input
        type={props.type ?? 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'h4 text-sdp-grey-900 placeholder:text-sdp-grey-400 flex flex-1 flex-col items-start border-none bg-transparent font-semibold outline-none'
        )}
        {...props}
      />
      {hasValue && onClear && (
        <button
          type="button"
          onClick={onClear}
          aria-label="입력값 지우기"
          className="flex h-[20.947px] w-[20.947px] shrink-0 items-center justify-center transition-transform active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <line
              x1="2.48453"
              y1="2.16406"
              x2="17.6885"
              y2="17.3681"
              stroke="#E5E5E5"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="1"
              y1="-1"
              x2="22.5017"
              y2="-1"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 19.875 2.16406)"
              stroke="#E5E5E5"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
      {suffix}
    </div>
  )
}
