import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection1() {
  return (
    <section className="relative w-full" style={{ height: "100vh" }}>
      {/* 배경 SVG */}
      <Image
        src="/hero-bg.svg"
        alt="hero background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* 버튼 — 수직 top: 819px, 수평 중앙 */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: "819px" }}
      >
        <Link href="/apply" style={buttonStyle}>
          <span style={buttonTextStyle}>학회 지원하기</span>
        </Link>
      </div>
    </section>
  );
}

const buttonStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "304px",
  height: "80px",
  borderRadius: "999px",
  paddingTop: "24px",
  paddingBottom: "24px",
  paddingLeft: "32px",
  paddingRight: "32px",
  gap: "24px",
  backgroundColor: "#141414",
};

const buttonTextStyle: CSSProperties = {
  fontFamily: "Pretendard Variable",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "18px",
  letterSpacing: "0%",
  textAlign: "center",
  verticalAlign: "middle",
  color: "#CCFB55",
  whiteSpace: "nowrap",
};