import { StatCard } from '@/components/common/Card'

const STATS_CARDS = [
  { title: '몇 기수?', value: '17', unit: '기' },
  { title: '환경을 위한 프로젝트', value: '545', unit: '개' },
  { title: '관심 지원자', value: '340', unit: '명' },
  { title: '몇 기수?', value: '17', unit: '기' },
]

const StatsSection = () => {
  return (
    <section
      style={{ marginTop: '120px', marginBottom: '121px' }}
      className="flex justify-center"
    >
      <div style={{ width: '1202px' }} className="flex flex-col">
        {/* 타이틀 */}
        <p className="h2" style={{ color: 'var(--color-sdp-grey-900)' }}>
          성장하는 학회
        </p>

        {/* 카드 2x2 그리드 */}
        <div
          style={{ marginTop: '36px', gap: '25px' }}
          className="grid grid-cols-2"
        >
          {STATS_CARDS.map((card, i) => (
            <StatCard
              key={i}
              title={card.title}
              value={card.value}
              unit={card.unit}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
