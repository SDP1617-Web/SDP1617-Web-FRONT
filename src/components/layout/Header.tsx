import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/nav";

const headerTextStyle: CSSProperties = {
  fontFamily: "Pretendard",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "18px",
  letterSpacing: "0%",
  verticalAlign: "middle",
  color: "#141414",
};

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-[2px]"
      style={{
        height: "86px",
        backgroundColor: "#FFFFFF8C",
        boxShadow: "0px 4px 6px -1px #0000001A, 0px 2px 4px -1px #0000000F",
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div
          style={{ width: "1200px", height: "45px" }}
          className="flex items-center justify-between"
        >
          {/* 로고 */}
          <Link href="/">
            <Image
              src="/header-logo.svg"
              alt="SDP 로고"
              width={253}
              height={45}
              priority
            />
          </Link>

          {/* 네비게이션 */}
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={headerTextStyle}
                className="hover:opacity-70 transition-opacity duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* 지원하기 버튼 */}
            <Link
              href="/apply"
              className="text-white transition-opacity duration-200 hover:opacity-80 flex items-center justify-center"
              style={{
                ...headerTextStyle,
                color: "#ffffff",
                backgroundColor: "#141414",
                width: "78px",
                height: "38px",
                borderRadius: "8px",
                padding: "10px",
                gap: "10px",
              }}
              >
              지원하기
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}