export function SectionLabel({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <span className={`tag-label ${onDark ? "tag-label--on-dark" : ""}`}>
      <span aria-hidden className="text-[10px]">
        ◆
      </span>
      {children}
    </span>
  );
}
