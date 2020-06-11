import React, { Component } from 'react';
// import Card from './components/Card';
import MemoryCard from './components/MemoryCard'

import './App.css';
// import { render } from '@testing-library/react';

//part 3, step 1, 7)
function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i % 8],
    }
    )
  }
  return (shuffle(deck))
};

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickCard(cardIndex) {
  if (this.state.deck[cardIndex]) {
    return
  };
  let cardToFlip = {...this.state.deck[cardIndex]};
  cardToFlip = {
    isFlipped: true
  };
  let newPickedCards = this.state.pickedCards.concat(cardIndex);
  let newDeck = this.state.deck.map((card, index) =>{
    if (cardIndex === index){
      return cardToFlip
    }
    return card
  });
return this.setState( {deck: newDeck, pickedCards: newPickedCards})
};



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
    }
  }

  pickCard (cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return
    };
    let cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    return (this.setState({ deck: newDeck, pickedCards: newPickedCards }));
  };

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)}/>
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h4 className="subHeader" >Match cards to win</h4>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );

  }
}



export default App;
