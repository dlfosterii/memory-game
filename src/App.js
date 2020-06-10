import React, {Component} from 'react';
// import Card from './components/Card';
import MemoryCard from './components/MemoryCard'

import './App.css';
import { render } from '@testing-library/react';

//part 3, step 1, 1)
function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i = 0 ; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i%8],
    }
    )
  }
  return deck
};




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: [],
      pickedCards: [],    
    }
  }


  render() {
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
}



export default App;
