// import { Link, useNavigate } from "react-router-dom";


// const App = () =>{
// // useNavigate hook for routing through pages | components
//   const navigate = useNavigate();

//   function clickAbout(){
//     navigate('/about')
//   }

//   return(
//     <>
//     <h2>Home</h2>
//     <h3>This is home page.</h3>
//     {/* <h2 onClick={clickAbout} style={{ cursor:'pointer' }} >about</h2> */}
//     <Link to='/about' >About</Link>
//     </>
//   )
// }

// export default App;
import './App.css'

import { useState } from "react";
const style = {color:'grey', fontWeight:'600'}  //object  | Internal CSS
const App = () =>{

  // let x = 1;
  const [count, setNumber] = useState(0)  // 1,2,3,4

  function increment(){
    setNumber(count+1)
  }

  return(
    <>
    
   <h1 className='heading1'>{count}</h1> 

   <button onClick={increment}>increment</button>
    </>
  )
}

export default App;