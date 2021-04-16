import './App.css';
import React from 'react'
import axios from 'axios'
import Hello from "./components/Hello";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      name :""
    }
  }

  componentDidMount() {
    console.log("DidMount");
    var self = this;
    axios.get("https://covid19.th-stat.com/api/open/today").then(function(response){
    console.log(response.data);
    self.setState({name: response.data});
    },
    function(error){
    console.log(error);
    })
    }
  render(){
    return (
      <div className="App">
        <header className="App-header">
           <Hello name={this.state.name}/>
        </header>
      </div>
    );
  
  }
}

export default App;
