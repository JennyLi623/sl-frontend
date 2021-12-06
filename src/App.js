import React, {Component} from "react";
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      recording: false,
      file: null,
      timer: 0,
      intervalId:null,
      phase: 0,
      audioName: '',
      nameEntered: true,
      success: 0,
    };
    this.audio = new Audio("./vesper.mp3")
  }

  componentDidMount() {
    axios.get(`https://lighting-backend.herokuapp.com/`).then(res => {
      console.log(res);
    })
  }

  render() {
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
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
