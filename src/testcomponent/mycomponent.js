import React, { useState } from "react";
import { Acomponent } from "./A";
import { CounterContext } from "./context";
import { Ccomponent } from "./c";
import { Bcomponent } from "./B";

const TokenProvider=(props)=>{
  const Token=localStorage.getItem("authToken")
  return <props.component Token={Token}/>
}


export const MiniComponent=()=>{
    return (
        <>
        <TokenProvider  component={Acomponent}/>
        </>
    )   
}

