import CounterReducer from "./CounterReducer";
import ShoppingCart from "./ShoppingCart";
import TodoReducer from "./TodoReducer";



function App() {
  return (
    <div>
    <CounterReducer />

    <TodoReducer />

    <ShoppingCart />
    </div>
  );
}
export default App
