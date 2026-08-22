import type { CSSProperties } from 'react'
import Image from 'next/image'
import { EmblemCard } from '@/components/common/Card'

const sectionStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '2376px',
  backgroundColor: 'var(--color-sdp-grey-900)',
  display: 'flex',
  justifyContent: 'center',
}

const canvasStyle: CSSProperties = {
  position: 'relative',
  width: '1920px',
  height: '2376px',
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
    title: '리서치팀',
    subTitle: 'Where Questions Become Direction',
    description:
      '지속가능성 관점에서 사회 문제를 발견하고, 데스크 리서치와 체계적인 기획으로 그 문제의 해결방안을 찾아가요.\n현업의 서비스 기획 프로세스를 따라가며, 새로운 툴과 방법론에 도전적으로 부딪히고 익혀나가요.',
  },
  {
    title: '디자인팀',
    subTitle: 'Branding to Experience',
    description:
      '지속가능한 미래를 위한 새로운 서비스의 브랜드 방향성을 구축하고, 사용자의 관점에서 서비스 경험과 화면을 설계하는 팀이에요.\n브랜딩과 UX/UI 디자인을 통해 서비스 전반의 디자인을 만들어가며, 기획·테크팀과 협업하여 실제 서비스로 발전시켜 나가요.',
  },
  {
    title: '테크팀',
    subTitle: 'Building Tomorrow with Code',
    description:
      '테크팀은 SDGs 기반 사회적 문제를 해결하기 위해, IT 웹·앱 서비스를 구현하는 개발 팀이에요.\n아이디어를 설계·개발·배포까지 연결하며 문제를 해결하는 개발자로 성장해요.',
  },
]

const AboutDark = () => {
  return (
    <section style={sectionStyle}>
      <div style={canvasStyle}>
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
          {emblems.map(({ title, subTitle, description }) => (
            <EmblemCard
              key={title}
              title={title}
              subTitle={subTitle}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutDark
