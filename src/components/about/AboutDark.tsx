import type { CSSProperties } from 'react'
import Image from 'next/image'

const sectionStyle: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '2376px',
  backgroundColor: 'var(--color-sdp-grey-900)',
}

const timelineStyle: CSSProperties = {
  position: 'absolute',
  top: '411px',
  left: '390px',
}

const eclipse1Style: CSSProperties = {
  position: 'absolute',
  top: '383px',
  left: '364px',
}

const eclipse2Style: CSSProperties = {
  position: 'absolute',
  top: '663px',
  left: '364px',
}

const eclipse3Style: CSSProperties = {
  position: 'absolute',
  top: '1046px',
  left: '364px',
}

const yearStyle: CSSProperties = {
  position: 'absolute',
  left: '444px',
  color: 'var(--base-white, #FFF)',
  fontFamily: '"Pretendard Variable"',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '42px',
  opacity: 0.7,
}

const bodyStyle: CSSProperties = {
  position: 'absolute',
  left: '444px',
  color: 'var(--base-white, #FFF)',
  fontFamily: '"Pretendard Variable"',
  fontSize: '32px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: '42px',
  whiteSpace: 'pre-line',
}

const AboutDark = () => {
  return (
    <section style={sectionStyle}>
      <Image
        src="/timeline-bar.svg"
        alt=""
        width={4.5}
        height={881}
        style={timelineStyle}
      />
      <Image
        src="/timeline-eclipse1.svg"
        alt=""
        width={56}
        height={56}
        style={eclipse1Style}
      />
      <Image
        src="/timeline-eclipse2.svg"
        alt=""
        width={56}
        height={56}
        style={eclipse2Style}
      />
      <Image
        src="/timeline-eclipse3.svg"
        alt=""
        width={56}
        height={56}
        style={eclipse3Style}
      />
      <span style={{ ...yearStyle, top: '390px' }}>2025</span>
      <span style={{ ...yearStyle, top: '670px' }}>2024</span>
      <span style={{ ...yearStyle, top: '1053px', opacity: 0.3 }}>2023</span>

      <p style={{ ...bodyStyle, top: '475px' }}>
        {'한국그린캠퍼스협회 그린리더 다양성 프로그램\n기후에너지환경부 장관상'}
      </p>
      <p style={{ ...bodyStyle, top: '755px' }}>
        {'한국그린캠퍼스협회 그린리더 양성 프로그램\n이사장상'}
      </p>
      <p style={{ ...bodyStyle, top: '891px' }}>
        {'연세대학교 고등교육혁신원 IHEI Festa\n최우수상'}
      </p>
    </section>
  )
}

export default AboutDark
