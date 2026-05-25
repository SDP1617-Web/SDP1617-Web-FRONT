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
    label: '1분기',
    period: '웹/앱 공통 세션',
    weekLabel: '1주차 · OT & 팀빌딩',
    week: ['학회 소개 & 프로젝트 방향 설정'],
    sessions: [
      '· 학회 운영 방식과 프로젝트 프로세스 소개',
      '· 기수별 대표 프로젝트 사례 공유',
      '· 팀 매칭 및 관심 도메인 정하기',
    ],
    goals: [
      '· 팀별 주제 후보 2~3개 브레인스토밍',
      '· 타깃 사용자 및 문제 상황 러프 스케치',
      '· 다음 주까지 리서치 해야 할 리스트 정리',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · 2주차 문제 정의 & 리서치',
  },
  {
    id: '2',
    label: '2분기',
    period: '웹/앱 공통 세션',
    weekLabel: '2주차',
    week: ['학회 소개 & 프로젝트 방향 설정'],
    sessions: [
      '· 학회 운영 방식과 프로젝트 프로세스 소개',
      '· 기수별 대표 프로젝트 사례 공유',
      '· 팀 매칭 및 관심 도메인 정하기',
    ],
    goals: [
      '· 팀별 주제 후보 2~3개 브레인스토밍',
      '· 타깃 사용자 및 문제 상황 러프 스케치',
      '· 다음 주까지 리서치 해야 할 리스트 정리',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · 2주차 문제 정의 & 리서치',
  },
  {
    id: '3',
    label: '3분기',
    period: '웹/앱 공통 세션',
    weekLabel: '3주차',
    week: ['학회 소개 & 프로젝트 방향 설정'],
    sessions: [
      '· 학회 운영 방식과 프로젝트 프로세스 소개',
      '· 기수별 대표 프로젝트 사례 공유',
      '· 팀 매칭 및 관심 도메인 정하기',
    ],
    goals: [
      '· 팀별 주제 후보 2~3개 브레인스토밍',
      '· 타깃 사용자 및 문제 상황 러프 스케치',
      '· 다음 주까지 리서치 해야 할 리스트 정리',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · 2주차 문제 정의 & 리서치',
  },
  {
    id: '4',
    label: '4분기',
    period: '웹/앱 공통 세션',
    weekLabel: '4주차',
    week: ['학회 소개 & 프로젝트 방향 설정'],
    sessions: [
      '· 학회 운영 방식과 프로젝트 프로세스 소개',
      '· 기수별 대표 프로젝트 사례 공유',
      '· 팀 매칭 및 관심 도메인 정하기',
    ],
    goals: [
      '· 팀별 주제 후보 2~3개 브레인스토밍',
      '· 타깃 사용자 및 문제 상황 러프 스케치',
      '· 다음 주까지 리서치 해야 할 리스트 정리',
    ],
    schedule: '활동 시간 · 7시~10시',
    notice: '다음 단계 · 2주차 문제 정의 & 리서치',
  },
]

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState<string>('1')

  const currentProgram =
    PROGRAM_DATA.find((p) => p.id === activeTab) || PROGRAM_DATA[0]

  return (
    <div className="flex w-[1920px] max-w-full flex-col items-start justify-center gap-9 bg-black px-[360px] pt-[160px] pb-[104px]">
      <div className="flex flex-col gap-4 self-stretch">
        <div className="flex items-center gap-4 self-stretch">
          <h2 className="h2 text-white">분기별 프로그램</h2>

          <div className="body1 text-sdp-main-primary border-sdp-main-primary flex h-[42px] w-[144px] shrink-0 flex-col items-center justify-center rounded-[20px] border-[1.333px] px-[13.333px] pt-[4px] pb-[6px] leading-[22px] font-semibold">
            17기 커리큘럼
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch">
          <p className="h4 text-sdp-grey-400">
            1주차 오리엔테이션부터 릴리즈까지, 학습 흐름을 직관적으로 확인해
            보세요.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-4 self-stretch">
        <div className="flex w-[129px] shrink-0 flex-col items-start gap-4">
          {PROGRAM_DATA.map((program) => (
            <Button
              key={program.id}
              variant="v1"
              isActive={activeTab === program.id}
              onClick={() => setActiveTab(program.id)}
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
