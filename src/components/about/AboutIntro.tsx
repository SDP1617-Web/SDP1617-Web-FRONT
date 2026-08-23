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
        SDP는 Sustainable Development Program의 약자로,
        <br />
        학부생 주도로 설립된 한국 최초의 지속가능성 관련 글로벌 리더쉽
        프로그램이에요.
        <br />
        현재 한국지속가능발전해법네트워크 청년위원회(SDSN Korea)에 소속해
        있어요.
      </p>
    </section>
  )
}

export default AboutIntro
