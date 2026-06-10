import { useRef, useState, useEffect } from 'react';

function SearchBox() {
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClear = () => {
    setQuery('');
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {query && <span>{query.length} chars</span>}
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default SearchBox;