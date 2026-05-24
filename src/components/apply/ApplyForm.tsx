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
          {/* Button Component - v6 */}
          <Button variant="v6">
            <h4 className="h4 font-medium">{APPLY_FILE_SELECT}</h4>
          </Button>
        </div>
      </section>

      {/* 지원동기 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num="1"
          title="지원한 동기와 활동을 통해 이루고 싶은 목표를 서술해주세요."
          maxLength={200}
          placeholder="공백 포함 200자 이내"
        />
      </section>

      {/* 강점, 약점 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num="2"
          title="디자인팀에서 본인이 가장 잘 기여할 수 있는 역할과 그 이유를 본인의 강점 및 약점을 중심으로 설명해주세요."
          subTitle="예시: UI 시스템 구축, 프로토타이핑 등"
          maxLength={200}
          placeholder="공백 포함 200자 이내"
        />
      </section>

      {/* 협업 경험 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num="3"
          title="팀 또는 개인 프로젝트 중, 기획자 혹은 개발자와 함께 협업한 경험에 대해 서술해주세요."
          maxLength={350}
          placeholder="공백 포함 350자 이내"
        />
      </section>

      {/* 창의적 사고 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num="4"
          title="기존 앱이나 웹사이트 중 UX/UI 측면에서 불편했던 점이나 개선이 필요하다고 생각한 사례를 소개 하고, 이를 해결할 수 있는 자신만의 창의적인 아이디어를 설명해 주세요."
          maxLength={200}
          placeholder="공백 포함 200자 이내"
        />
      </section>

      {/* 주도적 문제 해결 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num="5"
          title="본인이 주도적으로 문제를 발견하고, 해당 문제를 끝까지 책임지고 해결한 경험을 구체적으로 서술해주세요."
          maxLength={200}
          placeholder="공백 포함 200자 이내"
        />
      </section>

      {/* 의견 조율 능력 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num="6"
          title="의견 충돌이나 소통의 어려움이 있었던 상황에서, 타인과 조율하며 문제를 해결하거나 결과를 개선한 경험을 서술해주세요."
          maxLength={200}
          placeholder="공백 포함 200자 이내"
        />
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
