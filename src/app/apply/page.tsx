//지원하기 페이지
'use client'
import Image from 'next/image'

const ApplyPage = () => {
  return (
    <div className="relative flex h-96 w-full flex-row">
      <div className="from-sdp-main-primary to-sdp-grey-900 absolute left-[-110px] h-full w-[calc(50%+110px)] bg-linear-to-r to-20%">
        <div className="pt-[174px] pl-[410px]">
          <h1 className="h1 text-sdp-grey-50">{APPLY_H1}</h1>
          <h3 className="h3 text-sdp-grey-300 font-semibold">{APPLY_H3}</h3>
        </div>
      </div>
      <div className="bg-sdp-grey-900 h-full w-full">
        <Image
          src="/recruiting-bg.svg"
          className="absolute right-[50px] bottom-0"
          width={430}
          height={390}
          alt="recruiting background"
        />
      </div>
    </div>
  )
}

const APPLY_H1 = '지원하기'
const APPLY_H3 = '지원서 작성'

export default ApplyPage
