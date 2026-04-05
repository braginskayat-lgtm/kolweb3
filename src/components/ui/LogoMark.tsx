// Shared hex+lightning logo mark — used in Header and Footer
// Flat-top hexagon outline with gradient stroke + gradient lightning bolt inside
export function LogoMark({ size = 32 }: { size?: number }) {
  const id = `lg-${size}`; // unique gradient IDs per size instance
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      {/* Rounded-square background */}
      <rect width="32" height="32" rx="7" fill="#111111" />

      {/* Flat-top hexagon outline — r=12, center (16,15.5) */}
      {/* Points: 0°(28,15.5) 60°(22,25.9) 120°(10,25.9) 180°(4,15.5) 240°(10,5.1) 300°(22,5.1) */}
      <polygon
        points="28,15.5 22,25.9 10,25.9 4,15.5 10,5.1 22,5.1"
        stroke={`url(#${id}-a)`}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Lightning bolt — classic ⚡ filled shape */}
      {/* Upper arm top-right → middle-left, lower arm jag → bottom */}
      <path
        d="M 19.5 5.5 L 12 17 L 16.5 17 L 12.5 26.5 L 20 15 L 15.5 15 Z"
        fill={`url(#${id}-b)`}
      />
    </svg>
  );
}
