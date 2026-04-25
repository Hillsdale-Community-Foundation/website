'use client';

import { useEffect } from 'react';
import { StatsigClient } from '@statsig/js-client';

let statsigClient: StatsigClient | null = null;

/**
 * Returns the initialized Statsig client instance, or null if not yet initialized.
 */
export function getStatsigClient(): StatsigClient | null {
  return statsigClient;
}

/**
 * Initializes Statsig and logs a page_view event.
 * Renders nothing – side-effects only.
 */
export default function StatsigProvider() {
  useEffect(() => {
    const sdkKey = process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY;
    if (!sdkKey) return;

    const client = new StatsigClient(sdkKey, {});
    let isMounted = true;
    statsigClient = client;

    client.initializeAsync().then(() => {
      if (!isMounted) return;
      client.logEvent('page_view');
    }).catch((err: unknown) => {
      if (!isMounted) return;
      console.error('[Statsig] initialization failed:', err);
    });

    return () => {
      isMounted = false;
      client.shutdown();
      statsigClient = null;
    };
  }, []);

  return null;
}
