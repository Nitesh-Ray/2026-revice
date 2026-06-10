import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>name--</h2>
      <label>Name: </label>
      <input ref={inputRef} type="text" placeholder="I'm focused automatically" />
    </div>
  );
}

export default AutoFocusInput;