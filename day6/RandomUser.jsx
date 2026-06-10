import {useState, useEffect} from "react";

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchTime, setFetchTime] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) throw new Error("Network error");
      const data = await response.json();
      setUser(data.results[0]);
      setFetchTime(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };



  const [secondsSinceFetch, setSecondsSinceFetch] = useState(0);

  useEffect(() => {
    if (!fetchTime) return;
    const id = setInterval(() => {
      setSecondsSinceFetch((prev) => prev + 1);
    }, 1000);
    // Reset counter every new fetch
    setSecondsSinceFetch(0);
    return () => clearInterval(id);
  }, [fetchTime]); // runs when fetchTime updates (new user fetched)




  // Fetch a user automatically when component mounts
  useEffect(() => {
    fetchUser();
  }, []); // run once on mount

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "sans-serif",
        maxWidth: 400,
        margin: "auto",
      }}
    >
      <h2>Random User</h2>
      <button onClick={fetchUser} disabled={loading} style={{marginBottom: 20}}>
        {loading ? "Fetching..." : "Get New User"}
      </button>

      {error && <p style={{color: "red"}}>Error: {error}</p>}

      {loading && !user && <p>Loading first user...</p>}

      {user && (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: 10,
            padding: 20,
            background: "#fafafa",
          }}
        >
          <img
            src={user.picture.large}
            alt="user"
            style={{borderRadius: "50%"}}
          />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>📧 {user.email}</p>
          <p>
            📍 {user.location.city}, {user.location.country}
          </p>


          <p>Fetched 2nd {secondsSinceFetch}s ago</p>


          {fetchTime && <small>Fetched at {fetchTime}</small>}
        </div>
      )}
    </div>
  );
}

export default RandomUser;
