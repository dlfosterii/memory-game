import React from 'react';
import Card from './components/Card';
import MemoryCard from './components/MemoryCard'

import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Memory Game</h1>
      <h4 className="subHeader" >Match cards to win</h4>
      </header>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>
    <div>
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
      <MemoryCard />
    </div>

    </div>
  );
}


export default App;
