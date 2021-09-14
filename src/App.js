import React, {useState} from "react"
import "./App.css"

const App = () => {
  
  const [count /*As we are building a counter*/ ,setCount] = useState(0 /* Inital value of count */); // Using states
  /*
  life setLife
  salary setSalary
  */ 

  return(
    <div className="App">
      <header>
        <h1>Counter App Using States/Hooks</h1>
      </header>
      <h2>Current value of count is: {count}</h2>
      <button onClick={() => (setCount(0))}>Reset Counter</button>
      <button onClick={()=>(count>=10? "" : setCount(count+1))}>Increase Counter</button>
      <button onClick={() => (count<=0? "" : setCount(count-1))}>Decrease Counter</button>
    </div>
  );
}

export default App;