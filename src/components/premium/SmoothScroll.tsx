'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile and track resize
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // No-op for mobile hydration to avoid full tree re-render
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 0.8,
        smoothWheel: !isMobile,
        syncTouch: false,
        touchMultiplier: 1.5,
        wheelMultiplier: isMobile ? 0 : 0.8,
        infinite: false,
      }}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}

export default SmoothScroll;
