import {useEffect} from "react";

import LiveTimer from "./LiveTimer";
import PostList from "./PostList";
import Counter from "./Counter";
import RandomUser from "./RandomUser";
import Clock from "./Clock";

function App() {

  useEffect(() => {
    document.title = "Welcome to React App";
  }, []); // runs once on mount

  return (
    <div>
      <h2>post list from web, using api------------</h2>
      <PostList />

      <h2>on page for __ sec, made-------------</h2>
      <LiveTimer />

      <h2>count in web and its title also---------------</h2>
      < Counter />

      <h2>random user fetch--------- </h2>
      <RandomUser />
      <h2>makre clock, title also---------------</h2>
      <Clock />
    </div>
  );
}
export default App;
