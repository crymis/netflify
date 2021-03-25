import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyList } from "./myList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <MyList className="MyList" />
        <p>
          <h2>New Feature! 🔥</h2>
          <button onClick={() => setCount((count) => count + 1)}>ADD</button>
          <button onClick={() => setCount((count) => count - 1)}>
            SUBTRACT
          </button>
          <div
            style={{
              padding: "1rem",
              borderRadius: "0.25rem",
              background: "#fafafc",
              margin: "1rem",
              color: "black",
            }}
          >
            Count is: {count}
          </div>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs!
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
