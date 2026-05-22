import DepartmentCard from "./DepartmentCard";

const DEPARTMENTS = [
  { korean: "대외협력", english: "Research", isActive: true },
  { korean: "대외홍보", english: "Design", isActive: false },
  { korean: "경영지원", english: "Tech", isActive: false },
];

export default function DepartmentSection() {
  return (
    <section
      style={{ marginTop: "193px", marginBottom: "250px" }}
      className="flex justify-center"
    >
      <div style={{ width: "1202px" }} className="flex flex-col">
        {/* 타이틀 */}
        <p className="h1" style={{ color: "var(--color-sdp-grey-900)", marginBottom: "36px" }}>
          행정부서 소개
        </p>

        {/* 카드 */}
        <div className="flex flex-row" style={{ gap: "24px" }}>
          {DEPARTMENTS.map((dept, i) => (
            <DepartmentCard
              key={i}
              korean={dept.korean}
              english={dept.english}
              isActive={dept.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}