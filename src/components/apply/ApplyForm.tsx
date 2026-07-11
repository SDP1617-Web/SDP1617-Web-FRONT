'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/components/common/Button'
import { BaseInput, LayoutInput } from '@/components/common/Input'
import { Icon } from '@/components/common/Icon'
import {
  getApplyQuestion,
  getInterviewSlots,
  getRecruitmentId,
  submitApply,
  submitApplyPdf,
} from '@/lib/api/apply'
import {
  ApplyQuestion,
  Department,
  InterviewSlot,
  TechRole,
} from '@/types/apply'
import { useRouter } from 'next/navigation'

/** YYYY-MM-DD → YY-MM-DD 변환 */
const formatDate = (iso: string) => {
  const [year, month, day] = iso.split('-')
  return `${year}-${month}-${day}`
}

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

/** '2026-07-11' → '7/11 (토)' */
const formatSlotDate = (date: string) => {
  const [, month, day] = date.split('-')
  const weekday = WEEKDAYS[new Date(`${date}T00:00:00`).getDay()]
  return `${Number(month)}/${Number(day)} (${weekday})`
}

const ApplyForm = () => {
  const router = useRouter()
  // TODO: 모집 공고 ID 가져오기
  const [recruitmentId, setRecruitmentId] = useState<number>(0)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [university, setUniversity] = useState('')
  const [major, setMajor] = useState('')
  const [department, setDepartment] = useState<Department>(null)
  const [techRole, setTechRole] = useState<TechRole>(null)
  const [questions, setQuestions] = useState<ApplyQuestion[]>([])
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [slots, setSlots] = useState<InterviewSlot[]>([])
  const [selectedSlots, setSelectedSlots] = useState<Set<number>>(new Set())
  const [file, setFile] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const dateInputRef = useRef<HTMLInputElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) setFile(selected)
  }

  const toggleSlot = (slotId: number) => {
    setSelectedSlots((prev) => {
      const next = new Set(prev)
      if (next.has(slotId)) next.delete(slotId)
      else next.add(slotId)
      return next
    })
  }

  // 슬롯 목록을 날짜(행) × 시간(열) 그리드로 변환한다
  const { dates, times, slotIdByCell } = useMemo(() => {
    const dateSet = new Set<string>()
    const timeSet = new Set<string>()
    const cellMap = new Map<string, number>() // `${date} ${time}` → slotId

    for (const slot of slots) {
      const [date, rawTime] = slot.slotDateTime.split('T')
      const time = rawTime.slice(0, 5) // 'HH:mm'
      dateSet.add(date)
      timeSet.add(time)
      cellMap.set(`${date} ${time}`, slot.id)
    }

    return {
      dates: [...dateSet].sort(),
      times: [...timeSet].sort(),
      slotIdByCell: cellMap,
    }
  }, [slots])

  const updateAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return

    const payload = {
      name,
      phone,
      birthDate,
      email,
      university,
      major,
      department,
      techRole,
      answers: questions.map((question) => ({
        questionId: question.id,
        content: answers[question.id] ?? '',
      })),
      interviewSlotIds: Array.from(selectedSlots).sort((a, b) => a - b),
    }

    setSubmitting(true)
    try {
      // 1. 지원서 본문을 먼저 제출하고 결과 ID를 받는다
      const result = await submitApply(recruitmentId, payload)
      // 2. 받은 결과 ID로 PDF를 별도 업로드한다
      if (file) await submitApplyPdf(result.applicationId, file)
      router.push(`/apply/success`)
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  // 공고 ID + 면접 슬롯 불러오기
  useEffect(() => {
    const fetchRecruitmentId = async () => {
      const recruitmentId = await getRecruitmentId()
      const interviewSlots = await getInterviewSlots(recruitmentId)
      setRecruitmentId(recruitmentId)
      setSlots(interviewSlots)
    }
    fetchRecruitmentId()
  }, [])

  useEffect(() => {
    // 공고 ID가 아직 없거나 부서 미선택(최초 접속) 시에는 요청하지 않는다
    if (!recruitmentId || !department) return
    // TECH 부서는 세부 역할까지 선택돼야 질문을 요청한다
    if (department === 'TECH' && !techRole) return

    const fetchApplyQuestion = async () => {
      const result = await getApplyQuestion(recruitmentId, department, techRole)
      // 서버가 순서를 보장하지 않으므로 sequence 기준으로 정렬한다
      setQuestions([...result].sort((a, b) => a.sequence - b.sequence))
      // 질문이 바뀌면 이전 답변은 초기화한다
      setAnswers({})
    }
    fetchApplyQuestion()
  }, [recruitmentId, department, techRole])

  return (
    <form
      onSubmit={handleSubmit}
      className="h-auto w-full px-[360px] pt-[90px]"
    >
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
              <BaseInput
                placeholder={PLACE_HOLDER.NAME}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* 지원자 생년월일 */}
            <div className="relative flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_BIRTH}
              </h3>
              {/* Input Component */}
              <BaseInput
                placeholder={PLACE_HOLDER.BIRTH}
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
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
                onChange={(e) => setBirthDate(formatDate(e.target.value))}
              />
            </div>
            {/* 지원자 학교 */}
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_UNIVERSITY}
              </h3>
              {/* Input Component */}
              <BaseInput
                placeholder={PLACE_HOLDER.UNIVERSITY}
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
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
              <BaseInput
                placeholder={PLACE_HOLDER.CONTACT}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {/* 지원자 이메일 */}
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_EMAIL}
              </h3>
              {/* Input Component */}
              <BaseInput
                type="email"
                placeholder={PLACE_HOLDER.EMAIL}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* 지원자 전공 */}
            <div className="flex flex-col gap-y-[16px]">
              <h3 className="h3 flex justify-items-start font-semibold">
                {APPLY_MAJOR}
              </h3>
              {/* Input Component */}
              <BaseInput
                placeholder={PLACE_HOLDER.MAJOR}
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
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
          {(Object.entries(DEPARTMENT_LIST) as [Department, string][]).map(
            ([key, label]) => {
              return (
                <Button
                  key={key}
                  variant="v3"
                  isActive={department === key}
                  onClick={() => setDepartment(key)}
                  className="w-auto flex-1"
                >
                  {label}
                </Button>
              )
            }
          )}
        </div>
        {/* Button Component - v3 */}
        {department === 'TECH' && (
          <div className="flex flex-row gap-x-[23px]">
            {(Object.entries(TECH_ROLE_LIST) as [TechRole, string][]).map(
              ([key, label]) => {
                return (
                  <Button
                    key={key}
                    variant="v3"
                    isActive={techRole === key}
                    onClick={() => setTechRole(key)}
                    className="w-auto flex-1"
                  >
                    {label}
                  </Button>
                )
              }
            )}
          </div>
        )}
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
              {file ? file.name : APPLY_FILE_TEXT}
            </h4>
          </div>
          {/* 숨겨진 file input으로 로컬 파일 선택 */}
          <input
            ref={fileInputRef}
            type="file"
            accept={FILE_ACCEPT}
            className="hidden"
            onChange={handleFileChange}
          />
          {/* Button Component - v6 */}
          <Button
            variant="v6"
            disabled={submitting}
            onClick={() => fileInputRef.current?.click()}
          >
            <h4 className="h4 font-medium">{APPLY_FILE_SELECT}</h4>
          </Button>
        </div>
      </section>

      {/* 지원 질문 (서버에서 받아온 부서별 질문) */}
      {questions.map((question) => (
        <section
          key={question.id}
          className="mt-[100px] flex flex-col gap-y-[28px]"
        >
          {/* TextBox Component */}
          <LayoutInput
            num={String(question.sequence + 1)}
            title={question.content}
            maxLength={question.maxLength}
            placeholder={`공백 포함 ${question.maxLength}자 이내`}
            value={answers[question.id] ?? ''}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
          />
        </section>
      ))}

      {/* 면접 시간대 */}
      <section className="mt-[100px] flex flex-col gap-y-[28px]">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-[20px]">
            <Button variant="v4">{questions.length + 2}</Button>
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
                {times.map((time) => (
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
              {dates.map((date) => (
                <tr key={date} className="border-sdp-grey-200 border-t">
                  <td className="body1 text-sdp-grey-900 py-[16px] text-center font-semibold">
                    {formatSlotDate(date)}
                  </td>
                  {times.map((time) => {
                    const slotId = slotIdByCell.get(`${date} ${time}`)
                    // 해당 날짜·시간에 슬롯이 없으면 빈 칸으로 둔다
                    if (slotId === undefined) {
                      return (
                        <td
                          key={time}
                          className="text-sdp-grey-300 py-[16px] text-center"
                        >
                          -
                        </td>
                      )
                    }
                    return (
                      <td key={time} className="py-[16px] text-center">
                        <button
                          type="button"
                          onClick={() => toggleSlot(slotId)}
                          className={`size-[24px] rounded-full border-2 transition-colors ${
                            selectedSlots.has(slotId)
                              ? 'bg-sdp-main-primary border-sdp-grey-400'
                              : 'border-sdp-grey-300'
                          }`}
                          aria-label={`${date} ${time}`}
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
          <Button type="submit" variant="v9" disabled={submitting}>
            {APPLY_SUBMIT}
          </Button>
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
const APPLY_UNIVERSITY = '학교'
const APPLY_CONTACT = '연락처'
const APPLY_EMAIL = '이메일'
const APPLY_MAJOR = '전공'

const PLACE_HOLDER = {
  NAME: '성함을 입력해 주세요.',
  CONTACT: '연락처를 입력해 주세요.',
  BIRTH: 'YYYY-MM-DD',
  EMAIL: '공지사항 및 안내 메일을 수신할 이메일 주소',
  UNIVERSITY: '학교를 입력해 주세요.',
  MAJOR: '전공을 입력해 주세요.',
}

const APPLY_TEAM = '지원 부서 선택'

const DEPARTMENT_LIST = {
  RESEARCH: '리서치',
  DESIGN: '디자인',
  TECH: '테크',
} as const

const TECH_ROLE_LIST = {
  FRONTEND: '프론트엔드',
  BACKEND: '백엔드',
} as const

const APPLY_PORTFOLIO = '포트폴리오'
const APPLY_FILE_TEXT = 'PDF 또는 PPT 파일 첨부'
const APPLY_FILE_SELECT = '파일 선택'
const FILE_ACCEPT = '.pdf,.ppt,.pptx'

const INTERVIEW = {
  title: '면접 가능한 시간을 모두 체크해주세요.',
  subTitle: '가능한 시간을 체크해주시면 면접 시간을 조율해서 연락드릴게요.',
}

const APPLY_FINAL_TEXT =
  '작성하신 내용은 수정이 불가능하므로 제출 전 다시 한번 확인 부탁드립니다.'
const APPLY_SUBMIT = '최종제출'

const FOOTER_CONTACT = '문의하기'
const FOOTER_INSTAGRAM = '인스타그램'
const FOOTER_COPYRIGHT = '© 2026 SDP All rights reserved.'

export default ApplyForm
