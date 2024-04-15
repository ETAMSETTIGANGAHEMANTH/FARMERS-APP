import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './Users.css'

function User() {
    
    let[listusers,setListofUsers]  = useState([]);
    //error
    let[err,setErr] = useState("");

    let number = 1;

    useEffect(()=>{
        axios.get("http://localhost:8080/efarmers/getallusers")
        .then(Response=>{
            console.log(Response.data)
            setListofUsers(Response.data);
        })
        .catch(err=>{
            if(err.Response){
                setErr(err.message);
            }
            else if(err.request){
                setErr(err.message);
            }
            else{
                setErr(err.message);
            }
        })
    },[])
  return (
    <div>

        <div>
            
        <table className="table text-center">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    {
        listusers.map((user,index)=>(
            <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{<img src ={user.image} alt = "image of user" style={{width:'60px', height:'60px'}}></img>}</td>
    </tr>

        )
            
        )
    }
  </tbody>
</table>

            
        </div>

    </div>
  )
}

export default User