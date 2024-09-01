import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // Function to handle button click and fetch data
  const fetchData = () => {
    fetch('http://localhost:8080/button')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img  className="App-logo" alt="logo" />
        <h1>Frontend App</h1>
        <button onClick={fetchData}>Fetch Data</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
