import type { CSSProperties } from 'react'

interface DepartmentCardProps {
  korean: string
  english: string
  isActive?: boolean
}

const cardStyle: CSSProperties = {
  display: 'flex',
  width: '384px',
  height: '325px',
  padding: '48px 172px 187px 42px',
  alignItems: 'center',
  borderRadius: '20px',
  backgroundColor: 'var(--color-sdp-grey-900)',
  flexShrink: 0,
}

const innerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}

const DepartmentCard = ({
  korean,
  english,
  isActive = false,
}: DepartmentCardProps) => {
  const color = isActive
    ? 'var(--color-sdp-main-primary)'
    : 'var(--color-sdp-grey-500)'

  return (
    <div style={cardStyle}>
      <div style={innerStyle}>
        <p className="h1" style={{ color }}>
          {korean}
        </p>
        <p className="h2" style={{ color }}>
          {english}
        </p>
      </div>
    </div>
  )
}

export default DepartmentCard
