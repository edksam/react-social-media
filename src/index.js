import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  function handleInputChange(event) {
    const inputValue = event.target.value;
    console.log(inputValue)
  }

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
    </div>
  )
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
