import React from 'react';
import Application from './Application';
import './global.css';
import { renderRouter } from './routes';

new Application({
  App: App,
  mountNode: document.querySelector('#root')!,
  beforeMount: (context) => {
    console.log(context.store)
  }
})

function App() {
  return (
    <div className='app'>
      <h2>hello wula</h2>
      <span className="yus-icon-fail4 yus-icon"></span>
      {renderRouter()}
    </div>
  );
}