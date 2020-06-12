import React from 'react';
import Counting from './countClick';
import Change from './changeBgcolor';
import Data from './carryData';
import Data2 from './carryData2';
import "./App.css";

function App() {
  const sayHello = () => {
    console.log("hello clicked")
  };

  return (
    <div className="sample">
      <h1>Hello React</h1>
      <button onClick={sayHello}>Hello</button>
      <Counting />
      <Change />
      <Data name="Alan" age="29" />
      <Data2 name="Eddie" age="28" />
    </div>
  );
}

export default App;
