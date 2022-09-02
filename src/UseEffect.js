import "./App.css";
import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const [state, setState] = useState(0) 
    useEffect(()=>{
      console.log(' changed');  // this one will after the function Mount
      return () => {
        console.log('This is the clean-up'); // this one will run after the useEffect is called
      }
    },[state])

    return (
      <div className="container">
     <h1>Hello</h1>
     <h1 onClick={()=> setState(c => c+1)}>{state}</h1>
   </div>
  )
}


export default UseEffect

// the first time functional componennt is mounted 
//the useEffect is called even if the state isn't updated


// if you dont use useEffect without depencies 
// that means your useEffect will be called everytime your
// functional component renders()