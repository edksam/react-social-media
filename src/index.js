import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('codeartistry');

  useEffect(() => {
    async function getUser(route) {
      const response = await fetch(`https://api.github.com/users/${route}`);
      const data = await response.json();
      setUser(data);
    }
    getUser(userName);
    // fetch('https://api.github.com/users/edksam')
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));
  }, []);

  const handleUsernameChange = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  return (
    <div>
      <input
        type='text'
        onChange={handleUsernameChange}
        placeholder='Enter your github handler'
      />
      <button>Search</button>
      <button>Clear</button>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt='avatar' style={{ height: 50 }} />
        </div>
      ) : (
        <p>...Loading</p>
      )}
      ;
    </div>
  );
}

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
