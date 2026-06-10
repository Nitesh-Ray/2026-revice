import { useRef, useState } from 'react';

function ElementMeasurer() {
  const boxRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const measure = () => {
    const box = boxRef.current;
    if (box) {
      setDimensions({
        width: box.offsetWidth,
        height: box.offsetHeight,
      });
    }
  };

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: '200px',
          height: '100px',
          background: 'lightblue',
          margin: '10px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Resize me?
      </div>
      <button onClick={measure}>Measure Box</button>
      <p>Width: {dimensions.width}px, Height: {dimensions.height}px</p>
    </div>
  );
}

export default ElementMeasurer;