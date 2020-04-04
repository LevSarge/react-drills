import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredString: '',
      textArray: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }

    this.handleOnChange = this.handleOnChange.bind(this)

  }

  handleOnChange(filter) {
    this.setState({ filteredString: filter })
  }

  render() {
    let filteredList = this.state.textArray
    filteredList = filteredList.filter(food => {
      //if the letters typed into input match with the letters in textArray, return true
      if (food.includes(this.state.filteredString)) {
        return true
      }
    })
    // html 👇
    return (
      <div className="App">
        <input
          type='text'
          onChange={e => this.handleOnChange(e.target.value)}
        />
        <ul>
          {filteredList.map(food => {
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
