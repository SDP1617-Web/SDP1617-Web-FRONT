import { HeroBannerCard } from '@/components/common/Card'

const TALENTS = [
  {
    title: '인재상1',
    description: '최신 기술 스택을 사용한 종단 간\n제품 구축 및 프로젝트 수행.',
  },
  {
    title: '인재상2',
    description: '최신 기술 스택을 사용한 종단 간\n제품 구축 및 프로젝트 수행.',
  },
  {
    title: '인재상3',
    description: '최신 기술 스택을 사용한 종단 간\n제품 구축 및 프로젝트 수행.',
  },
]

export default function TalentSection() {
  return (
    <section style={{ marginTop: '154.63px' }} className="flex justify-center">
      <div className="flex flex-col items-start">
        <p className="h1" style={{ color: 'var(--color-sdp-grey-900)' }}>
          SDP 인재상
        </p>
        <p
          className="h4-m"
          style={{ color: 'var(--color-sdp-grey-400)', marginTop: '17px' }}
        >
          단순한 동아리가 아닌, 혁신가를 위한 생태계입니다.
        </p>
        <div
          className="flex flex-col"
          style={{ marginTop: '36px', gap: '32px' }}
        >
          {TALENTS.map((talent, i) => (
            <HeroBannerCard
              key={i}
              subTitle={talent.title}
              title={talent.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
