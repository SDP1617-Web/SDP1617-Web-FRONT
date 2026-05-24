import type { CSSProperties } from 'react'

interface TalentCardProps {
  title: string
  description: string
}

const cardStyle: CSSProperties = {
  width: '1193.66px',
  height: '262px',
  backgroundColor: '#0A0A0A',
  borderRadius: '40px',
  display: 'flex',
  alignItems: 'flex-end',
  padding: '40px',
}

const innerStyle: CSSProperties = {
  display: 'flex',
  width: '1113.66px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
}

const TalentCard = ({ title, description }: TalentCardProps) => {
  return (
    <div style={cardStyle}>
      <div style={innerStyle}>
        <p className="h2 text-white">{title}</p>
        <p
          className="h3-sb"
          style={{ color: 'var(--color-sdp-grey-400)', whiteSpace: 'pre-line' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default TalentCard
