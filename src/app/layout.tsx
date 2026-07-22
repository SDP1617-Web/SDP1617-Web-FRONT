import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CursorTrail from '@/components/common/CursorTrail'

export const metadata: Metadata = {
  title: 'SDP | Sustainable Development Program',
  description:
    '학부생 주도로 설립된 한국 최초의 지속가능성 관련 글로벌 리더십 프로그램',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <CursorTrail />
        {children}
        <Footer />
      </body>
    </html>
  )
}
