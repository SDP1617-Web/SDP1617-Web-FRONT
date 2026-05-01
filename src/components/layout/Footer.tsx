import type { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: "#0a0a0a" }}>
      <div
        style={{ width: "100%", height: "150px", paddingLeft: "70px" }}
        className="flex flex-col justify-center gap-6"
      >
        {/* 로고 */}
        <div className="flex flex-col gap-1">
          <span style={footerTextStyle}>Sustainable Development Program</span>
          <span style={footerTextStyle}>SDP (지속가능발전학회)</span>
        </div>

        {/* 카피라이트 */}
        <p style={footerTextStyle}>© SDP All Rights Reserved</p>
      </div>
    </footer>
  );
}

const footerTextStyle: React.CSSProperties = {
  fontFamily: "Pretendard",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "130%",
  letterSpacing: "0%",
  verticalAlign: "middle",
  color: "#979797",
};