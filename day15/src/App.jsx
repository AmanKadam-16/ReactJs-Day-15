import { useState } from "react";

const App = () =>{
// useState() | Hook

const [name, setName]  = useState('abc')

  return(

    <>
    <button onClick={()=>setName('John')}>change state of name</button>
    <h1>current state of name is {name}</h1>
    {/* // e | e.target.value */}
    {/* <input type="text" value={name} onChange={
      (e)=>{setName(e.target.value)
         console.log('current value',name)
      }} /> */}
    </>
  )
}

export default App;