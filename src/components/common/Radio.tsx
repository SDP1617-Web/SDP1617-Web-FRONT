import { cn } from '@/lib/utils'

interface RadioProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean
}

export const Radio = ({
  isActive,
  className,
  onClick,
  ...props
}: RadioProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all active:scale-95',

        isActive
          ? 'border-[var(--color-sdp-grey-600)]'
          : 'border-[var(--color-sdp-grey-400)]',
        'bg-transparent',
        className
      )}
      {...props}
    >
      {isActive && (
        <div
          className="rounded-full bg-[var(--color-sdp-grey-600)]"
          style={{
            width: '11.771px',
            height: '11.771px',
            borderRadius: '11.771px',
          }}
        />
      )}
    </button>
  )
}
