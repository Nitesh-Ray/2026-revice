import { useReducer } from 'react';

// 1. Define initial state
const initialState = { count: 0 };

// 2. Reducer function – takes state and action, returns new state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'addBy':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'addBy', payload: 5 })}>+5</button>
    </div>
  );
}

export default CounterReducer;