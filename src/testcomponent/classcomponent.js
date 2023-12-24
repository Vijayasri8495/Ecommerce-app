import React from "react";
import { CounterContext } from "./context";



export default   class MyClassComponent extends React.Component{
 static contextType=CounterContext;
    render(){
        return(
            <>
            <h1> This is a class component{this.context}</h1>
            </>

        )
    }


}