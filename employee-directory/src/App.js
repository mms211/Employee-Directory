import React from 'react';
import Container from '../src/components/Container/Container'
import Header from '../src/components/Header/Header';
import Search from '../src/components/Search/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Container />
    </div>
  );
}

export default App;
