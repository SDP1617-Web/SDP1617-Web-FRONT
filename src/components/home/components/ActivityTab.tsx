import type { CSSProperties } from "react";
import Image from "next/image";

const ACTIVE_CLASS = "h4";
const INACTIVE_CLASS = "h4-m";
const ARROW_ICON = "/right-arrow.svg";
const TAB_WIDTH = 301;
const ARROW_SIZE = 20;

interface ActivityTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const baseStyle: CSSProperties = {
  display: "flex",
  width: "301px",
  padding: "17px",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px",
  cursor: "pointer",
};

const activeStyle: CSSProperties = {
  ...baseStyle,
  background: "var(--color-sdp-main-secondary)",
  color: "var(--color-sdp-grey-900)",
};

const inactiveStyle: CSSProperties = {
  ...baseStyle,
  color: "var(--color-sdp-grey-500)",
};

export default function ActivityTab({ label, isActive, onClick }: ActivityTabProps) {
  return (
    <div style={isActive ? activeStyle : inactiveStyle} onClick={onClick}>
      <span className={isActive ? ACTIVE_CLASS : INACTIVE_CLASS}>{label}</span>
      <Image src={ARROW_ICON} alt="arrow" width={ARROW_SIZE} height={ARROW_SIZE} />
    </div>
  );
}