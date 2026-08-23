import { HeroBannerCard } from '@/components/common/Card'

const TALENTS = [
  {
    title: 'Ownership',
    description:
      '내 파트의 업무가 끝났다고 책임마저 끝나는 건 아니에요. 기획안, 디자인 시안, 코드 한 줄이 모여 결국 하나의 살아있는 서비스로 연결되어야 하니까요. 내 역할에만 갇히지 않고 어떻게든 되게 만들 방법을 함께 고민하며,\n마침내 유저가 만나는 프로덕트로 완성해 내는 끈기를 기대해요.',
  },
  {
    title: 'Openness',
    description:
      '최고의 결과물을 위해 기분 좋은 타협은 경계해요. 리서치, 디자인, 테크가 서로 다른 관점과 언어로 최선의 답을 찾아가요. 내 생각도 언제든 틀릴 수 있다는 걸 인정하고, 직군을 넘어선 피드백마저 성장의 동력으로 삼는 태도를 원해요.',
  },
  {
    title: 'Impact',
    description:
      "기획자의 논리, 디자이너의 시각, 개발자의 기술이 하나로 모여 '지속가능성'이라는 뚜렷한 목표를 향해\n달려가요. 세상에 필요한 가치를 깊게 파고들며, 실제로 작동하는 임팩트를 함께 만들어갈 분을 기다려요.",
  },
]

const TalentSection = () => {
  return (
    <section style={{ marginTop: '154.63px' }} className="flex justify-center">
      <div className="flex flex-col items-start">
        {/* 타이틀 */}
        <p className="h1" style={{ color: 'var(--color-sdp-grey-900)' }}>
          SDP 인재상
        </p>
        <p
          className="h4-m"
          style={{ color: 'var(--color-sdp-grey-400)', marginTop: '17px' }}
        >
          세상을 바라보는 새로운 시선
        </p>

        {/* 카드 리스트 */}
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

export default TalentSection
