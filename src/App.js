import React from 'react';
import WarmOrNot from './components/WarmOrNot';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <WarmOrNot />
      <Weather />
    </div>
  );
}

export default App;
