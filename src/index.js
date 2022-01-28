import React from "react";
import ReactDOM from "react-dom";
// import s from './global.css';
import homeStyle from './home.module.css';

import about from './about.module.less';

console.log(about)
console.log(homeStyle)

var root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

function App() {
  return (
    <div>
      <h2>hello wula</h2>
    </div>
  );
}

ReactDOM.render(<App />, root);
``