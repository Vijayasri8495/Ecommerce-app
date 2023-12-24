import React, { useMemo, useState } from "react";


  export  const Count=()=>{

    const [name, setName]=useState({
      name:string,
      age:number
    });

    const handleSubmit=()=>{
      setName(newName)
    }

    return (
      <>
      <p>Hello John!</p>
      <p>My name is {name}and I am 30 years of age</p>
      <button onClick={handleSubmit}>Change my name to john</button>
      </>
    )
  }