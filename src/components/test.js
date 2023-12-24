import React from "react";
import { useState } from "react";

const TodoManager=()=>{
const [user, setUser]=useState('');
const [allTodos, setAlltodos]= useState([]);
const [editingIndex, setEditingIndex]=useState(undefined)

const handlingEvent=(event)=>{
    if(user.length>=20) return ;
    setUser(event.target.value);

}
const handlingSubmit=(index)=>{  
if (editingIndex !==undefined){
    const newlist =allTodos.map(( ele,index)=>{
        if(index === editingIndex ) return user;
        return ele;     
    })
  setAlltodos(newlist);
  setEditingIndex(undefined);
  setUser('')

}
else{
    const newArry =[...allTodos,user];
    setAlltodos(newArry);
    setUser('')
}   
   
}
const handleEdit=(index)=>{
    setEditingIndex(index);
    setUser(allTodos[index])

}

const handleDelete=(index)=>{
    allTodos.filter((acc,index)=>{
     return acc !==editingIndex ;
    })
}

    return(
        <>
        <h1 style={{color:"bisque"}}>  Todo Application</h1>
        <input type="text" value={user} onChange={handlingEvent}/>
        <button className="btn btn-danger" style={{margin:10}} onClick={handlingSubmit}>Submit</button>
        <table className="table table-hover" style={{width:600, textAlign:"center",margin:5}}>
            <thead>
                <tr>
                    <td>Index</td>  
                    <td>Task</td>
                    <td>Button</td>
                </tr>
            </thead>    
            <tbody>
                {allTodos.map((ele,index)=>{
                    return(
                       
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{ele}</td>
                            <td> 
                                <button className="btn btn-warning" onClick={()=>{handleEdit(index)}}>Edit</button>
                                <button className="btn btn-danger" onClick={()=>{handleDelete(index)}}>Delete</button>
                            </td>
                        </tr>   
                    )
                })} 
            </tbody>
        </table>

        </>
    )
}

export default TodoManager;
    
