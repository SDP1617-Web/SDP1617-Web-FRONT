import Link from 'next/link'

const ApplyComingSoon = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-start bg-white px-6 pt-[160px] text-center">
      <h2 className="h2 text-sdp-grey-900 mb-[16px]">
        18기 지원서는 구글 폼으로 받고 있어요.
      </h2>

      <p className="body1 text-sdp-grey-500 whitespace-pre-line">
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
        {') 프로필 링크에 있는 팀별 구글 폼을 통해 지원해 주세요!'}
      </p>
    </section>
  )
}

export default ApplyComingSoon
