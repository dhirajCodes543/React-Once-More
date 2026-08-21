import { useState,useEffect,useCallback } from "react"

function App() {

  const [length,setLength] = useState(6);
  const [password,setPassword] = useState("");
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [specialCharAllowed,setSpecialCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) {
    chars += "0123456789";
  }

  if (specialCharAllowed) {
    chars += "!@#$%^&*";
  }

  let newPassword = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    newPassword += chars.charAt(index);
  }

  setPassword(newPassword);
}, [length, numberAllowed, specialCharAllowed]);

useEffect(() => {
  passwordGenerator();
}, [passwordGenerator]);
  
  return (
   <>
      <div className="mt-10 mx-auto w-200 bg-amber-900 h-20">
          <h1 className="text-white flex text-center mt-8 h-auto">Password Generator</h1>

          <input type="text"
          readOnly
          value={password}
          className="bg-gray-200 rounded-sm" 
          />
          <input type="range" 
          value={length}
          min={6}
          max={100}
          className="cursor-pointer"
          onChange={(e)=>setLength(Number(e.target.value))}
          />
          <label className="text-white">Length: {length}</label>
          <input type="checkbox"
          value={numberAllowed}
          onClick={()=>setNumberAllowed(prev=>(!prev))}
          />
          <label className="text-white">Numbers</label>
          <input type="checkbox"
          value={specialCharAllowed}
          onClick={()=>setSpecialCharAllowed(prev=>(!prev))}
          />
          <label className="text-white">Numbers</label>
      </div>
   </>
  )
}

export default App
