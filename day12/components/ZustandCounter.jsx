import {useCounterStore} from "../store/counterStore";

function ZustandCounter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const addBy = useCounterStore((state) => state.addBy);

  return (
    <div style={{textAlign: "center"}}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => addBy(5)}>+5</button>
    </div>
  );
}

export default ZustandCounter;
