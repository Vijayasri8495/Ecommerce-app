import React, { useContext } from "react";
import { Bcomponent } from "./B";
// import { CounterContext } from "./context";

export const Acomponent=(props)=>{
    // const value=useContext(CounterContext)
    console.log(props.Token,' from a ===========')
    return (
        <>
        <p>this is From A component </p>
        <Bcomponent {...props}/>
        </>
    )
};