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

  // Disable SmoothScroll on mobile for performance (eliminates forced reflows)
  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{
      lerp: 0.05, // Very low for minimal CPU usage
      duration: 0.8, // Faster than before
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.8, // Less aggressive
      infinite: false,
    }}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {children as any}
    </ReactLenis>
  );
}

export default SmoothScroll;
