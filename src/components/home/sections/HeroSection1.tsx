import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/common/Button'

const BUTTON_TOP = '819px'

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
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: BUTTON_TOP }}
      >
        <Link href="/apply">
          <Button variant="v5">학회 지원하기</Button>
        </Link>
      </div>
    </section>
  )
}
