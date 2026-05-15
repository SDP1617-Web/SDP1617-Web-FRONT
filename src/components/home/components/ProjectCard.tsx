import type { CSSProperties } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
}

const cardStyle: CSSProperties = {
  width: "382px",
  height: "498px",
  backgroundColor: "var(--color-sdp-grey-800)",
  borderRadius: "40px",
  border: "1px solid var(--color-sdp-grey-900)",
  position: "relative",
  overflow: "hidden",
  flexShrink: 0,
};

const cardTitleStyle: CSSProperties = {
  color: "var(--color-sdp-grey-50)",
  position: "absolute",
  top: "344px",
  left: "32px",
  right: "32px",
};

const cardDescStyle: CSSProperties = {
  color: "var(--color-sdp-grey-400)",
  position: "absolute",
  top: "402px",
  left: "32px",
  right: "32px",
  whiteSpace: "pre-line",
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div style={cardStyle}>
      <p className="h2" style={cardTitleStyle}>{title}</p>
      <p className="body1" style={cardDescStyle}>{description}</p>
    </div>
  );
}