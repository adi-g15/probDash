import React from 'react';
import './App.css';

import Box from "../Box/Box";

const bootstrapBG = [
  'text-white bg-primary',
  'text-white bg-secondary',
  'text-white bg-success',
  'text-white bg-danger',
  'text-white bg-warning',
  'text-white bg-info',
  'text-white bg-dark'
]

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      children: [],
    };

    fetch('https://adig15.herokuapp.com/sihJ20/ps/getAll', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then((res) => res.json())
    .then(data => {
        var allPS = data

        let newChildren = []
        console.log(allPS)
        allPS.forEach(ps => { //forEach is blocking

          let bg = bootstrapBG[Math.floor(Math.random()*bootstrapBG.length)]
          newChildren.push(
            <Box content={ps} bgClass={bg}/>
          )
        })

        this.setState({children: newChildren});
      })

  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <p>
            All Problem Statements added TILL NOW
          </p>
        </header>
        {this.state.children}
      </div>
    );
  }
}

export default App;
