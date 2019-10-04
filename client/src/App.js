import React from 'react';
import './App.css';
import GetData from './components/GetData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Participants</p>
        <GetData />
      </header>
    </div>
  );
}

export default App;
