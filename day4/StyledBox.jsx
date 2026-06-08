import { useState } from 'react';

function StyledBox() {
  const [isActive, setIsActive] = useState(false);

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: isActive ? '#4CAF50' : '#f44336',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <div style={boxStyle} onClick={() => setIsActive(!isActive)}>
      {isActive ? 'ON' : 'OFF'}
    </div>
  );
}

export default StyledBox;