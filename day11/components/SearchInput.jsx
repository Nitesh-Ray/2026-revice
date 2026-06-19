import React, { useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export default function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Fetching results for:', debouncedQuery);
      // fetch here
    }
  }, [debouncedQuery]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
    />
  );
}