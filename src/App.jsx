import React, { useState } from 'react';
import quotes from './quotes';
import './App.css';

function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <div className="quote-container">
        <h1>Генератор случайных цитат</h1>
        <div className="quote-box">
          <p className="quote-text">"{currentQuote.text}"</p>
          <p className="quote-author">— {currentQuote.author}</p>
        </div>
        <button className="new-quote-btn" onClick={getRandomQuote}>
          Новая цитата
        </button>
      </div>
    </div>
  );
}

export default App;
