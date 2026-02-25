import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import RootLayout from '../layout';

// Mock @statsig/js-client so tests don't make real network requests
vi.mock('@statsig/js-client', () => {
  const shutdown = vi.fn();
  const logEvent = vi.fn();
  const initializeAsync = vi.fn().mockResolvedValue(undefined);
  const StatsigClient = vi.fn().mockImplementation(() => ({
    initializeAsync,
    logEvent,
    shutdown,
  }));
  return { StatsigClient };
});

describe('RootLayout', () => {
  it('renders provided children', () => {
    render(<RootLayout><p>test child</p></RootLayout>);
    expect(screen.getByText('test child')).toBeInTheDocument();
  });

  it('renders without errors when Google Analytics scripts are included', () => {
    // This test verifies that our GA scripts don't break the layout rendering
    expect(() => {
      render(<RootLayout><div>test content</div></RootLayout>);
    }).not.toThrow();
    
    // Verify the test content is rendered
    expect(screen.getByText('test content')).toBeInTheDocument();
  });

  describe('StatsigProvider', () => {
    it('renders the layout without errors when Statsig SDK key is absent', () => {
      // NEXT_PUBLIC_STATSIG_CLIENT_KEY is not set in test env
      expect(() => {
        render(<RootLayout><div>statsig absent</div></RootLayout>);
      }).not.toThrow();
      expect(screen.getByText('statsig absent')).toBeInTheDocument();
    });

    it('initializes Statsig and logs page_view when SDK key is present', async () => {
      const { StatsigClient } = await import('@statsig/js-client');
      const mockInstance = (StatsigClient as ReturnType<typeof vi.fn>).mock.results[0]?.value;
      const originalEnv = process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY;
      process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY = 'client-test-key';

      const { unmount } = render(<RootLayout><div>statsig present</div></RootLayout>);
      expect(screen.getByText('statsig present')).toBeInTheDocument();

      // Wait for the async initialization to settle and verify page_view is logged
      await vi.waitFor(() => {
        expect(StatsigClient).toHaveBeenCalledWith('client-test-key', {});
        const instance = (StatsigClient as ReturnType<typeof vi.fn>).mock.results.at(-1)?.value;
        expect(instance?.logEvent).toHaveBeenCalledWith('page_view');
      });

      unmount();
      process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY = originalEnv;
    });
  });
});

