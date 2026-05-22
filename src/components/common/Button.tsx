import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6' | 'v7' | 'v8' | 'v9'
  isActive?: boolean
  width?: string
}

export const Button = ({
  children,
  variant = 'v1',
  isActive = false,
  width,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center transition-all shrink-0 active:scale-95 disabled:opacity-50'

  const variantStyles = {
    v1: isActive
      ? 'w-[129px] h-[53px] p-[8px_16px] rounded-[44739200px] bg-sdp-main-primary text-black body1'
      : 'w-[129px] h-[53px] p-[8px_16px] rounded-[44739200px] bg-sdp-grey-100 text-sdp-grey-400 body1',

    v2: isActive
      ? 'w-[301px] p-[17px] justify-between rounded-[8px] bg-sdp-main-secondary text-sdp-grey-900 h4'
      : 'w-[301px] p-[17px] justify-between rounded-[8px] bg-transparent text-sdp-grey-500 text-[22px] font-medium leading-[30px]',

    v3: isActive
      ? 'w-[384.667px] h-[66px] p-[12px_0] rounded-[12px] bg-sdp-main-primary text-sdp-grey-900 h4'
      : 'w-[384.667px] h-[66px] p-[12px_0] rounded-[12px] bg-sdp-grey-200 text-sdp-grey-900 h4',

    v4: 'w-[43px] h-[44px] rounded-[66774924px] bg-sdp-main-secondary text-black text-[26px] font-semibold leading-[38px]',

    v5: 'w-[304px] h-[80px] p-[24px_32px] gap-[24px] rounded-[999px] bg-sdp-grey-900 text-sdp-main-primary h2',

    v6: 'w-[152px] h-[71px] inline-flex justify-center items-center rounded-[20px] bg-sdp-grey-100 text-sdp-grey-700 text-[24px] font-medium leading-[39.801px] overflow-hidden whitespace-nowrap',

    v7: 'w-[87px] p-[10px] gap-[10px] rounded-[8px] bg-sdp-grey-900 text-white body2 font-semibold',

    v8: isActive
      ? 'w-[384.667px] h-[66px] p-[12.5px_0_13.5px_0] rounded-[20px] bg-sdp-main-primary text-sdp-grey-900 h4'
      : 'w-[384.667px] h-[66px] p-[12.5px_0_13.5px_0] rounded-[20px] bg-sdp-grey-200 text-sdp-grey-900 h4',

    v9: isActive
      ? 'w-[166px] h-[66px] p-[12.5px_0_13.5px_0] rounded-[20px] bg-sdp-main-primary text-sdp-grey-900 h4'
      : 'w-[166px] h-[66px] p-[12px_0] rounded-[20px] border-2 border-sdp-grey-300 text-sdp-grey-600 h4',
  }

  const isFullWidth = width === 'full'

  return (
    <button
      type={props.type ?? 'button'}
      className={cn(
        baseStyles,
        variantStyles[variant],
        isFullWidth && 'w-full!',
        className
      )}
      style={{
        width: width && !isFullWidth ? width : undefined,
      }}
      {...props}
    >
      {variant === 'v2' ? (
        <>
          <span className="text-left">{children}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M0.875 0.875L7.875 7.875L0.875 14.875"
              stroke={isActive ? '#141414' : '#737373'}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ) : (
        children
      )}
    </button>
  )
}
