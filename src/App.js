// import React from "react";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello Sagar</h1>
//       <h2>Welcome!</h2>
//     </div>
//   );
// }
import React, { Component } from "react";
// import "./App.css";
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
