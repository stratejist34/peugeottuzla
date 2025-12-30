'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{
      lerp: 0.1,
      duration: 1.2, // Reduced from 1.5s for snappier feel
      smoothWheel: true,
      touchMultiplier: 2 // Improved touch responsiveness on mobile
    }}>
      {children as any}
    </ReactLenis>
  );
}

export default SmoothScroll;
