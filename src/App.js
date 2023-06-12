//this one works

import logo from './logo.svg';
import './App.css';

//render some piece of ui
function App() {

    const logo = 'https://placedog.net/640/480?r';

// ever component returns valid... JSX
// the JSX describes how the compnent is rendered
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, name(s)</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;