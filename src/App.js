// import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";

function App() {
  // let logoItem = useRef(null);
  // let textItem = useRef(null);
  const [circleState, setCircleState] = useState(false);
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  const handleClick = () => {
    gsap.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeInOut,
    });
    setCircleState(true);
  };

  const handleClickRevert = () => {
    gsap.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeInOut,
    });
    setCircleState(false);
  };
  // useEffect(() => {
  //   gsap.to(logoItem, 0.8, {
  //     opacity: 1,
  //     y: -20,
  //     ease: Power3.easeOut(),
  //   });
  //   gsap.to(textItem, 0.8, {
  //     opacity: 1,
  //     y: -20,
  //     ease: Power3.easeOut(),
  //     delay: 0.2,
  //   });
  // }, []);
  useEffect(() => {
    gsap.to(app, 0, { css: { visibility: "visible" } });
    // gsap.from(circle, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut(),
    // });
    // gsap.from(circleRed, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut(),
    //   delay: 0.2,
    // });
    // gsap.from(circleBlue, 0.8, {
    //   opacity: 0,
    //   x: 40,
    //   ease: Power3.easeOut(),
    //   delay: 0.4,
    // });
    gsap.from([circle, circleRed, circleBlue], 0.8, {
      opacity: 0,
      ease: Power3.easeOut,
      x: 40,
      stagger: 0.2,
    });
  }, []);
  return (
    <div
      ref={(el) => {
        app = el;
      }}
      className="App"
    >
      <header className="App-header">
        {/* <img
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
        </a> */}
        <div className="circle-container">
          <div ref={(el) => (circle = el)} className="circle"></div>
          <div
            ref={(el) => (circleRed = el)}
            onClick={circleState !== true ? handleClick : handleClickRevert}
            className="circle red"
          ></div>
          <div ref={(el) => (circleBlue = el)} className="circle blue"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
