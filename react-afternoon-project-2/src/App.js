import React from 'react';
import './App.css';
import Title from './Components/Header';
import Background from './Components/Background'
import MainContent from './Components/MainContent'

function App() {
  return (
    <div className="App">
      <Title />
      <Background/>
      <MainContent/>
      
    </div>
  );
}

export default App;
