import { ExternalCard } from '@/components/common/Card'

const DEPARTMENTS = [
  {
    korean: '대외협력',
    english: 'Research',
    description:
      'SDP가 더 크게 성장할 수 있는 기회를 만들어요. 세미나와 공모전 참가를 기획하고, 다 함께 몰입할 수 있는 스터디를 운영해요.',
    isActive: false,
  },
  {
    korean: '대외홍보',
    english: 'Design',
    description:
      'SDP의 다양한 활동을 매력적으로 보여줘요. 인스타그램 카드뉴스와 세미나 포스터를 만들고, 새로운 기수를 모집하는 리크루팅 홍보를 담당해요.',
    isActive: false,
  },
  {
    korean: '경영지원',
    english: 'Tech',
    description:
      'SDP가 문제없이 원활하게 돌아가도록 챙겨요. 꼼꼼한 출석 관리부터 투명한 회계까지 전반적인 학회 운영을 돕고 있어요.',
    isActive: false,
  },
]

const DepartmentSection = () => {
  return (
    <section
      style={{ marginTop: '193px', marginBottom: '250px' }}
      className="flex justify-center"
    >
      <div style={{ width: '1202px' }} className="flex flex-col">
        {/* 타이틀 */}
        <p
          className="h1"
          style={{ color: 'var(--color-sdp-grey-900)', marginBottom: '36px' }}
        >
          행정부서 소개
        </p>

        {/* 카드 */}
        <div className="flex flex-row" style={{ gap: '24px' }}>
          {DEPARTMENTS.map((dept, i) => (
            <ExternalCard
              key={i}
              title={dept.korean}
              subTitle={dept.english}
              description={dept.description}
              isActive={dept.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DepartmentSection
