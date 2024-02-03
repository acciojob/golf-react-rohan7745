import React, { useState, useEffect } from 'react';

const App = () => {
  const [showBall, setShowBall] = useState(false);
  const [ballPosition, setBallPosition] = useState({ top: 0, left: 0 });

  const handleStartClick = () => {
    setShowBall(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      // Move the ball to the right by 5 pixels
      setBallPosition((prevPosition) => ({
        ...prevPosition,
        left: prevPosition.left + 5,
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Adding an empty dependency array ensures the effect runs only once during component mount

  return (
    <div>
      {!showBall ? (
        <button className="start" onClick={handleStartClick}>
          Start
        </button>
      ) : (
        <div
          className="ball"
          style={{
            position: 'absolute',
            top: `${ballPosition.top}px`,
            left: `${ballPosition.left}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default App;
