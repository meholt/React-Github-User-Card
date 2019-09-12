import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';



function App() {

  const [userData, setUserData] = useState( [] );

  useEffect(() => {
    axios
      .get('https://api.github.com/users/meholt')
      .then(res => setUserData(res.data))
      // console.log(userData)
      .catch(err => console.log(err));
  });

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
