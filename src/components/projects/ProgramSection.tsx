'use client'

import { useState } from 'react'
import { Button } from '@/components/common/Button'
import { QuarterCard } from '@/components/common/Card'

type QuarterKey = '1분기' | '2분기' | '3분기' | '4분기'

const QUARTER_DATA: Record<
  QuarterKey,
  {
    title: string
    sessions: string[]
    goals: string[]
    support: string
    period: string
    schedule: string
  }
> = {
  '1분기': {
    title: '오리엔테이션 & 프로젝트 방향 설정',
    sessions: [
      '팀원 소개 및 프로젝트 방향 소개',
      '기술에 대한 트도즈하는 사례 공유',
      '팀 빌드 및 각자 도메인별 정리하기',
    ],
    goals: [
      '탐색 후에 후보에 2-3개 아이디어스토링',
      '다각 시각이 날 것도 상대 사용 스에치',
      '다음 주의 시시에 레이블 스포트 결과',
    ],
    support: '팀 빌더, 슬랙 채널, 도구 공유',
    period: '팀별 중심 이번',
    schedule: '매주 월 7시 ~ 9시',
  },
  '2분기': {
    title: '프로덕트 설계 & 프로토타입 제작',
    sessions: [
      '사용자 리서치 방법론 소개',
      '와이어프레임 & 프로토타입 워크숍',
      '피드백 세션 및 방향 수정',
    ],
    goals: [
      '사용자 인터뷰 2명 이상 진행',
      '핵심 기능 3가지 확정',
      '프로토타입 1차 버전 완성',
    ],
    support: '디자인 툴 지원, 멘토링',
    period: '매주 화 오후',
    schedule: '매주 화 7시 ~ 9시',
  },
  '3분기': {
    title: '개발 & 구현',
    sessions: [
      '프론트엔드 개발 스프린트',
      '백엔드 API 연동',
      '코드 리뷰 및 QA',
    ],
    goals: [
      '핵심 기능 MVP 구현 완료',
      '사용자 테스트 1회 이상',
      '버그 수정 및 성능 개선',
    ],
    support: '개발 환경 세팅, 기술 멘토링',
    period: '매주 수 오후',
    schedule: '매주 수 7시 ~ 9시',
  },
  '4분기': {
    title: '최종 발표 & 회고',
    sessions: [
      '최종 데모데이 발표 준비',
      '팀별 회고 세션',
      '수료식 및 네트워킹',
    ],
    goals: [
      '완성된 프로덕트 시연',
      '팀원 피드백 정리',
      '다음 단계 로드맵 작성',
    ],
    support: '발표 코칭, 영상 촬영',
    period: '매주 목 오후',
    schedule: '매주 목 7시 ~ 9시',
  },
}

const QUARTERS: QuarterKey[] = ['1분기', '2분기', '3분기', '4분기']

export const ProgramSection = () => {
  const [activeQuarter, setActiveQuarter] = useState<QuarterKey>('1분기')
  const data = QUARTER_DATA[activeQuarter]

  return (
    <section className="bg-sdp-grey-900 px-16 py-16">
      <div className="mx-auto max-w-[1160px]">
        {/* 헤더 */}
        <div className="mb-2 flex items-center gap-3">
          <h2 className="text-sdp-grey-100 text-[28px] leading-[38px] font-bold">
            분기별 프로그램
          </h2>
          <span className="bg-sdp-main-primary rounded-full px-3 py-1 text-[14px] font-semibold text-black">
            17기 커리큘럼
          </span>
        </div>
        <p className="text-sdp-grey-500 mb-8 text-[16px] leading-[24px]">
          1주차 오리엔테이션(세션)부터 밀리스톤까지, 학습 흐름을 직관적으로
          확인해 보세요.
        </p>

        {/* 본문 레이아웃: 탭(왼쪽) + 카드(오른쪽) */}
        <div className="flex items-start gap-8">
          {/* 분기 탭 버튼 */}
          <div className="flex flex-col gap-3">
            {QUARTERS.map((q) => (
              <Button
                key={q}
                variant="v2"
                isActive={activeQuarter === q}
                onClick={() => setActiveQuarter(q)}
              >
                {q}
              </Button>
            ))}
          </div>

          {/* QuarterCard */}
          <div className="flex-1">
            {/* 카드 상단: 주차 타이틀 */}
            <div className="mb-4">
              <p className="text-sdp-grey-400 text-[16px] leading-[24px] font-medium">
                {activeQuarter === '1분기'
                  ? '1주 ~ OT & 친밀감'
                  : activeQuarter === '2분기'
                    ? '2주 ~ 리서치 & 설계'
                    : activeQuarter === '3분기'
                      ? '3주 ~ 개발 스프린트'
                      : '4주 ~ 마무리 & 발표'}
              </p>
              <h3 className="text-sdp-grey-100 text-[22px] leading-[32px] font-semibold">
                {data.title}
              </h3>
            </div>

            <QuarterCard
              sessions={data.sessions}
              goals={data.goals}
              support={data.support}
              period={data.period}
              schedule={data.schedule}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
