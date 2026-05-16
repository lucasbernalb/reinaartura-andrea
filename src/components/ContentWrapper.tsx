'use client';

import { ReactNode } from 'react';

/**
 * Wraps page content with the pageIn crossfade animation.
 * Only runs on first mount (full page load) — persists across
 * client-side navigations so the animation never restarts.
 */
export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div style={{ animation: 'pageIn 0.8s ease 4.8s forwards', opacity: 0 }}>
      {children}
    </div>
  );
}
