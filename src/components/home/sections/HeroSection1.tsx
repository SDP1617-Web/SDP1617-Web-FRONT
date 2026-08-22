import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/common/Button'

const HeroSection1 = () => {
  return (
    <section
      className="relative w-full"
      style={{ height: 'calc(100vh / var(--sw-scale, 1))' }}
    >
      {/* 배경 SVG */}
      <Image
        src="/hero-bg.svg"
        alt="hero background"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />

      {/* 버튼 */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: 'calc(80vh / var(--sw-scale, 1))' }}
      >
        <Link href="/apply">
          <Button variant="v5">학회 지원하기</Button>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection1
