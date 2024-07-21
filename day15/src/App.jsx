import { useState } from "react";


const App = () =>{

  const [mode, setMode] = useState('white');

  function modes(){
    setMode('black')
  }

  return(
    <>
    <button onClick={modes}>change mode</button>
    <h1>Current mode selected - {mode}</h1>

    <div style={{height:'200px', width:'250px'}}>

    </div>
    </>
  )
}

export default App;