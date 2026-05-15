"use client";

import { useState } from "react";
import FaqTab from "../components/FaqTab";
import FaqAccordion from "../components/FaqAccordion";

const TABS = ["지원자격", "면접관련", "활동관련"];

const FAQ_DATA: Record<string, { question: string; answer: string }[]> = {
  지원자격: Array(5).fill({
    question: "지원 가능한 나이가 어떻게 되나요?",
    answer: "지원 가능한 나이가 어떻게 되나요?",
  }),
  면접관련: Array(5).fill({
    question: "지원 가능한 나이가 어떻게 되나요?",
    answer: "지원 가능한 나이가 어떻게 되나요?",
  }),
  활동관련: Array(5).fill({
    question: "지원 가능한 나이가 어떻게 되나요?",
    answer: "지원 가능한 나이가 어떻게 되나요?",
  }),
};

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState("지원자격");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordion = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section style={{ marginTop: "220px" }} className="flex justify-center">
      <div style={{ width: "1202px" }} className="flex flex-col">
        {/* 타이틀 */}
        <p className="h2" style={{ color: "var(--color-sdp-grey-900)", marginBottom: "36px" }}>
          자주 묻는 질문
        </p>

        {/* 탭 */}
        <div className="flex flex-row" style={{ marginBottom: "36px" }}>
          {TABS.map((tab) => (
            <FaqTab
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveIndex(null);
              }}
            />
          ))}
        </div>

        {/* 아코디언 */}
        <div className="flex flex-col">
          {FAQ_DATA[activeTab].map((item, i) => (
            <FaqAccordion
              key={i}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === i}
              onClick={() => handleAccordion(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}