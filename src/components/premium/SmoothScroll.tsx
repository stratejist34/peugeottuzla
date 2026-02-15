'use client';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect mobile and track resize
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Render children directly on the server or before client-side mount
  if (!mounted) {
    return <>{children}</>;
  }

  // Disable Lenis on mobile to reduce first-load CPU/reflow cost.
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2, // Updated duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Updated easing
        smoothWheel: true, // Updated smoothWheel
        wheelMultiplier: 1, // Updated wheelMultiplier
        touchMultiplier: 2, // Updated touchMultiplier
        infinite: false,
      }}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}

export default SmoothScroll;
