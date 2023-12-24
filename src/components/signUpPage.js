
import React, { useState } from "react";
import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
  name: string().min(2).max(15).required(),
  email: string().email().required(),
  password: string().min(8).max(15).required(),
  confirmPassword:string().min(8).max(15).required().test('confirm-password','passwods not matching', function(confirmPassword){
   
    return confirmPassword== this.parent.password;
  })
 
});

export const SignUP=()=>{

    const [values, setValues]= useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''

});
   const [users, setUsers]=useState([])

    const handler =(key,value)=>{
        setValues({...values,
            [key]:value})   
    };
    
    const handleSubmit=()=>{
        // console.log(values)

        userSchema.validate(values ,{abortEarly:false}).then((response)=>{
        // console.log(response)
        setUsers([])
        }).catch((err)=>{
          setUsers(err.errors)
        })  

    }
    return(
        <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center", width:"100vw", height:"100vh",backgroundColor:"#f0f0f0"}}>
         <div style={{width:500, padding:20 ,border:'2px solid' }}>
        <div className="form-group" style={{marginBottom:"15PX" }}>
        <label style={{marginRight:"20px"}} >Name</label>
        <input type="Name" style={{width:"450px",height:'35px',marginRight:"50px"}}value={values.name} onChange={(event)=>{handler("name",event.target.value)}}className="form-control"  placeholder="Enter your Name"/>
        </div>
        <div className="form-group" style={{marginBottom:"15PX"}}>
        <label style= {{marginRight:"20px"}}>Email address</label>
        <input type="email"style={{width:"450px",height:'35px'}} value={values.email} onChange={(event)=>{handler("email",event.target.value)}}className="form-control"  placeholder="Enter email"/>
        </div>
        <div className="form-group" style={{marginBottom:"15PX"}}>    
        <label style= {{marginRight:"50px"}}>Password</label>   
        <input type="password" style={{width:"450px",height:'35px'}}value={values.password} onChange={(event)=>{handler("password",event.target.value)}}className="form-control"  placeholder="Password"/>
        </div>
        <div className="form-group" style= {{marginBottom:"15PX"}}>
        <label style= {{marginRight:"20px"}}> Confirm Password</label>
        <input type="Confirm password"style={{width:"450px",height:'35px'}}value={values.consfirmPassword} onChange={(event)=>{handler("confirmPassword",event.target.value)}}className="form-control"  placeholder="Confirm password"/>
        </div>

        {
            users.map((err)=>{
                return(
                    <p key="index" className="text-danger">{err}</p>
                )   
            })
        }
       <div>
       <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
       </div>
       <div style={{marginBottom:10}}>
        <p>Already has an account?<a href="/Login">Login Here</a> </p>
       </div>   
       </div>
       </div>       
    )   

}       


