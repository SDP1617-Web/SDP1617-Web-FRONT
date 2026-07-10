import Image from 'next/image'

const ApplyCompletePage = () => {
  return (
    <div className="my-[450px] flex flex-col items-center justify-center gap-[50px]">
      <Image
        src="/header-logo.svg"
        alt="SDP 로고"
        width={700}
        height={125}
        priority
      />
      <h3 className="h3-sb from-sdp-main-primary via-sdp-grey-900 to-sdp-main-primary bg-linear-to-r bg-clip-text text-transparent">
        {completeText}
      </h3>
    </div>
  )
}

const completeText = 'SDP 학회 지원이 완료되었습니다. 지원해주셔서 감사합니다!'

export default ApplyCompletePage
