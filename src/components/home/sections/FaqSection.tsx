'use client'

import { useState } from 'react'
import FaqTab from '../components/FaqTab'
import FaqAccordion from '../components/FaqAccordion'

const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  지원자격: [
    {
      question: '지원 가능한 나이가 어떻게 되나요?',
      answer: '답변 블라블라블라라라라',
    },
    { question: '전공 제한이 있나요?', answer: '답변 블라블라블라라라라' },
    {
      question: '휴학생도 지원할 수 있나요?',
      answer: '답변 블라블라블라라라라',
    },
    {
      question: '타 학교 학생도 지원 가능한가요?',
      answer: '답변 블라블라블라라라라',
    },
    { question: '중복 지원이 가능한가요?', answer: '답변 블라블라블라라라라' },
  ],
  면접관련: [
    {
      question: '면접은 어떤 방식으로 진행되나요?',
      answer: '답변 블라블라블라라라라',
    },
    { question: '면접 복장 규정이 있나요?', answer: '답변 블라블라블라라라라' },
    {
      question: '면접 결과는 언제 발표되나요?',
      answer: '답변 블라블라블라라라라',
    },
  ],
  활동관련: [
    {
      question: '활동 기간은 얼마나 되나요?',
      answer: '답변 블라블라블라라라라',
    },
    {
      question: '오프라인 모임이 필수인가요?',
      answer: '답변 블라블라블라라라라',
    },
    { question: '활동비가 따로 드나요?', answer: '답변 블라블라블라라라라' },
    { question: '수료 조건이 있나요?', answer: '답변 블라블라블라라라라' },
  ],
}

const TABS = Object.keys(FAQ_DATA)

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleAccordion = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i)
  }

  return (
    <section style={{ marginTop: '220px' }} className="flex justify-center">
      <div style={{ width: '1202px' }} className="flex flex-col">
        {/* 타이틀 */}
        <p
          className="h2"
          style={{ color: 'var(--color-sdp-grey-900)', marginBottom: '36px' }}
        >
          자주 묻는 질문
        </p>

        {/* 탭 */}
        <div className="flex flex-row" style={{ marginBottom: '36px' }}>
          {TABS.map((tab) => (
            <FaqTab
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => {
                setActiveTab(tab)
                setActiveIndex(null)
              }}
            />
          ))}
        </div>

        {/* 아코디언 */}
        <div className="flex flex-col">
          {FAQ_DATA[activeTab].map((item, i) => (
            <FaqAccordion
              key={i}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === i}
              onClick={() => handleAccordion(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
