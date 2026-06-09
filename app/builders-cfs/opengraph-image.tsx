/**
 * Dynamic OG image for /builders-cfs root.
 * 1200x630 generated at build / on demand via Next.js ImageResponse.
 */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CFS — The Sellout Engine for Bengaluru Builders';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#08080A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          fontFamily: 'system-ui',
          position: 'relative'
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            color: '#C8FF00',
            fontSize: 18,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontWeight: 600
          }}
        >
          <span>CFS</span>
          <span style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.2)' }} />
          <span style={{ color: '#A8A8A8' }}>BUILDERS</span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              fontSize: 92,
              color: '#FFFFFF',
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.02,
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            The Sellout Engine
          </div>
          <div
            style={{
              fontSize: 92,
              color: '#C8FF00',
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.02
            }}
          >
            for Builders.
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 24,
              color: '#A8A8A8',
              maxWidth: 800,
              lineHeight: 1.4
            }}
          >
            AI sales team for builders without a CMO. Lead → Site Visit → Booking. Built once. Runs forever.
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{ display: 'flex', gap: 56, alignItems: 'flex-end' }}>
          <Stat value="₹880" label="CPL FLOOR" />
          <Stat value="11%" label="SV → BOOKING" />
          <Stat value="7-DAY" label="LAUNCH" />
        </div>

        {/* Lime accent corner */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 6,
            background: '#C8FF00'
          }}
        />
      </div>
    ),
    size
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ color: '#FFFFFF', fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>{value}</div>
      <div
        style={{
          color: '#5A5A60',
          fontSize: 13,
          letterSpacing: 3,
          textTransform: 'uppercase',
          fontWeight: 600
        }}
      >
        {label}
      </div>
    </div>
  );
}
