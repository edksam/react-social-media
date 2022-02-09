import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [developer, setDeveloper] = useState({
    name: '',
    language: 'python',
    yearsExperience: 0,
    isEmployed: false,
  });

  useEffect(() => {
    document.title = developer.name;
  }, [developer.name]);
  const handleChangeLanguage = () => {
    setDeveloper({
      language: 'Javascript',
      yearsExperience: 0,
    });
  };

  const handleChangeYearsExperience = (event) => {
    setDeveloper({
      ...developer,
      yearsExperience: event.target.value,
    });
  };

  const handleToggleEmploymentStatus = () => {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  };
  const handleChangeName = (event) => {
    setDeveloper({
      ...developer,
      name: event.target.value,
    });
  };
  return (
    <div>
      <button onClick={handleToggleEmploymentStatus}>
        Toggle Employment Status
      </button>
      <button onClick={handleChangeLanguage}>Change language</button>
      <input type='number' onChange={handleChangeYearsExperience} />
      <p>I have {developer.yearsExperience} years of experience.</p>
      <p>I am learning {developer.language}</p>
      <p>
        Employment Status : {developer.isEmployed ? 'Employed' : 'Unemployed'}
      </p>
      <input
        type='text'
        onChange={handleChangeName}
        placeholder='Change Name'
      />
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
