import type { CSSProperties } from "react";

interface FaqTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const baseStyle: CSSProperties = {
  display: "flex",
  width: "123px",
  padding: "8px 0",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  cursor: "pointer",
};

export default function FaqTab({ label, isActive, onClick }: FaqTabProps) {
  return (
    <div
      style={{
        ...baseStyle,
        borderBottom: isActive ? "2px solid var(--color-sdp-grey-900)" : "none",
        color: isActive ? "var(--color-sdp-grey-900)" : "var(--color-sdp-grey-300)",
        fontWeight: isActive ? 700 : 400,
        fontSize: isActive ? "21px" : "20px",
        lineHeight: isActive ? "31px" : "28px",
      }}
      onClick={onClick}
    >
      {label}
    </div>
  );
}