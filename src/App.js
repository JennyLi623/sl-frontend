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
  }

  componentDidMount() {
    this.fetchlight = setInterval(this.getColor, 300);
  }

  componentWillUnmount() {
    clearInterval(this.fetchlight);
  }

  getColor = () => {
    axios.get(`https://lighting-backend.herokuapp.com/`).then(res => {
      if(parseFloat(res.data) <= -2) {
        this.setState({color: "#444444"})
      }
      else if(parseFloat(res.data) <= -1) {
        this.setState({color: "#FFBBBB"})
      }
      else if (parseFloat(res.data) < 0.2) {
        this.setState({color: "#FFFFFF"})
      }
      else{
        this.setState({color: "#FFCC88"})
      }
      console.log(this.state.color);
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
