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
          console.log('BG -> ', bg)
          newChildren.push(
            <Box content={ps} bgClass={bg}/>
          )
        })

        this.setState({
          children: newChildren
        })
      })

  }

  render(){
    console.log(this.state)
    return (
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

/*
  var App = React.createClass({
      render: function() {
          return (
              <div>
                  <h1>App main component! </h1>
                  {
                      this.props.children
                  }
              </div>
          );
      }
  });

*/

/*
    class App extends React.Component{

      getInitialState(){
          return [
              {name:"Some Name", num: 45}
          ]
      },

      addChild() {
          // State change will cause component re-render
          this.setState(this.state.concat([
              {id:2,name:"Another Name"}
          ]))
      }

      render: function() {
          return (
              <div>
                  <h1>App main component! </h1>
                  <button onClick={this.addChild}>Add component</button>
                  {
                      this.state.map((item) => (
                          <SampleComponent key={item.id} name={item.name}/>
                      ))
                  }
              </div>
          );
      }

  });
*/

export default App;
