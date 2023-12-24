import React, { useContext } from "react";
import { Ccomponent } from "./c";
import { CounterContext } from "./context";

export const Bcomponent=(props)=>{
    // const value=useContext(CounterContext)
    console.log(props.Token,"token in b=======")
    return (
        <>
        <p>this is a Bcomponet </p>
        <Ccomponent {...props}/>
        </>
    )
}