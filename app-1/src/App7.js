import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this)

  }

  // javascript
  handleOnChange(e) {
    
    this.setState({
      value: e.target.value
    })
  }

  handleText(e) {
    const { value } = this.state
    this.props.handleText(value)
  }

  render() {
    const displayText = this.state.value

    // html 👇
    return (
      <div className="App">
        <input
          className='inputBox'
          type='text'
          onChange={e => this.handleOnChange(e)}
        />

        <p className='displayText'>{displayText}</p>
      </div>
    );
  }
}
export default App;
