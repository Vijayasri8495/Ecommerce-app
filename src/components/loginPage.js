
import React, { useState } from "react";
import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
  email: string().email().required(),
  password: string().min(8).max(15).required().test('testing','password should match',function(password){
    return  password ==this.parent.password
  })
});

 export const Login=()=>{
    const [schema ,setSchema]=useState([])
    const [users,setUsers]=useState({
        email:'',
        password:''
    })

    const handleChange=(key ,value)=>{
        
        setUsers({
            ...users,
            [key]:value

        })   
    }

    const handle=()=>{
        userSchema.validate(users,{abortEarly:false}).then((res)=>{
            console.log(res)
            setSchema([])
        }).catch((er)=>{
           setSchema(er.errors)
        })
        console.log(users)
    }

    return(
        <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", width:"100vw", height:"100vh"}}>
         <div style={{width:450, padding:20 ,border:'2px solid' }}>
        <div className="form-group" style={{marginBottom:"20PX" }}>
        <label style={{marginRight:"20px"}} >Email address</label>
        <input type="Name" style={{width:"410px",height:'35px',marginRight:"50px"}}value={users.email} onChange={(event)=>{handleChange('email',event.target.value)}} className="form-control"  placeholder="Enter email"/>
        </div>
        <div className="form-group" style={{marginBottom:"20PX"}}>
        <label style= {{marginRight:"20px"}}>Password</label>
        <input type="email"style={{width:"410px",height:'35px'}} value={users.password}onChange={(event)=>{handleChange('password',event.target.value)}}  className="form-control"  placeholder="Password"/>
        </div>
        {
            schema.map((val,index)=>{
                return(
                    <p key="index"className="text-warning">{val}</p>
                )
            })
        }
        <button type="submit" className="btn btn-primary" onClick={handle}>Submit</button>
        <div style={{marginTop:10}}>
         <p> Don't have an account?<a href="/signup">Signup Here</a></p>
        </div>
        </div>
        </div>
    )
}

