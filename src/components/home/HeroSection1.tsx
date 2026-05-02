import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

// 상수
const HERO_HEIGHT = "100vh";
const BUTTON_TOP = "819px";

const BUTTON_BG = "#141414";
const BUTTON_TEXT_COLOR = "#CCFB55";
const BUTTON_FONT_FAMILY = "Pretendard Variable";

const BUTTON_WIDTH = "304px";
const BUTTON_HEIGHT = "80px";
const BUTTON_BORDER_RADIUS = "999px";
const BUTTON_FONT_SIZE = "32px";

export default function HeroSection1() {
  return (
    <section className="relative w-full" style={{ height: HERO_HEIGHT }}>
      {/* 배경 SVG */}
      <Image
        src="/hero-bg.svg"
        alt="hero background"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* 버튼 — 수직 top 고정, 수평 중앙 */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: BUTTON_TOP }}
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
  width: BUTTON_WIDTH,
  height: BUTTON_HEIGHT,
  borderRadius: BUTTON_BORDER_RADIUS,
  paddingTop: "24px",
  paddingBottom: "24px",
  paddingLeft: "32px",
  paddingRight: "32px",
  gap: "24px",
  backgroundColor: BUTTON_BG,
};

const buttonTextStyle: CSSProperties = {
  fontFamily: BUTTON_FONT_FAMILY,
  fontWeight: 700,
  fontSize: BUTTON_FONT_SIZE,
  lineHeight: "18px",
  letterSpacing: "0%",
  textAlign: "center",
  verticalAlign: "middle",
  color: BUTTON_TEXT_COLOR,
  whiteSpace: "nowrap",
};