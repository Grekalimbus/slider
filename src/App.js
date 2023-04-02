import React from 'react';
import Carousel from './carousel/Caruousel';
import './App.css';

function App() {
  return (
    <Carousel>
      <div className="item item-1">item 1</div>
      <div className="item item-2">item 2</div>
      <div className="item item-3">item 3</div>
    </Carousel>
  );
}

export default App;
