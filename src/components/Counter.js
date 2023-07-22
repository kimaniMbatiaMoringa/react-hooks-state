import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red")

  function increment() {
    setCount(count + 1);
  }

  function changeColorToBlue(){
    setColor("Blue")
  }

  function Counter() {
    const [count, setCount] = useState(0);
  
    function increment() {
      console.log(`before setState: ${count}`);
  
      setCount(count + 1);
  
      console.log(`after setState: ${count}`);
    }
  
    return <div onClick={increment}>{count}</div>;
  }

  return( 
  <>
      <button onClick={increment}>I have been clicked {count} times</button>
      <h2>My favorite color is {color}</h2>
      <button onClick={changeColorToBlue}>Change to Blue</button>
      
      <Counter />
  </>

  )
}

export default Counter;