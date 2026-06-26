import { render, screen, waitFor } from '@testing-library/react';
import PostList from '../PostList';

// Mock the global fetch
beforeEach(() => {
  vi.spyOn(global, 'fetch'); // "vi" is global because globals: true in config
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('PostList', () => {
  it('shows loading state initially', () => {
    // Don't resolve fetch yet
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });
    render(<PostList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders posts after successful fetch', async () => {
    const mockPosts = [
      { id: 1, title: 'Post One' },
      { id: 2, title: 'Post Two' },
    ];
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    });

    render(<PostList />);

    // Wait for the posts to appear (loading disappears)
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    const items = screen.getAllByTestId('post-item');
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent('Post One');
  });

  it('shows error on failed fetch', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({}),
    });

    render(<PostList />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
    });
  });
});