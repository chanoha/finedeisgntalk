import React from 'react';
import styled from 'styled-components';
import BlueButton from './components/styledComponents';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlueButton>Learn React + typescript</BlueButton>
        </a>
      </header>
    </div>
  );
}

export default App;
