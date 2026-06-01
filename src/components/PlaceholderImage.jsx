export default function PlaceholderImage({ label, aspect = '16/10', style = {} }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: aspect,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: 13,
        fontWeight: 500,
        overflow: 'hidden',
        ...style,
      }}
    >
      {label}
    </div>
  )
}
