import React, {Component} from "react";
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: "#FFFFFF",
    };
    this.audio = new Audio("./vesper.mp3")
  }

  componentDidMount() {
    axios.get(`https://lighting-backend.herokuapp.com/`).then(res => {
      console.log(res);
      this.setState({color: res.data});
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color}}>
      </div>
    );
  }
}
export default App;
