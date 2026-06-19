import ShoppingCart from "./components/ShoppingCart";
import ThemeWrapper from "./components/ThemeWrapper";
import ZustandCounter from "./components/ZustandCounter";
import ZustandTodo from "./components/ZustandTodo";

function App() {
  return (
    <div>
      <h1>My Zustand Counter</h1>
      <ZustandCounter />
      {/* You can add more counters — they share the same store! */}
      <ZustandCounter />

      <ZustandTodo />

      <ShoppingCart />

      <ThemeWrapper />
    </div>
  );
}

export default App;
