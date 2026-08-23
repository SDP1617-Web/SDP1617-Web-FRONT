import Link from 'next/link'
import { Button } from '@/components/common/Button'

const ApplyComingSoon = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-start bg-white px-6 pt-[120px] text-center">
      <h2 className="text-sdp-grey-900 mb-3 text-[26px] leading-[36px] font-bold">
        18기 지원서는 구글 폼으로 받고 있어요.
      </h2>

      <p className="body2 text-sdp-grey-500 mb-7 whitespace-pre-line">
        {
          '웹사이트 내 지원 기능은 더 완벽한 모습으로 고도화하는 중이에요.\n공식 인스타그램('
        }
        <Link
          href="https://www.instagram.com/_sdp_official"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sdp-grey-900 underline underline-offset-2"
        >
          @_sdp_official
        </Link>
        {') 프로필 링크에 있는 링크트리를 통해 지원해 주세요!'}
      </p>

      <Link
        href="https://linktr.ee/SDP_official"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="v5" width="220px" className="h-[50px] text-[20px]">
          링크트리 바로가기
        </Button>
      </Link>
    </section>
  )
}

export default ApplyComingSoon
