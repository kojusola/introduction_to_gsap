import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);
  useEffect(() => {
    gsap.to(logoItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut(),
    });
    gsap.to(textItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut(),
      delay: 0.2,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img
          ref={(el) => (logoItem = el)}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p className="App-text" ref={(el) => (textItem = el)}>
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
