import Image from 'next/image'

const PARTNERS = [
  { src: '/partner1.svg', alt: 'partner1' },
  { src: '/partner2.svg', alt: 'partner2' },
  { src: '/partner3.svg', alt: 'partner3' },
  { src: '/partner4.svg', alt: 'partner4' },
  { src: '/partner5.svg', alt: 'partner5' },
]

const PartnersSection = () => {
  return (
    <section
      style={{ marginTop: '192px', marginBottom: '82px' }}
      className="flex justify-center"
    >
      <div style={{ width: '1202px' }} className="flex flex-col">
        {/* 타이틀 */}
        <p className="h2" style={{ color: 'var(--color-sdp-grey-900)' }}>
          SDP 는 기관·학계·국제기구와 함께합니다.
        </p>

        {/* 로고 */}
        <div
          className="flex flex-row items-center"
          style={{ marginTop: '48px', gap: '61px' }}
        >
          {PARTNERS.map((partner) => (
            <Image
              key={partner.src}
              src={partner.src}
              alt={partner.alt}
              width={0}
              height={0}
              style={{ width: 'auto', height: 'auto' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
