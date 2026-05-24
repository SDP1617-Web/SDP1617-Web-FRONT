import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/common/Button'

export default function HeroSection1() {
  return (
    <section className="relative w-full" style={{ height: '100vh' }}>
      {/* 배경 SVG */}
      <Image
        src="/hero-bg.svg"
        alt="hero background"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />

      {/* 버튼 */}
      <div className="absolute top-[80vh] left-1/2 -translate-x-1/2">
        <Link href="/apply">
          <Button variant="v5">학회 지원하기</Button>
        </Link>
      </div>
    </section>
  )
}
