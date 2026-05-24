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
  const [selectedSlots, setSelectedSlots] = useState<Set<string>>(new Set())
  const dateInputRef = useRef<HTMLInputElement>(null)

  const toggleSlot = (key: string) => {
    setSelectedSlots((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

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
          <div className="flex w-auto flex-1 flex-col gap-y-[32px]">
            {/* 지원자 이름 */}
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_NAME}
              </h3>
              {/* Input Component */}
              <BaseInput placeholder={PLACE_HOLDER.NAME}></BaseInput>
            </div>
            {/* 지원자 생년월일 */}
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
          <div className="flex w-auto flex-1 flex-col gap-y-[32px]">
            {/* 지원자 연락처 */}
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_CONTACT}
              </h3>
              {/* Input Component */}
              <BaseInput placeholder={PLACE_HOLDER.CONTACT}></BaseInput>
            </div>
            {/* 지원자 이메일 */}
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
            return (
              <Button key={index} variant="v3" className="w-auto flex-1">
                {TEAM}
              </Button>
            )
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
          <Icon name="pdf" />
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
          num={QUESTIONS[0].num}
          title={QUESTIONS[0].title}
          maxLength={QUESTIONS[0].maxLength}
          placeholder={QUESTIONS[0].placeholder}
        />
      </section>

      {/* 강점, 약점 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num={QUESTIONS[1].num}
          title={QUESTIONS[1].title}
          subTitle={QUESTIONS[1].subTitle}
          maxLength={QUESTIONS[1].maxLength}
          placeholder={QUESTIONS[1].placeholder}
        />
      </section>

      {/* 협업 경험 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num={QUESTIONS[2].num}
          title={QUESTIONS[2].title}
          maxLength={QUESTIONS[2].maxLength}
          placeholder={QUESTIONS[2].placeholder}
        />
      </section>

      {/* 창의적 사고 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num={QUESTIONS[3].num}
          title={QUESTIONS[3].title}
          maxLength={QUESTIONS[3].maxLength}
          placeholder={QUESTIONS[3].placeholder}
        />
      </section>

      {/* 주도적 문제 해결 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num={QUESTIONS[4].num}
          title={QUESTIONS[4].title}
          maxLength={QUESTIONS[4].maxLength}
          placeholder={QUESTIONS[4].placeholder}
        />
      </section>

      {/* 의견 조율 능력 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        {/* TextBox Component */}
        <LayoutInput
          num={QUESTIONS[5].num}
          title={QUESTIONS[5].title}
          maxLength={QUESTIONS[5].maxLength}
          placeholder={QUESTIONS[5].placeholder}
        />
      </section>

      {/* 면접 시간대 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-[20px]">
            <Button variant="v4">{INTERVIEW.num}</Button>
            <h3 className="h3 text-sdp-grey-800 leading-9">
              {INTERVIEW.title}
            </h3>
          </div>
          <p className="h4 text-sdp-grey-500 pl-[64px] font-medium">
            {INTERVIEW.subTitle}
          </p>
        </div>
        {/* 시간대 선택 그리드 */}
        <div className="outline-sdp-grey-300 overflow-hidden rounded-[20px] outline-2 -outline-offset-2">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="w-[80px]" />
                {TIME_SLOTS.map((time) => (
                  <th
                    key={time}
                    className="body2 text-sdp-grey-700 py-[16px] text-center font-medium"
                  >
                    {time}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DAYS.map((day) => (
                <tr key={day} className="border-sdp-grey-200 border-t">
                  <td className="body1 text-sdp-grey-900 py-[16px] text-center font-semibold">
                    {day}
                  </td>
                  {TIME_SLOTS.map((time) => {
                    const key = `${day}-${time}`
                    return (
                      <td key={key} className="py-[16px] text-center">
                        <button
                          type="button"
                          onClick={() => toggleSlot(key)}
                          className={`size-[24px] rounded-full border-2 transition-colors ${
                            selectedSlots.has(key)
                              ? 'bg-sdp-main-primary border-sdp-grey-400'
                              : 'border-sdp-grey-300'
                          }`}
                          aria-label={`${day} ${time}`}
                        />
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
        <div className="mt-[29px] flex justify-end">
          {/* Button Component */}
          <Button variant="v9">{APPLY_SUBMIT}</Button>
        </div>
      </section>

      {/* 문의하기 */}
      <section className="my-[150px]">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-row justify-center gap-[26px]">
            <div className="flex flex-row items-center gap-[8px]">
              <Icon name="email" />
              <p className="body1 text-sdp-grey-700">{FOOTER_CONTACT}</p>
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <Icon name="instagram" />
              <p className="body1 text-sdp-grey-700">{FOOTER_INSTAGRAM}</p>
            </div>
          </div>
          <p className="body2 text-sdp-grey-400 flex justify-center">
            {FOOTER_COPYRIGHT}
          </p>
        </div>
      </section>
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

const QUESTIONS = [
  {
    num: '1',
    title: '지원한 동기와 활동을 통해 이루고 싶은 목표를 서술해주세요.',
    maxLength: 200,
    placeholder: '공백 포함 200자 이내',
  },
  {
    num: '2',
    title:
      '디자인팀에서 본인이 가장 잘 기여할 수 있는 역할과 그 이유를 본인의 강점 및 약점을 중심으로 설명해주세요.',
    subTitle: '예시: UI 시스템 구축, 프로토타이핑 등',
    maxLength: 200,
    placeholder: '공백 포함 200자 이내',
  },
  {
    num: '3',
    title:
      '팀 또는 개인 프로젝트 중, 기획자 혹은 개발자와 함께 협업한 경험에 대해 서술해주세요.',
    maxLength: 350,
    placeholder: '공백 포함 350자 이내',
  },
  {
    num: '4',
    title:
      '기존 앱이나 웹사이트 중 UX/UI 측면에서 불편했던 점이나 개선이 필요하다고 생각한 사례를 소개 하고, 이를 해결할 수 있는 자신만의 창의적인 아이디어를 설명해 주세요.',
    maxLength: 200,
    placeholder: '공백 포함 200자 이내',
  },
  {
    num: '5',
    title:
      '본인이 주도적으로 문제를 발견하고, 해당 문제를 끝까지 책임지고 해결한 경험을 구체적으로 서술해주세요.',
    maxLength: 200,
    placeholder: '공백 포함 200자 이내',
  },
  {
    num: '6',
    title:
      '의견 충돌이나 소통의 어려움이 있었던 상황에서, 타인과 조율하며 문제를 해결하거나 결과를 개선한 경험을 서술해주세요.',
    maxLength: 200,
    placeholder: '공백 포함 200자 이내',
  },
]

const INTERVIEW = {
  num: '7',
  title: '면접 가능한 시간을 모두 체크해주세요.',
  subTitle: '가능한 시간을 체크해주시면 면접 시간을 조율해서 연락드릴게요.',
}

const DAYS = ['월', '화', '수', '목', '금', '토', '일']

const TIME_SLOTS = [
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
]

const APPLY_FINAL_TEXT =
  '작성하신 내용은 수정이 불가능하므로 제출 전 다시 한번 확인 부탁드립니다.'
const APPLY_SUBMIT = '최종제출'

const FOOTER_CONTACT = '문의하기'
const FOOTER_INSTAGRAM = '인스타그램'
const FOOTER_COPYRIGHT = '© 2026 SDP All rights reserved.'

export default ApplyForm
