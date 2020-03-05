// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducer/index";
import App from "./App";
// import "./index.css";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
