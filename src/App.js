import React, { Component } from "react";
import Counter from "../container/counterContainer";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <header className="App-header">
            <Counter />
          </header>
        </div>
      </div>
    );
  }
}
export default App;
