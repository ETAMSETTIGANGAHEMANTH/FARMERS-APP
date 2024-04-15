import React,{useState} from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Register.css';


function Register() {
   let  {
        register,
        handleSubmit,
        formState:{errors}

    }=useForm();

    let navigate=useNavigate();
    let [err,setErr]=useState("")

    let submitForm=(data)=>{

      console.log(data);

       axios.post("http://localhost:8080/efarmers/saveUser",data).then(response=>{
        
          navigate("/Login");
          
       }).catch(err=>{
        console.log("err is",err)
        if(err.response){
          setErr(err.message)
          console.log("error setted1")
        }
        else if(err.request){
          setErr(err.message)
          console.log("error setted2")
        }
        else{
          setErr(err.message)
          console.log("error setted3")
        }
       })

    }
  return (
    <div className="register-background">
    <div className='container'>
        
          <div className='row '>

            <div className='col-sm-8 col-md-6 col-lg-5 mx-auto  mt-5 rounded bg-secondary bg-opacity-75 mb-5'>
            <h1 className='text-center fs-1 label-text'>Register</h1>
                <form onSubmit={handleSubmit(submitForm)}>
                    <label htmlFor="name"  className=" fs-3 mt-3">Username</label>
                    <input type="text" className='form-control mt-1' placeholder='Enter username' id="name" {...register("username",{required:true})} />
                    {errors.username?.type==="required" && <p className="text-danger fw-bold fs-4">*username is required</p>}
                    <label htmlFor="email"  className=" fs-4 mt-3">Email</label>
                    <input type="email" className='form-control mt-1' placeholder='Enter email' id="email" {...register("email",{required:true})} />
                    {errors.username?.type==="required" && <p className="text-danger fw-bold fs-5">*email is required</p>}
                    <label htmlFor="password"  className=" fs-4 mt-3">Password</label>
                    <input type="password" className='form-control mt-1' placeholder='Enter password' id="password" {...register("password",{required:true})} />
                    {errors.username?.type==="required" && <p className="text-danger fw-bold fs-5">*password is required</p>}
                    <label htmlFor="image"  className=" fs-4 mt-3">image</label>
                    <input type="text" className="form-control mt-3" placeholder="image" {...register("image",{required:true})}/>
                        {errors.image?.type==="required"&& <p className="text-danger fw-bold fs-5">*image is required</p>}
                        <label htmlFor='userType' className=" fs-4 mt-3">Type of User</label>
                      <select className='form-control mt-3' id="userType" {...register("role",{required:true})} >
                        <option value="choose" disabled >choose</option>
                        <option value="USER" >Customer</option>
                        <option value="ADMIN" >Farmer</option>
                      </select>
                      {errors.usertype?.type==="required"&& <p className="text-danger fw-bold fs-5">*user type is required</p>}
                    <button type="submit" className='btn btn-success fs-5 mt-3 mb-3 d-block float-end'>Sign up</button>
                
                </form>

            </div>
          </div>
    </div>
    </div>
  )
}

export default Register 