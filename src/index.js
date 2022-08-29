import React from "react";
import ReactDOM from "react-dom"
import "semantic-ui-css/semantic.min.css"
import "./app/layout/styles.css";
import App from "./app/layout/App";


 ReactDOM.render(<App/>,document.getElementById("root"));

// function render() {
//   root.render(<App />);
// }

// if (module.hot) {
//   module.hot.accept("./app/layout/App", () => {
//     setTimeout(render);
//   });
// }

// render();

