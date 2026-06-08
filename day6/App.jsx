import {useEffect} from "react";

import LiveTimer from "./LiveTimer";
import PostList from "./PostList";
import Counter from "./Counter";
import RandomUser from "./RandomUser";

function App() {

  useEffect(() => {
    document.title = "Welcome to React App";
  }, []); // runs once on mount

  return (
    <div>
      <PostList />

      <LiveTimer />

      < Counter />

      <RandomUser />
    </div>
  );
}
export default App;
