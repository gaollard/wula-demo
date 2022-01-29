import React from 'react';
import ReactDOM from 'react-dom';
import rootStore, { RootStore } from './model';
import { Provider } from 'mobx-react';

export default class Application {
  private App: React.FC;
  private mountNode: Element;
  private beforeMount: Function;
  public store: RootStore;

  constructor(options: {
    App: React.FC;
    mountNode: Element;
    beforeMount: (context: Application) => void;
  }) {
    this.App = options.App;
    this.mountNode = options.mountNode;
    this.beforeMount = options.beforeMount;
    this.store = rootStore;
    this.mount();
  }

  render() {
    const App = this.App;
    ReactDOM.render(
      <Provider {...this.store}>
        <App />
      </Provider>,
      this.mountNode
    );
  }

  mount() {
    Promise.resolve(this.beforeMount(this)).then(() => {
      this.render();
    });
  }
}
