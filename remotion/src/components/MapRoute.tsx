import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {colors, fonts} from '../theme';

export type City = {name: string; lon: number; lat: number};

// Simple equirectangular projection for a Europe frame.
const BOUNDS = {west: -11, east: 33, north: 61, south: 35};
const project = (c: {lon: number; lat: number}, w: number, h: number) => ({
  x: ((c.lon - BOUNDS.west) / (BOUNDS.east - BOUNDS.west)) * w,
  y: ((BOUNDS.north - c.lat) / (BOUNDS.north - BOUNDS.south)) * h,
});

/**
 * Old-map style journey: a red ink line runs from city to city.
 * `home` stays marked and is never revisited.
 */
export const MapRoute: React.FC<{
  route: City[];
  home: City;
  durationInFrames: number;
}> = ({route, home, durationInFrames}) => {
  const frame = useCurrentFrame();
  const W = 1920;
  const H = 1080;
  const pts = route.map((c) => project(c, W, H));
  const start = 20;
  const end = durationInFrames - 40;
  const progress = interpolate(frame, [start, end], [0, pts.length - 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const seg = Math.floor(progress);
  const frac = progress - seg;
  const drawn = pts.slice(0, seg + 1);
  if (seg < pts.length - 1) {
    const a = pts[seg];
    const b = pts[seg + 1];
    drawn.push({x: a.x + (b.x - a.x) * frac, y: a.y + (b.y - a.y) * frac});
  }
  // slightly curved ink path
  const d = drawn
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = drawn[i - 1];
      const mx = (prev.x + p.x) / 2 + (i % 2 ? 40 : -40);
      const my = (prev.y + p.y) / 2 - 30;
      return `Q ${mx} ${my} ${p.x} ${p.y}`;
    })
    .join(' ');
  const zoom = interpolate(frame, [0, durationInFrames], [1.15, 1], {extrapolateRight: 'clamp'});
  const homeP = project(home, W, H);
  return (
    <AbsoluteFill style={{backgroundColor: colors.paperFaded}}>
      <AbsoluteFill style={{transform: `scale(${zoom})`}}>
        {/* aged parchment */}
        <AbsoluteFill
          style={{
            background: `radial-gradient(ellipse at 50% 45%, ${colors.paper} 0%, ${colors.paperFaded} 55%, #9c8565 100%)`,
          }}
        />
        <svg width={W} height={H} style={{position: 'absolute', inset: 0}}>
          <filter id="map-stain">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves={4} seed={11} />
            <feColorMatrix type="matrix" values="0 0 0 0 0.35  0 0 0 0 0.24  0 0 0 0 0.14  0 0 0 0.35 0" />
          </filter>
          <rect width={W} height={H} filter="url(#map-stain)" />
          {/* graticule */}
          {Array.from({length: 9}).map((_, i) => (
            <line key={`v${i}`} x1={(i + 1) * (W / 10)} y1={0} x2={(i + 1) * (W / 10)} y2={H} stroke={colors.ink} strokeOpacity={0.12} strokeDasharray="4 10" />
          ))}
          {Array.from({length: 5}).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={(i + 1) * (H / 6)} x2={W} y2={(i + 1) * (H / 6)} stroke={colors.ink} strokeOpacity={0.12} strokeDasharray="4 10" />
          ))}
          {/* compass rose */}
          <g transform={`translate(${W - 200}, ${H - 200})`} stroke={colors.ink} strokeOpacity={0.5} fill="none">
            <circle r={70} />
            <circle r={52} strokeDasharray="2 6" />
            <path d="M0 -90 L12 0 L0 90 L-12 0 Z" fill={colors.ink} fillOpacity={0.35} />
            <path d="M-90 0 L0 12 L90 0 L0 -12 Z" fill={colors.ink} fillOpacity={0.2} />
          </g>
          {/* route */}
          <path d={d} fill="none" stroke={colors.rust} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" opacity={0.9} />
          {/* home (never revisited) */}
          <g transform={`translate(${homeP.x}, ${homeP.y})`}>
            <circle r={16} fill="none" stroke={colors.burgundy} strokeWidth={4} />
            <circle r={6} fill={colors.burgundy} />
          </g>
          {/* cities reached */}
          {pts.map((p, i) => {
            const reached = i <= progress + 0.001;
            if (!reached) return null;
            const pop = Math.min(1, (progress - i) * 3 + 1);
            return <circle key={i} cx={p.x} cy={p.y} r={9 * pop} fill={colors.rust} opacity={0.85} />;
          })}
        </svg>
        {/* labels */}
        {route.map((c, i) => {
          if (i > progress + 0.001) return null;
          const p = pts[i];
          return (
            <div key={c.name + i} style={{position: 'absolute', left: p.x + 16, top: p.y - 40, fontFamily: fonts.mono, fontSize: 28, color: colors.ink}}>
              {c.name}
            </div>
          );
        })}
        <div style={{position: 'absolute', left: homeP.x + 24, top: homeP.y + 8, fontFamily: fonts.mono, fontSize: 30, color: colors.burgundy, fontWeight: 700}}>
          {home.name}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
