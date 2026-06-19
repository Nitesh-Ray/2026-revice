import { useState } from 'react';
import { useFetch } from './useFetch';
import { useDebounce } from './useDebounce';

export function useSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 300);

  // Only fetch if there's something to search
  const url = debouncedQuery
    ? `https://jsonplaceholder.typicode.com/posts?q=${debouncedQuery}&_limit=10`
    : null;

  const { data, loading, error } = useFetch(url);

  // Return null for results if no query, else data
  const results = debouncedQuery ? data : null;

  return { query, setQuery, results, loading, error };
}