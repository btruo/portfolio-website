import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h2>
        BTruo
        </h2>
        <nav id="nav-bar">
          <ul>
            <li>place</li>
            <li>hold</li>
            <li>er</li>
          </ul>
        </nav>
        <head>
        </head>
        <h1>
          Hi, it's me, 
          <u className="underline">
          Brandon 
          Truong.
          </u>
        </h1>

      </header>
      <body>
        Based in Canada, I’m an explorer of the modern lifestyle blending wellness, personal development,
        and success.
      </body>
      {/* <header className="App-header">
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
            Hello World
          </a>
        </header> */}
    </div>
  );
}

export default App;
