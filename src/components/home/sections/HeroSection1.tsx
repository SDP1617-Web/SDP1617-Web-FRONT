import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const BUTTON_TOP = "819px";
const BUTTON_WIDTH = "304px";
const BUTTON_HEIGHT = "80px";
const BUTTON_BORDER_RADIUS = "999px";

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

      {/* 버튼 */}
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
  padding: "24px 32px",
  gap: "24px",
  backgroundColor: "var(--color-sdp-grey-900)",
};

const buttonTextStyle: CSSProperties = {
  fontWeight: "var(--font-bold)" as CSSProperties["fontWeight"],
  fontSize: "32px",
  lineHeight: "18px",
  textAlign: "center",
  color: "var(--color-sdp-main-primary)",
  whiteSpace: "nowrap",
};