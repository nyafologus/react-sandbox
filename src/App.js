import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarouselComponent from './CarouselComponent';
import Greeting from './Greeting';
import GreetingHook from './GreetingHook';


class App extends Component {
  render() {
    return (
      <>
        <Greeting/>
        <GreetingHook/>
        <CarouselComponent/>
      </>
    );
  }
}

export default App;