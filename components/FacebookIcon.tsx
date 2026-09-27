export function FacebookIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.55-1.5H16.6V4.3c-.27-.04-1.2-.11-2.28-.11-2.26 0-3.82 1.38-3.82 3.9V10.5H8v3h2.5V21h3z"
        fill="currentColor"
      />
    </svg>
  );
}
