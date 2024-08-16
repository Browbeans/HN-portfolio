import React, { useRef } from 'react';
import combined from './utils/images/combined.jpg'
import dance from './utils/images/dance.jpg'
import './App.css';

function App() {
  const noelle = useRef<HTMLParagraphElement>(null)
  const henric = useRef<HTMLParagraphElement>(null)
  
  const handleNClick = () => {
    noelle.current?.scrollIntoView({ behavior: 'smooth'});
  }
  const handleHClick = () => {
    henric.current?.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <div className="App">
      <div className='Menu-container'>
        <p>Henric</p>
        <p>Noelle</p>
      </div>
      <div className="App-hero">
        <div className="Home-flex">
          <div onClick={handleNClick}>
            <img src={dance} className="App-logo" alt="logo" />
          </div>
          <div onClick={handleHClick}>
            <img src={combined} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
      <div ref={noelle} className="App-hero2">
        <p>Noelle Phil</p>
      </div>
      <div ref={henric} className="App-hero3">
        <p>Henric Adler</p>
      </div>
    </div>
  );
}

export default App;
