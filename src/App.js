// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';

/* Inheritance. I'm creating a new class that *extends* the code already in the component class by using 'Component', which has built-in react code, and I'm gunna add more code into this class*/
class App extends Component {
  /* initialize a state with default value 0. State is an object ie, key/value pairs*/
  state = {
    clickCount: 0
  }
  // this function makes a newCount variable
  countClick = () => {
    /* capture value of this.state.clickCount and assign it to newCount bc you can't directly manipulate state*/
    let newCount = this.state.clickCount
    // increment newCount by 1
    newCount++
    /* then call setState method to update value in State -- notice it looks more like an object now. ALWAYS pass an object as parameter for setState that tells it what key and object you're updating*/
    this.setState({ clickCount: newCount })
  }
  // to "clear" we update the key:value of the state using this.setState again
  resetCount = () => {
    this.setState({ clickCount: 0 })
  }
  /* if a value in state is connected to something in the render() method, when that value changes it will trigger a re-render of whatever is displaying that value*/
  render() {
    /* make some shit to look at = need a return. React.Fragment has built-in react code to make these HTML elements: h2, buttons. But we could also change it to a div instead of React.Fragment. Would still work, bc react just wants all these elements to be inside one element. When you make the button, go ahead and throw onClick in there for a built-in event listener and tell it to give it the value from one of the above functions and it goes in {} bc we're referring to javascript*/
    return (
      <React.Fragment>
        <h2>You've clicked the button {this.state.clickCount} times</h2>
        <button onClick={this.countClick}>Click Me!</button>
        <button onClick={this.resetCount}>Reset Count</button>
      </React.Fragment>
    );
  }
}

export default App;
