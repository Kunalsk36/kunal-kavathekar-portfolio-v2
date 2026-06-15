'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true once the page has been scrolled past the given threshold.
 * @param {number} threshold - scroll distance in pixels (default 20)
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
