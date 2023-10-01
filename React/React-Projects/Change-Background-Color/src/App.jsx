import { useState } from "react"
import ColorButton from "./components/ColorButton"

function App() {

  const [bgColor,setBgColor] = useState("#313131");

  function changeColor(color){
      setBgColor(color);
      console.log(color);
  }

  return (
    <div className='w-full h-screen' 
    style={{backgroundColor: bgColor, color: "white"}}>

      <div className="fixed inset-x-0 bottom-8 px-5 py-3
                      flex flex-wrap justify-center  m-5
                      rounded-3xl" 
           style={{backgroundColor:"white", color: "black"}}>

            {/* Pass the handleColorChange function to ColorButton */}
        <ColorButton colorName="Red" onClick={() => changeColor("red")} />
        <ColorButton colorName="Green" onClick={() => changeColor("green")} />
        <ColorButton colorName="Black" onClick={() => changeColor("black")} />
        <ColorButton colorName="Olive" onClick={() => changeColor("olive")} />
        <ColorButton colorName="Brown" onClick={() => changeColor("brown")} />
        <ColorButton colorName="Purple" onClick={() => changeColor("purple")} />
        <ColorButton colorName="Orange" onClick={() => changeColor("orange")} />
        <ColorButton colorName="Tomato" onClick={() => changeColor("tomato")} />
      </div>
    </div>
  )
}

export default App
