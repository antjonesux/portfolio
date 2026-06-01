export default function Logo({ size = 32 }) {
  /* Replace this SVG with your actual logo */
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <circle cx="20" cy="15" r="7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <path
        d="M8 35c0-8 5.5-13 12-13s12 5 12 13"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
