import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'kolweb3.com — Crypto KOL & Influencer Marketing Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0A0A0F 0%, #12121A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient blob */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" fill="white" fillOpacity="0.9"/>
            </svg>
          </div>
          <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'white' }}>kolweb3.com</span>
        </div>
        {/* Headline */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: '900px',
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Crypto KOL & Influencer Marketing Agency
        </div>
        {/* Sub */}
        <div style={{ fontSize: '22px', color: '#9CA3AF', marginTop: '20px', textAlign: 'center' }}>
          $3.1M+ Managed · $1B+ TVL · 55,000+ Community Members
        </div>
        {/* Stats row */}
        <div style={{ display: 'flex', gap: '24px', marginTop: '40px' }}>
          {['Web3', 'DeFi', 'RWA', 'iGaming', 'Fintech'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '999px',
                color: '#9CA3AF',
                fontSize: '16px',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
