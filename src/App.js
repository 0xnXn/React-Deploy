//import logo from './logo.svg';
import './App.css';
import Example from './Components/Carosal'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';


function App() {
  return (
    
    <div className="App">
      <Container fixed>
      <Example ></Example>
      </Container>
    </div>
  );
}

export default App;
