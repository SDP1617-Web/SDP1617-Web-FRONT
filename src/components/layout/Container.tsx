//내부 콘텐츠 너비 wrapper

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      style={{ maxWidth: "var(--width-content)" }}
      className={`mx-auto px-10 ${className}`}
    >
      {children}
    </div>
  );
}