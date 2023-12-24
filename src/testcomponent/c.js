import React, { useContext } from "react";
import { CounterContext } from "./context";


export const Ccomponent=(props)=>{
   console.log(props.Token,"token in c========")
    
    return (
        <>
        <p>This is from C component</p>
        
        </>
    )
}
