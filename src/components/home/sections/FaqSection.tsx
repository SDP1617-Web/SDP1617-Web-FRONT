'use client'

import { useState } from 'react'
import FaqTab from '@/components/home/components/FaqTab'
import FaqAccordion from '@/components/home/components/FaqAccordion'

const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  지원자격: [
    {
      question: 'Q1. 전공 무관하게 지원할 수 있나요?',
      answer:
        '네, 전공과 무관하게 지원 가능합니다. 각 팀에서 요구하는 역량과 관심사를 충족한다면 누구든 환영해요.',
    },
    {
      question: 'Q2. 전공 제한이 있나요?',
      answer:
        '아니요, 학부생의 경우 학년 제한은 없습니다. *방학 2번을 포함해서 두 학기 이상 활동이 가능한 수료생, 졸업유예자, 최근 1년 이내 졸업생 (2025년 8월 졸업 ~ 2026년 8월 졸업)도 지원 가능합니다.',
    },
    {
      question: 'Q3. 관련 경험이나 포트폴리오가 없어도 지원할 수 있나요?',
      answer:
        '네, 경험보다 문제를 바라보는 태도와 배우고자 하는 의지를 더 중요하게 봅니다. 관련 경험은 면접 시 참고할 뿐, 꼭 필요하지는 않습니다. ',
    },
    {
      question: 'Q4. 타 학회나 동아리와 병행할 수 있나요?',
      answer:
        '네, 병행 자체는 가능하지만 SDP 활동에 성실히 참여할 수 있는 경우에만 권장드려요. 다른 활동으로 세션 참여나 프로젝트 진행에 지장이 생기지 않도록 유의해주세요.',
    },
    {
      question:
        'Q5. 특정 팀(리서치/디자인/테크)만 지원할 수 있나요, 여러 팀 중복 지원도 가능한가요?',
      answer: '한 팀만 지원 가능하며, 중복 지원은 불가능합니다.',
    },
  ],
  면접관련: [
    {
      question: 'Q1. 면접은 어떤 방식으로 진행되나요?',
      answer:
        '면접은 비대면으로 진행됩니다. 세부 방식은 서류 합격자 대상으로 추후 안내드릴 예정이에요.',
    },
    {
      question: 'Q2. 면접에서는 주로 어떤 질문을 하나요?',
      answer:
        '지원서 내용을 기반으로 한 질문, SDGs와 사회 문제에 대한 관점을 묻는 질문, 그리고 지원하신 팀에서 필요로 하는 역량과 얼마나 맞닿아 있는지를 확인하는 질문으로 구성돼요.',
    },
    {
      question: 'Q3. 면접 준비를 위해 따로 공부해야 할 것이 있나요?',
      answer:
        '따로 준비하실 건 없지만, 관심 있는 SDGs 주제나 지원서에 작성한 내용을 한 번 더 정리해보시면 도움이 됩니다.',
    },
    {
      question: 'Q4. 면접 결과는 언제, 어떻게 안내되나요?',
      answer: '면접 결과는 9월 8일, 지원자 개인 문자로 전송될 예정이에요.',
    },
    {
      question: 'Q5. 면접에 떨어지면 다음 기수에 재지원할 수 있나요?',
      answer:
        '네, 재지원 가능합니다. 이전 지원 이력이 불이익으로 작용하지 않아요.',
    },
  ],
  활동관련: [
    {
      question: 'Q1. 활동은 얼마나 자주, 언제 진행되나요?',
      answer:
        '매주 금요일 19시~22시, 주 1회 정기 세션이 진행돼요. 프로젝트 진행 상황에 따라 팀별로 추가 비대면 세션이 생길 수도 있다는 점 참고해 주세요.',
    },
    {
      question: 'Q2. 한 학기 동안 어떤 활동을 하게 되나요?',
      answer:
        'Core SDGs 관련 서비스 프로젝트를 중심으로, 네트워킹데이·미니세미나·오픈세미나·알럼나이 멘토링 등 다양한 활동에 참여하게 돼요.',
    },
    {
      question: 'Q3. 활동 장소는 어디인가요? 온라인으로도 참여 가능한가요?',
      answer:
        '오프라인 진행을 원칙으로 해요. 지난 학기에는 연세대, 이화여대 등 신촌 및 합정 인근에서 진행됐어요.',
    },
    {
      question: 'Q4. 활동에 불참하면 어떻게 되나요?',
      answer:
        '결석 시 벌점이 부여되고, 일정 벌점을 초과하면 수료가 어려워요. 자세한 회칙은 OT 때 안내드릴게요.',
    },
    {
      question: 'Q5. 활동을 하면서 어떤 걸 얻어갈 수 있나요?',
      answer:
        '문제를 발견하고 검증해 실제 서비스로 완성해가는 전 과정을 경험할 수 있어요. 리서치·디자인·테크 팀이 함께 협업하며 다양한 직군의 시각을 배우고, 세미나와 멘토링을 통해 SDGs와 사회 문제를 바라보는 폭도 넓힐 수 있습니다.',
    },
  ],
}

const TABS = Object.keys(FAQ_DATA)

const FaqSection = () => {
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

export default FaqSection
