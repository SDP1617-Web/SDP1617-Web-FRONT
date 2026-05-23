import type { CSSProperties } from 'react'
import Image from 'next/image'
import { EmblemCard } from '@/components/common/Card'

const sectionStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '2376px',
  backgroundColor: 'var(--color-sdp-grey-900)',
}

const at = (top: number, left: number): CSSProperties => ({
  position: 'absolute',
  top,
  left,
})

const eclipses = [383, 663, 1046]
const years = [
  { top: 390, label: '2025', opacity: 0.7 },
  { top: 670, label: '2024', opacity: 0.7 },
  { top: 1053, label: '2023', opacity: 0.3 },
]
const bodies = [
  {
    top: 475,
    text: '한국그린캠퍼스협회 그린리더 다양성 프로그램\n기후에너지환경부 장관상',
  },
  { top: 755, text: '한국그린캠퍼스협회 그린리더 양성 프로그램\n이사장상' },
  { top: 891, text: '연세대학교 고등교육혁신원 IHEI Festa\n최우수상' },
]
const emblems = [
  {
    title: '리서치팀 엠블럼',
    description:
      '어쩌고 저쩌고 리서치에 대한 설명들과 우리가 어떤팀이야!를 말하는 내용을 적어야하는 자리.',
  },
  {
    title: '디자인팀 엠블럼',
    description:
      '어쩌고 저쩌고 디자인에 대한 설명들과 우리가 어떤팀이야!를 말하는 내용을 적어야하는 자리.',
  },
  {
    title: '테크팀 엠블럼',
    description:
      '어쩌고 저쩌고 테크에 대한 설명들과 우리가 어떤팀이야!를 말하는 내용을 적어야하는 자리.',
  },
]

export default function AboutDark() {
  return (
    <section style={sectionStyle}>
      <Image
        src="/timeline-bar.svg"
        alt=""
        width={4.5}
        height={881}
        style={at(411, 390)}
      />

      {eclipses.map((top, i) => (
        <Image
          key={i}
          src={`/timeline-eclipse${i + 1}.svg`}
          alt=""
          width={56}
          height={56}
          style={at(top, 364)}
        />
      ))}

      {years.map(({ top, label, opacity }) => (
        <span
          key={label}
          className="h2"
          style={{ ...at(top, 444), color: '#FFF', opacity }}
        >
          {label}
        </span>
      ))}

      {bodies.map(({ top, text }) => (
        <p
          key={top}
          className="h2"
          style={{ ...at(top, 444), color: '#FFF', whiteSpace: 'pre-line' }}
        >
          {text}
        </p>
      ))}

      <span className="h1" style={{ ...at(1446, 362), color: '#FFF' }}>
        파트소개
      </span>

      <div style={{ ...at(1542, 362), display: 'flex', gap: '24px' }}>
        {emblems.map(({ title, description }) => (
          <EmblemCard key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  )
}
