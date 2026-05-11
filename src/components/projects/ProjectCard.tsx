// app/project/components/ProjectCard.tsx

import type { CSSProperties } from 'react'

import Image from 'next/image'

type ProjectCardProps = {
  title: string
  description: string
  image: string
}

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div style={cardStyle}>
      {/* 카드 이미지 */}
      <div className="relative h-[260px] w-full">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>

      {/* 카드 내용 */}
      <div style={contentStyle}>
        <p style={categoryStyle}>프로젝트</p>

        <h3 style={titleStyle}>{title}</h3>

        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  )
}

const cardStyle: CSSProperties = {
  overflow: 'hidden',
  borderRadius: '28px',
  backgroundColor: '#FFFFFF',
}

const contentStyle: CSSProperties = {
  padding: '24px',
}

const categoryStyle: CSSProperties = {
  marginBottom: '8px',
  fontSize: '14px',
  color: '#888888',
}

const titleStyle: CSSProperties = {
  marginBottom: '12px',
  fontFamily: 'Pretendard Variable',
  fontWeight: 700,
  fontSize: '32px',
  color: '#0A0A0A',
}

const descriptionStyle: CSSProperties = {
  fontSize: '14px',
  lineHeight: '24px',
  color: '#888888',
}
