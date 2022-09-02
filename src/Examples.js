import React from 'react'
import {useState, useEffect} from 'react'
import './App.css'


function Examples() {
  const [inputFields, setInputFields] = useState([
    {firstName: '', lastName:''},
  ])
  const handleEvent = (index,event) =>{
    console.log(index, event.target.name);
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values)
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(inputFields);
  }
  const generateField = () =>{
    setInputFields([...inputFields, { firstName:'', lastName: ''}])
  }
  const remove = (index) => {
    let list = [...inputFields]
    list.splice(index,1)
    console.log(list);
    setInputFields(list)

  }
 
  return (
    <div>
      <form className='formm' onSubmit={handleSubmit}>
        {inputFields.map((inputField, index)=> (
          <div key={index} className="input-group">
            <div className='inputs'>
            <label>First Name:</label>
            <input type="text" name='firstName'  onChange={(event)=> handleEvent(index,event)} value={inputField.firstName}/>
            </div>
            <div className='inputs'>
            <label >Last Name</label>
            <input type="text" name='lastName' onChange={(event)=> handleEvent(index, event)}  value={inputField.lastName}/>
            </div>
            {inputFields.length > 1 && 
            <div>
            <button onClick={()=> remove(index)}><i className="fa fa-minus"></i></button>
            </div>
            }
            <div>
            <button onClick={generateField}><i className="fa fa-plus"></i></button>
            </div>
          </div>
        ))}
        <button onClick={handleSubmit} className='btn' type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Examples