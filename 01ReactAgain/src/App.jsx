import { useState } from 'react'

function App() {
  
  const [counter,setCounter] = useState(5);

  function addValue(){
    setCounter((prev) =>  {
       const nex = prev+1;
       return nex;
    });
  }

  return (
   <>
      <h1>Dhiraj Barnwal</h1>
      <h2>Counter : {counter}</h2>

      <button
        onClick={addValue}
      >Add Value</button>
      <button>Remove Value</button>
   </>
  )
}

export default App
