import Image from "next/image";

const STATS_CARDS = [
  { src: "/stats-card1.svg", alt: "몇 기수?" },
  { src: "/stats-card2.svg", alt: "환경을 위한 프로젝트" },
  { src: "/stats-card3.svg", alt: "관심 지원자" },
  { src: "/stats-card1.svg", alt: "몇 기수?" },
];

export default function StatsSection() {
  return (
    <section style={{ marginTop: "120px", marginBottom: "121px" }} className="flex justify-center">
      <div style={{ width: "1202px" }} className="flex flex-col">
        {/* 타이틀 */}
        <p className="h2" style={{ color: "var(--color-sdp-grey-900)" }}>
          성장하는 학회
        </p>

        {/* 카드 2x2 그리드 */}
        <div
          style={{ marginTop: "36px", gap: "25px" }}
          className="grid grid-cols-2"
        >
          {STATS_CARDS.map((card) => (
            <Image
              key={card.src}
              src={card.src}
              alt={card.alt}
              width={588}
              height={160}
              style={{ width: "588px", height: "auto" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}