import React, { useState } from "react";

function Form() {
  const [fullName, setFullName ] = useState([{
    fname: '',
    lname: ''
  }])
  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(name,value);
    setFullName((prev)=>{
      if(name === 'fname'){
        return{
          fname: value,
          lname: prev.lname
        }
      } else if(name === 'lname'){
        return{
          fname:prev.fname,
          lname: value
        }
      }
    } )
  }
  return (
    <div className="container">
      <h4>{fullName.fname} {fullName.lname}</h4>
      <input type="text" onChange={onChange} /> <br />
      <input type="text" onChange={onChange} /> <br />
      <button type="button">submit</button>

    </div>
  );
}

export default Form;
