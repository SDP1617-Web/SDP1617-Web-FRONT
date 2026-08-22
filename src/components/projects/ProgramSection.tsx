'use client'

import React, { useState } from 'react'
import { Button } from '@/components/common/Button'
import { QuarterCard } from '@/components/common/Card'

// 분기별 더미 데이터 정의
interface ProgramData {
  id: string
  label: string
  period: string
  sessions: string[]
  goals: string[]
  week: string[]
  schedule?: string
  notice: string
  weekLabel?: string
  sessionsLabel?: string
  goalsLabel?: string
}

const PROGRAM_DATA: ProgramData[] = [
  {
    id: '1',
    label: '1. 기획안 도출',
    period: '리서치 주도',
    weekLabel: 'Step 1 · 문제 정의 및 리서치',
    week: ['SDGs 기반으로 사회 문제를 정의해요.'],
    sessions: [
      '· 데스크 리서치 및 유저 설문조사 진행',
      '· 페르소나 및 As-Is / To-Be 도출',
      '· 해결할 핵심 타깃과 문제 상황 구체화',
    ],
    goals: [
      '· 기능 정의서 및 PRD (요구사항 정의서)',
      '· 정보 구조도(IA) 및 플로우차트',
      '· 다음 단계로 넘어가기 위한 와이어프레임',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · UX/UI 설계 및 브랜딩',
  },
  {
    id: '2',
    label: '2. 디자인 설계',
    period: '디자인 주도',
    weekLabel: 'Step 2 · UX/UI 디자인',
    week: ['직관적이고 매력적인 사용자 경험을 만들어요.'],
    sessions: [
      '· 기획안을 바탕으로 화면 와이어프레임 고도화',
      '· 서비스 브랜드 아이덴티티(BI) 수립',
      '· Figma를 활용한 컴포넌트 기반 디자인 시스템 구축',
    ],
    goals: [
      '· 사용자 여정이 고려된 UX/UI 프로토타입',
      '· 프론트/백엔드 개발을 위한 에셋 정리',
      '· 유저 피드백을 반영한 인터페이스 개선안',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · 본격적인 프로덕트 개발',
  },
  {
    id: '3',
    label: '3. 프로덕트 개발',
    period: '테크 주도',
    weekLabel: 'Step 3 · 프론트 및 백엔드 개발',
    week: ['디자인을 실제 작동하는 코드로 구현해요.'],
    sessions: [
      '· 개발 효율을 위한 기술 스택 선정 및 아키텍처 설계',
      '· 프론트엔드 UI 구현 및 백엔드 API, DB 연동',
      '· GitHub를 통한 코드 리뷰 및 협업',
    ],
    goals: [
      '· 실제 작동하는 웹/앱 프로덕트 베이스',
      '· 개발 환경 세팅 및 배포 파이프라인 구축',
      '· 런칭 전 꼼꼼한 버그 수정 및 QA (품질 검증)',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · 서비스 유지보수',
  },
  {
    id: '4',
    label: '4. 런칭 및 운영',
    period: '전 파트 공통',
    weekLabel: 'Step 4 · 서비스 런칭 및 고도화',
    week: ['진짜 유저를 만나고 서비스를 발전시켜요.'],
    sessions: [
      '· 앱 스토어 및 웹 도메인을 통한 서비스 최종 런칭',
      '· 배포 이후 발생하는 버그 픽스 및 성능 리팩토링',
      '· 런칭 회고를 바탕으로 다음 버전 논의',
    ],
    goals: [
      '· 세상에 공개된 SDP만의 지속가능한 IT 서비스',
      '· 런칭 회고록 및 트러블슈팅 문서',
      '· 차학기 고도화를 위한 인수인계 플랜',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · 새로운 임팩트 준비',
  },
]

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState<string>('1')

  const currentProgram =
    PROGRAM_DATA.find((p) => p.id === activeTab) || PROGRAM_DATA[0]

  return (
    <div className="flex w-full max-w-[1920px] flex-col items-start justify-center gap-9 bg-black px-4 pt-[160px] pb-[104px] md:px-12 xl:px-[360px]">
      <div className="flex flex-col gap-4 self-stretch">
        <div className="flex items-center gap-4 self-stretch">
          <h2 className="h2 text-white">프로덕트 메이킹</h2>

          <div className="body1 text-sdp-main-primary border-sdp-main-primary flex h-[42px] w-[144px] shrink-0 flex-col items-center justify-center rounded-[20px] border-[1.333px] px-[13.333px] pt-[4px] pb-[6px] leading-[22px] font-semibold">
            18기 로드맵
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <p className="h4 text-sdp-grey-400">
            아이디어가 실제 작동하는 서비스로 완성되기까지, SDP가 거쳐가는
            과정을 소개해요.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 self-stretch xl:flex-row">
        <div className="flex w-full shrink-0 flex-wrap items-start gap-4 xl:w-[172px] xl:flex-col xl:flex-nowrap">
          {PROGRAM_DATA.map((program) => (
            <Button
              key={program.id}
              variant="v1"
              isActive={activeTab === program.id}
              onClick={() => setActiveTab(program.id)}
              width="100%"
              className="h-auto! min-h-[53px] items-center justify-center px-4 py-2.5 text-center leading-snug whitespace-normal"
            >
              {program.label}
            </Button>
          ))}
        </div>

        <div className="w-full max-w-[1055px]">
          <QuarterCard
            period={currentProgram.period}
            sessions={currentProgram.sessions}
            goals={currentProgram.goals}
            week={currentProgram.week}
            schedule={currentProgram.schedule}
            notice={currentProgram.notice}
            weekLabel={currentProgram.weekLabel}
            sessionsLabel={currentProgram.sessionsLabel}
            goalsLabel={currentProgram.goalsLabel}
          />
        </div>
      </div>
    </div>
  )
}
