export default function IntroSection() {
  return (
    <section style={{ marginTop: "151px" }} className="flex flex-col items-center">
      <div className="h1 text-center" style={{ color: "var(--color-sdp-grey-900)" }}>
        <p>
          학부생 주도로 설립된{" "}
          <span className="gradient-text-korean">한국 최초의</span>
        </p>
        <p>
          <span className="gradient-text-korean">지속가능성 글로벌 리더십 프로그램</span>
        </p>
      </div>

      <p className="h1 text-center" style={{ marginTop: "46px" }}>
        <span className="gradient-text-english">
          Where Innovation Meets Responsibility
        </span>
      </p>
    </section>
  );
}