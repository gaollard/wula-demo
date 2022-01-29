import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import { ReactComponent as CheckIcon } from './assets/svg/check.svg';

var root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

import('./utils/lazy').then((res) => {
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
