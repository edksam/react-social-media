import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [developer, setDeveloper] = useState({
    language: 'python',
    yearsExperience: 0,
  });
  // const [language, setLanguage] = useState('python');
  // const [experience, setExperience] = useState(0);

  return (
    <div>
      <button
        onClick={() =>
          setDeveloper({
            language: 'Javascript',
            yearsExperience: 0,
          })
        }
      >
        Change language
      </button>

      <input
        type='number'
        onChange={(event) =>
          setDeveloper({
            ...developer,
            yearsExperience: event.target.value,
          })
        }
      />
      <p>I have {developer.yearsExperience} years of experience.</p>
      <p>I am learning {developer.language}</p>
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
