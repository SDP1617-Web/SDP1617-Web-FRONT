'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/common/Button'
import { BaseInput, LayoutInput } from '@/components/common/Input'
import { Icon } from '@/components/common/Icon'

/** YYYY-MM-DD → YY-MM-DD 변환 */
const formatDate = (iso: string) => {
  const [year, month, day] = iso.split('-')
  return `${year.slice(2)}-${month}-${day}`
}

const ApplyForm = () => {
  const [birth, setBirth] = useState('')
  const dateInputRef = useRef<HTMLInputElement>(null)

  return (
    <form action="" className="h-auto w-full px-[360px] pt-[90px]">
      {/* 지원자 정보 */}
      <section className="flex flex-col">
        <div className="flex flex-row items-center gap-[20px]">
          <Button variant="v4">1</Button>
          <h3 className="h3 text-sdp-grey-900">{APPLY_INFORMATION}</h3>
        </div>
        {/* 개인정보 입력 */}
        <div className="mt-[50px] flex flex-row gap-x-[25px]">
          <div className="flex flex-col gap-y-[32px]">
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_NAME}
              </h3>
              {/* Input Component */}
              <BaseInput placeholder={PLACE_HOLDER.NAME}></BaseInput>
            </div>
            <div className="relative flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_BIRTH}
              </h3>
              {/* Input Component */}
              <BaseInput
                placeholder={PLACE_HOLDER.BIRTH}
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                suffix={
                  <button
                    type="button"
                    onClick={() => dateInputRef.current?.showPicker()}
                    aria-label="날짜 선택"
                    className="ml-[8px] shrink-0 transition-transform active:scale-90"
                  >
                    <Icon name="calendar" />
                  </button>
                }
              />
              {/* 숨겨진 date input으로 실제 날짜 선택 */}
              <input
                ref={dateInputRef}
                type="date"
                className="invisible absolute"
                onChange={(e) => setBirth(formatDate(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[32px]">
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_CONTACT}
              </h3>
              {/* Input Component */}
              <BaseInput placeholder={PLACE_HOLDER.CONTACT}></BaseInput>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_EMAIL}
              </h3>
              {/* Input Component */}
              <BaseInput placeholder={PLACE_HOLDER.EMAIL}></BaseInput>
            </div>
          </div>
        </div>
      </section>

      {/* 지원 부서 선택 */}
      <section className="mt-[150px] flex flex-col gap-y-[16px]">
        <h3 className="h3 flex justify-items-start font-semibold">
          {APPLY_TEAM}
        </h3>
        {/* Button Component - v3 */}
        <div className="flex flex-row gap-x-[23px]">
          {TEAM_LIST.map((TEAM, index) => {
            return <Button variant="v3">{TEAM}</Button>
          })}
        </div>
      </section>

      {/* 포트폴리오 */}
      <section className="mt-[120px] flex flex-col gap-y-[16px]">
        <h3 className="h3 flex justify-items-start font-semibold">
          {APPLY_PORTFOLIO}
        </h3>
        {/* pdf 입력 폼 */}
        <div className="outline-sdp-grey-300 inline-flex flex-col items-center justify-start gap-[8px] self-stretch rounded-[20px] p-[32px] outline-2 -outline-offset-2">
          {/* pdf 이미지 */}
          <div className="size-12 justify-center text-center font-['Font_Awesome_5_Free'] text-5xl leading-[47.76px] font-black text-neutral-300">
            
          </div>
          <div className="flex h-14 flex-col items-center justify-start self-stretch pt-2">
            <h4 className="h4 text-sdp-grey-500 justify-center text-center font-medium">
              {APPLY_FILE_TEXT}
            </h4>
          </div>
          <div className="inline-flex h-16 items-center justify-center rounded-[20px] bg-neutral-100 px-8 py-4">
            {/* Button Component - v6 */}
            <div className="justify-center text-center">
              {APPLY_FILE_SELECT}
            </div>
          </div>
        </div>
      </section>
      {/* 지원동기 */}
      {/* 해당 값들 6개 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        <div className="flex flex-row items-center gap-[22px]">
          {/* Button Component - v4 */}
          <div className="bg-sdp-main-secondary inline-flex size-11 items-center justify-center rounded-full">
            <h3 className="h3 text-sdp-grey-900 justify-center font-semibold">
              1
            </h3>
          </div>
          {/* Question Text */}
          <h3 className="h3 text-sdp-grey-900">{APPLY_INFORMATION}</h3>
        </div>
        {/* TextBox Component */}
        <div className="outline-sdp-grey-300 inline-flex h-[260px] w-full flex-col items-center justify-start gap-[8px] self-stretch rounded-[20px] p-[32px] outline-2 -outline-offset-2" />
      </section>

      {/* 면접 시간대 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        <div className="flex flex-row items-center gap-[22px]">
          {/* Button Component - v4 */}
          <div className="bg-sdp-main-secondary inline-flex size-11 items-center justify-center rounded-full">
            <h3 className="h3 text-sdp-grey-900 justify-center font-semibold">
              1
            </h3>
          </div>
          {/* Question Text */}
          <h3 className="h3 text-sdp-grey-900">{APPLY_INFORMATION}</h3>
        </div>
        {/* Ratio Area */}
        <div className="outline-sdp-grey-300 inline-flex h-[260px] w-full flex-col items-center justify-start gap-[8px] self-stretch rounded-[20px] p-[32px] outline-2 -outline-offset-2" />
      </section>

      {/* 최종 제출 */}
      <section className="mt-[78px] flex flex-col">
        <div className="bg-sdp-main-secondary inline-flex h-[80px] w-full flex-col items-center justify-center rounded-xl p-[16px]">
          <div className="flex flex-col items-center justify-start self-stretch">
            <p className="body1 justify-center text-center">
              {APPLY_FINAL_TEXT}
            </p>
          </div>
        </div>
        <div>{/* Button Component */}</div>
      </section>

      {/* 문의하기 */}
      <section className="my-[150px]"></section>
    </form>
  )
}

const APPLY_INFORMATION = '지원자 정보'
const APPLY_NAME = '이름'
const APPLY_BIRTH = '생년월일'
const APPLY_CONTACT = '연락처'
const APPLY_EMAIL = '이메일'

const PLACE_HOLDER = {
  NAME: '성함을 입력해 주세요.',
  CONTACT: '연락처를 입력해 주세요.',
  BIRTH: 'YY-MM-DD',
  EMAIL: '공지사항 및 안내 메일을 수신할 이메일 주소',
}

const APPLY_TEAM = '지원 부서 선택'

const TEAM_LIST = ['리서치', '디자인', '테크']

const APPLY_PORTFOLIO = '포트폴리오'
const APPLY_FILE_TEXT = 'PDF 또는 PPT 파일 첨부'
const APPLY_FILE_SELECT = '파일 선택'

const APPLY_FINAL_TEXT =
  '작성하신 내용은 수정이 불가능하므로 제출 전 다시 한번 확인 부탁드립니다.'

export default ApplyForm
