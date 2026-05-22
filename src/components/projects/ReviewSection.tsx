import { ReviewCard } from '@/components/common/Card'

const REVIEWS = [
  {
    id: 1,
    name: '이서연',
    cohort: '16기 · 프론트엔드 개발',
    text: '디자인 시스템과 컴포넌트 구조를 같이 정의하면서 협업하는 방법을 자연스럽게 배울 수 있었어요. 코드 리뷰 문화도 큰 도움이 됐습니다.',
  },
  {
    id: 2,
    name: '박준영',
    cohort: '16기 · 개발자',
    text: '세미나에서 실무자들의 데이터 활용 사례를 들으면서, 우리가 만든 서비스에도 지표를 어떻게 녹여야 할지 감을 잡을 수 있었습니다. 감사합니다 SDP!!',
  },
  {
    id: 3,
    name: '김민솔',
    cohort: '16기 · UI/UX 디자인',
    text: '프로젝트가 단순 산출물로 끝나지 않고, 매주 세션과 피드백을 통해 점점 다듬어지는 과정이 인상 깊었어요. 실제 서비스처럼 고민해 볼 수 있는 경험이었습니다.',
  },
  {
    id: 4,
    name: '이서연',
    cohort: '16기 · 프론트엔드 개발자',
    text: '디자인 시스템과 컴포넌트 구조를 같이 정의하면서 협업하는 방법을 자연스럽게 배울 수 있었어요. 코드 리뷰 문화도 큰 도움이 됐습니다.',
  },
]

export const ReviewSection = () => {
  return (
    <section className="bg-sdp-grey-900 px-16 py-16">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-2">
          <h2 className="text-sdp-grey-100 text-[28px] leading-[38px] font-bold">
            활동 후기
          </h2>
        </div>
        <p className="text-sdp-grey-500 mb-8 text-[16px] leading-[24px]">
          기수별 프로젝트와 세션을 경험한 학원원들의 목소리입니다.
        </p>
        <div className="flex gap-5 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
          {REVIEWS.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              cohort={review.cohort}
              text={review.text}
              className="shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
