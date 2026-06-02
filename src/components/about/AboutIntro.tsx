import type { CSSProperties } from 'react'

const sectionStyle: CSSProperties = {
  width: '100%',
  height: '788px',
  background: 'linear-gradient(359deg, #141414 6.99%, #FFF 59.28%)',
  marginTop: '225.62px',
}

const AboutIntro = () => {
  return (
    <section style={sectionStyle} className="flex flex-col items-center">
      <p
        className="h3-sb text-center"
        style={{ color: 'var(--color-sdp-grey-900)', marginTop: '28.62px' }}
      >
        sdp 관련 소개글 어쩌고 저쩌고
        <br />
        현재 연세대학교 고등교육혁신원 및 유엔 지속가능발전해법 네트워크에
        소속해 있어요.
        <br />
        2017년 부터 지속가능발전 관련 문제를 주제로 정의하고 이에 대한 해결책을
        제시하고 있어요.
      </p>
    </section>
  )
}

export default AboutIntro
