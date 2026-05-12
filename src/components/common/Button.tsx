import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'black' | 'gray'
  size?: 'h80' | 'h66' | 'h53' | 'fit' | 'none'
  isActive?: boolean
  width?: string
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'h66',
  isActive = false,
  width,
  className,
  ...props
}: ButtonProps) => {
  // 공통 스타일
  const baseStyles =
    'inline-flex items-center justify-center transition-all shrink-0 active:scale-95 disabled:opacity-50'

  // Variant 스타일
  const variants = {
    primary:
      'bg-sdp-main-primary text-sdp-grey-900 rounded-[20px] font-semibold',
    secondary:
      'bg-sdp-main-secondary text-sdp-grey-900 rounded-[8px] font-semibold',
    black: 'bg-sdp-grey-900 text-sdp-main-primary rounded-full font-bold',
    gray: 'bg-sdp-grey-100 text-sdp-grey-700 rounded-[20px] font-medium',
  }

  // Size 스타일
  const sizes = {
    h80: 'h-[80px] h2 px-[32px] gap-[24px]',
    h66: 'h-[66px] h4 px-[24px]',
    h53: 'h-[53px] body1 px-[16px]',
    fit: 'py-[15.92px] px-[31.841px] text-[24px]',
    none: '',
  }

  // width가 'full'인 경우에만 Tailwind 클래스를 쓰고, 나머지는 인라인 스타일로 넘김
  const isFullWidth = width === 'full'

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        isFullWidth && 'w-full',
        className
      )}
      style={{
        width: width && !isFullWidth ? width : undefined,
      }}
      {...props}
    >
      {children}
    </button>
  )
}
