import { useState } from 'react'
import './App.css'

function App() {

  // let counterValue = 0;
  let [counter, setCounter] = useState(0);

  const subscriptSytle = {
    fontSize: '.8rem', 
    color: 'gray',
  }

  const addValue = ()=>{
    // counterValue = counterValue + 1;
    //without hooks i have to update the counterValue on UI  at all places where counter is being displayed using the document.querySelector
    setCounter(counter+1);
  }

  const subValue = ()=>{
    if(counter==0) return
    
    // counterValue = counterValue - 1;
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Basic Counter App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Plus <span style={subscriptSytle}>counter:</span> {counter} </button><br /><br />
      <button onClick={subValue}>Minus <span style={subscriptSytle}>counter:</span> {counter}</button>
    </>
  )
}

export default App
