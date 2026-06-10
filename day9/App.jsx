import CounterReducer from "./CounterReducer";
import ShoppingCart from "./ShoppingCart";
import TodoReducer from "./TodoReducer";
import WizardForm from "./WizardForm";



function App() {
  return (
    <div>
    <CounterReducer />

    <TodoReducer />

    <ShoppingCart />

    <WizardForm />
    </div>
  );
}
export default App
