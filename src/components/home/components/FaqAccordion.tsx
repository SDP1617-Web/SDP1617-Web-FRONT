import type { CSSProperties } from "react";
import Image from "next/image";

const UP_ARROW = "/up-arrow.svg";
const DOWN_ARROW = "/down-arrow.svg";
const UP_ARROW_WIDTH = 26;
const UP_ARROW_HEIGHT = 16;
const DOWN_ARROW_SIZE = 40;

interface FaqAccordionProps {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}

const inactiveStyle: CSSProperties = {
  display: "flex",
  width: "1189px",
  padding: "32px 24px",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #CCC",
  cursor: "pointer",
};

const activeStyle: CSSProperties = {
  display: "flex",
  width: "1189px",
  padding: "32px 24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "25px",
  flexShrink: 0,
  background: "var(--color-sdp-grey-200)",
  cursor: "pointer",
};

export default function FaqAccordion({ question, answer, isActive, onClick }: FaqAccordionProps) {
  return (
    <div style={isActive ? activeStyle : inactiveStyle} onClick={onClick}>
      {/* 질문 행 */}
      <div style={{ width: "100%" }} className="flex justify-between items-center">
        <span className="h4" style={{ color: "var(--color-sdp-grey-600)" }}>
          {question}
        </span>
        <Image
          src={isActive ? UP_ARROW : DOWN_ARROW}
          alt="arrow"
          width={isActive ? UP_ARROW_WIDTH : DOWN_ARROW_SIZE}
          height={isActive ? UP_ARROW_HEIGHT : DOWN_ARROW_SIZE}
        />
      </div>

      {/* 답변 — 활성 시에만 */}
      {isActive && (
        <p className="body1" style={{ color: "var(--color-sdp-grey-400)" }}>
          {answer}
        </p>
      )}
    </div>
  );
}