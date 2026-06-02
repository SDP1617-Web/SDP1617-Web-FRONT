import type { CSSProperties } from 'react'
import Image from 'next/image'

const heroStyle: CSSProperties = {
  width: '100%',
  height: '347px',
  background: 'linear-gradient(359deg, #000 -28.14%, #CCFB55 105.87%)',
  position: 'relative',
  overflow: 'hidden',
}

const textStyle: CSSProperties = {
  textShadow: '0 0 4.7px rgba(0, 0, 0, 0.75)',
  position: 'absolute',
  top: '153.65px',
  left: '359.5px',
}

const AboutHero = () => {
  return (
    <div style={heroStyle}>
      {/* sphere1 — 좌측 구체 */}
      <Image
        src="/about-sphere1.svg"
        alt="sphere1"
        width={1438}
        height={823}
        style={{ position: 'absolute', top: '0px', left: '-300px' }}
      />

      {/* sphere2 — 우측 구체 */}
      <Image
        src="/about-sphere2.svg"
        alt="sphere2"
        width={451}
        height={366}
        style={{ position: 'absolute', top: '0px', right: '500px' }}
      />

      <div className="text-white" style={textStyle}>
        <p className="h1">About</p>
        <p className="h1">SDP</p>
      </div>
    </div>
  )
}

export default AboutHero
