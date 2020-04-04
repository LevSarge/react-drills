import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      textArray: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
    
  
  }

  // javascript
  

  render() {

    // html 👇
    return (
      <div className="App">
        <ul>
          {this.state.textArray.map(food => {
            return (
            <li>{food}</li>
            )
          })}
        </ul>
        
      </div>
    );
  }
}
export default App;
