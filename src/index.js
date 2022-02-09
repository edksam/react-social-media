import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function handleMouseMove(event) {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  }
  return (
    <div>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);

const NewPage = () => {
  return <div>Hello</div>;
};

setTimeout(() => ReactDOM.render(<NewPage />, rootNode), 2000);
