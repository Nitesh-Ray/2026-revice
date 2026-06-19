import {useSearch} from "../hooks/useSearch";
import {useLocalStorage} from "../hooks/useLocalStorage";

function SearchBox() {
  const {query, setQuery, results, loading, error} = useSearch();

  // inside component:
  const [recent, setRecent] = useLocalStorage("recent-searches", []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() && !recent.includes(query)) {
      setRecent([query, ...recent].slice(0, 5)); // keep last 5
    }
  };

  

  return (
    <div style={{maxWidth: 500, margin: "auto"}}>
        <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts..."
        style={{width: "100%", padding: "10px", fontSize: "1rem"}}
      />
      {loading && <p>Searching...</p>}
      {error && <p style={{color: "red"}}>Error: {error}</p>}
      {results && results.length === 0 && !loading && <p>No results found.</p>}
      <ul style={{listStyle: "none", padding: 0}}>
        {results &&
          results.map((post) => (
            <li
              key={post.id}
              style={{
                border: "1px solid #eee",
                padding: "10px",
                margin: "5px 0",
              }}
            >
              <strong>{post.title}</strong>
              <p>{post.body.slice(0, 60)}...</p>
            </li>
            
          ))}
      </ul>
      </form>
    </div>
  );
}

export default SearchBox;
