'use client';
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{
      lerp: 0.05, // Very low for minimal CPU usage
      duration: 0.8, // Faster than before
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.8, // Less aggressive
      infinite: false,
    }}>
      {children as any}
    </ReactLenis>
  );
}

export default SmoothScroll;
