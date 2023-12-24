import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const Myapi=(user)=>{
    const [article,setArticle]=useState([]);

   const getTheNews=()=>{
     axios({
        url:"https://api.publicapis.org/entries",
        method:"Get"
     }).then((response)=>{
        setArticle(response.data.entries)
     }).catch((reject)=>{
        console.log(reject)
     })
   }
 useEffect(()=>{
    getTheNews();
    },[])

    return (
        <>
       <h1>News application coming soon</h1>
       
       {
        article.map((ele,index)=>{
            return (
                <>
                <p key={index}>{ele.Description}</p>  
               </>
            )
        })     
       }
       </>
    )   
}
export default Myapi;   