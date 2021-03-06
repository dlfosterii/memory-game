import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard'

import './App.css';


//part 3, step 1, 7) create a deck of symbol cards and shuffle them
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


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      won: false,
    }
  }

  pickCard(cardIndex) {
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
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      const card1 = newDeck[card1Index];
      const card2 = newDeck[card2Index];
      if (card1.symbol !== card2.symbol) {
        setTimeout(() => {
          this.unflipCards(card1Index, card2Index)
        }, 1000)
        console.log('cards don\'t match')
      }
      newPickedCards = []
    }
    console.log(newPickedCards)
    this.setState({ deck: newDeck, pickedCards: newPickedCards })

    this.gameOver(newDeck)
  };

  unflipCards(card1Index, card2Index) {
    const card1 = { ...this.state.deck[card1Index] };
    const card2 = { ...this.state.deck[card2Index] };
    card1.isFlipped = false;
    card2.isFlipped = false;
    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1
      }
      if (card2Index === index) {
        return card2
      }
      return card
    })
    this.setState({ deck: newDeck })
  }

  gameOver(deck) {
    if (deck.filter((card) => {
      return !card.isFlipped;
    }).length === 0) {
      this.setState({ won: true });
    }
  }

  handleClick = () => {
    this.setState({
      deck: generateDeck(),
      pickedCards: [],
      won: false,
    })
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        key={index}
        pickCard={this.pickCard.bind(this, index)} />
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
        <div className="resetButton">
          <br />
          {this.state.won && <button onClick={this.handleClick}>Replay</button>}
        </div>
      </div>
    );

  }
}



export default App;
