import Image from 'next/image'

const HERO_H1 = 'PROJECT'

const HeroSection = () => {
  return (
    <section className="relative mx-auto h-[280px] w-full max-w-[1920px] overflow-hidden bg-[linear-gradient(359deg,#000_-28.14%,var(--color-sdp-main-primary)_105.87%)] md:h-[347px]">
      <div className="relative z-10 flex h-full items-center px-6 md:px-16 xl:pl-[410px]">
        <h1 className="h1 text-sdp-grey-50">{HERO_H1}</h1>
      </div>

      <div
        className="absolute"
        style={{
          top: '66.6px',
          right: '802px',
          width: '1155.12px',
          height: '280.415px',
        }}
      >
        <Image
          src="/images/ProjectHero1.png"
          alt=""
          width={1155}
          height={280}
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute box-border rounded-full bg-transparent shadow-[inset_0_4.487px_33.767px_10.096px_rgba(255,255,255,0.52)]"
        style={{
          top: '-367px',
          left: '494px',
          width: '671px',
          height: '673px',
        }}
      />

      <div
        className="absolute box-border rounded-full bg-transparent shadow-[inset_0_3.235px_24.347px_7.28px_rgba(255,255,255,0.52)]"
        style={{
          top: '217px',
          right: '289px',
          width: '433px',
          height: '435px',
        }}
      />

      <div
        className="absolute box-border mix-blend-hard-light"
        style={{
          top: '-7.9px',
          right: '55.6px',
          width: '270.274px',
          height: '270.274px',
          transform: 'rotate(-1.675deg)',
        }}
      >
        <Image
          src="/images/ProjectHero2.png"
          alt="icon 4"
          fill
          sizes="270px"
          className="object-cover"
          loading="eager"
        />
      </div>
    </section>
  )
}

export default HeroSection
