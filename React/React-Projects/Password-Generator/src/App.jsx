import { useState,useCallback,useEffect, useRef } from "react";

function App() {
  
  const [passwordLength, setPasswordLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const [password,setPassword] = useState("");

  const passwordRef = useRef(null);


  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let index = 1; index <=passwordLength; index++) {
      let charIndex = Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(charIndex);      
    }
    setPassword(pass);

  }, [passwordLength,numberAllowed,characterAllowed,setPassword]);


  const copyToClipboard = useCallback((event)=>{
    event.preventDefault();
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    generatePassword();
  }, [numberAllowed, characterAllowed, passwordLength, generatePassword])


  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-8">
        Random Password Generator
      </h1>
      <div className="bg-gray-800 rounded-lg p-4 md:p-6 flex flex-col items-center space-y-4 md:space-y-6">
        <form className="w-full md:w-auto flex flex-col gap-1 md:flex-row items-center md:space-x-4 ">
          <input
            type="text"
            className="h-10 px-3 bg-yellow-300 border border-gray-400 rounded-lg flex-grow text-black"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button 
           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-500" target="null"
           onClick={copyToClipboard}
          >
            Copy
          </button>
        </form>
        <div className="w-full md:w-auto flex flex-col md:flex-row items-center md:space-x-4">
          <label htmlFor="numbers" className="text-white">
            Include Numbers
          </label>
          <input type="checkbox" id="numbers" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)}/>
          <label htmlFor="special-chars" className="text-white">
            Include Special Characters
          </label>
          <input type="checkbox" id="special-chars" defaultChecked = {characterAllowed} onChange={()=>setCharacterAllowed((prev)=>!prev)}/>
        </div>
        <input
          type="range"
          min={8}
          max={28}
          className="w-full cursor-pointer"
          style={{ backgroundColor: "#121212" }}
          id="length"
          value={passwordLength}
          onChange={(e)=>{
            // console.log(e.target.value);
            setPasswordLength(e.target.value);
          }}

        />
        <label htmlFor="length">Length: {passwordLength}</label>
      </div>
    </div>
  );
}

export default App;
