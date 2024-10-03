import React, { useState } from 'react'

const DisplayName = () => {
  
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [fullName, setFullName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`)
    }
  
    return (
    <>
    <h1>Full Name Display</h1> 
    <form onSubmit={handleSubmit}> 
        First Name: <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> <br/>
        Last Name: <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/> <br/>
        <button type='submit'>Submit</button>
    </form>
{
    fullName &&   <p>Full Name: {fullName}</p>
}
   
    </>
  )
}

export default DisplayName