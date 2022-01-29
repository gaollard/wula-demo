import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import homeStyle from "./home.module.css";
import about from "./about.module.less";
import img from "./wechat.jpeg";
import { ReactComponent as CheckIcon } from "./check.svg";

console.log(about);
console.log(homeStyle);

var root = document.createElement("div");
root.setAttribute("id", "root");
document.body.appendChild(root);

import("./lazy").then((res) => {
  console.log(res);
});

function App() {
  return (
    <div>
      <h2>hello wula</h2>
      <CheckIcon />
      <span className="yus-icon-fail4 yus-icon"></span>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, root);
