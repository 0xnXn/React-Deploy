//import logo from './logo.svg';
import './App.css';
import Example from './Components/Carosal'
import React from 'react';
import './App.css';
import { Container, Typography, Button, ButtonGroup,Tabs,Tab,Paper } from '@material-ui/core';
import { Component } from 'react';
import { spacing } from '@material-ui/system';
import BIRDS from 'vanta/dist/vanta.birds.min'

import * as THREE from 'three'



class App extends Component {
  constructor(props) {
    super(props);
    this.vantaRef = React.createRef()
    this.state = {
      currentIndex: 0,
      bgColor: "",
    }
  }


  onchangeIndex = (index) => {
    this.setState({
      currentIndex: index
    })

  }

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      THREE: THREE
      ,mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      birdSize: 1.20,
      wingSpan: 19.00,
      speedLimit: 2.00,
      separation: 82.00,
      alignment: 57.00,
      cohesion: 60.00,
      quantity: 2.00
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }

  boxClick = (index2) => {

    switch (index2) {
      case 0: this.setState({
        bgColor: "linear-gradient(90deg, rgba(238,174,202,1) 38%, rgba(148,187,233,1) 83%)  "
      })
        break;
      case 1: this.setState({
        bgColor: "linear-gradient(90deg, rgba(148,187,233,1) 0%, rgba(235,176,206,1) 34%, rgba(248,174,202,1) 68%, rgba(148,187,233,1) 100%) "
      })
        break;
      case 2: this.setState({
        bgColor: "linear-gradient(90deg, rgba(148,187,233,1) 22%, rgba(238,174,202,1) 66%)"
      })
        break;

    }

  }


  render() {
    return (

      <div className="App">
        <div className="color" ref={this.vantaRef} > 
        {/* style={{ background: this.state.bgColor }}  */}
          <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' />
          <div className="p1">
            Hey,I am Nixon good to see you here
        
          </div>
          
          


          <div >
            <ButtonGroup variant="text" aria-label="text primary button group" className="threebuttons">

              <Button  onClick={() => { this.onchangeIndex(0); this.boxClick(0) }}>Blog</Button>
              <Button onClick={() => { this.onchangeIndex(1); this.boxClick(1) }}>Work</Button>
              <Button onClick={() => { this.onchangeIndex(2); this.boxClick(2) }}>Chat</Button>
            </ButtonGroup>
          </div>
          


        </div>
        <Example currentIndex={this.state.currentIndex} boxClick={this.boxClick}></Example>
      </div>
    );
  }
}

export default App;

