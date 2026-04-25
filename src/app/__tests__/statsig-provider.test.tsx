import React from 'react';
import { render } from '@testing-library/react';
import { vi, describe, it, expect, afterEach } from 'vitest';

const mockShutdown = vi.fn();
const mockLogEvent = vi.fn();
const mockInitializeAsync = vi.fn().mockResolvedValue(undefined);
const MockStatsigClient = vi.fn().mockImplementation(() => ({
  initializeAsync: mockInitializeAsync,
  logEvent: mockLogEvent,
  shutdown: mockShutdown,
}));

vi.mock('@statsig/js-client', () => ({
  StatsigClient: MockStatsigClient,
}));

describe('StatsigProvider', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders nothing (returns null)', async () => {
    const { default: StatsigProvider } = await import('../_components/statsig-provider');
    const { container } = render(<StatsigProvider />);
    expect(container.firstChild).toBeNull();
  });

  it('does not initialize Statsig when SDK key is missing', async () => {
    const { default: StatsigProvider } = await import('../_components/statsig-provider');
    delete process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY;
    render(<StatsigProvider />);
    expect(MockStatsigClient).not.toHaveBeenCalled();
  });

  it('initializes Statsig client when SDK key is provided', async () => {
    process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY = 'client-test-key';
    const { default: StatsigProvider } = await import('../_components/statsig-provider');
    render(<StatsigProvider />);

    await vi.waitFor(() => {
      expect(MockStatsigClient).toHaveBeenCalledWith('client-test-key', {});
      expect(mockInitializeAsync).toHaveBeenCalled();
    });

    delete process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY;
  });

  it('logs a page_view event after initialization', async () => {
    process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY = 'client-test-key';
    const { default: StatsigProvider } = await import('../_components/statsig-provider');
    render(<StatsigProvider />);

    await vi.waitFor(() => {
      expect(mockLogEvent).toHaveBeenCalledWith('page_view');
    });

    delete process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY;
  });

  it('calls shutdown on unmount', async () => {
    process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY = 'client-test-key';
    const { default: StatsigProvider } = await import('../_components/statsig-provider');
    const { unmount } = render(<StatsigProvider />);

    await vi.waitFor(() => expect(mockInitializeAsync).toHaveBeenCalled());
    unmount();
    expect(mockShutdown).toHaveBeenCalled();

    delete process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY;
  });
});
