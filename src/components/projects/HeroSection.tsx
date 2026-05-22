export const HeroSection = () => {
  return (
    <section className="relative h-[200px] w-full overflow-hidden bg-[#4a7a1e]">
      <img
        src="/images/ball-1.png"
        alt=""
        className="absolute -top-10 -right-10 h-48 w-48 object-contain opacity-60"
      />
      <img
        src="/images/ball-2.png"
        alt=""
        className="absolute bottom-0 left-1/3 h-56 w-56 object-contain opacity-40"
      />
      <img
        src="/images/ball-3.png"
        alt=""
        className="absolute top-4 right-1/4 h-32 w-32 object-contain opacity-50"
      />
      <img
        src="/images/ball-4.png"
        alt=""
        className="absolute top-6 right-10 h-20 w-20 object-contain opacity-60"
      />

      <img
        src="/images/sparkle.png"
        alt="Sparkle"
        className="absolute top-8 right-16 h-[72px] w-[72px] object-contain opacity-90"
      />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <img
          src="/images/grass-bottom.png"
          alt=""
          className="h-24 w-48 object-contain opacity-70"
        />
      </div>

      {/* 타이틀 (기존 유지) */}
      <div className="relative z-10 flex h-full items-end pb-8 pl-16">
        <h1 className="text-[42px] leading-none font-bold tracking-tight text-white">
          PROJECT
        </h1>
      </div>
    </section>
  )
}
