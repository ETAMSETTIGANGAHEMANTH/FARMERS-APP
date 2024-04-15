import React,{useEffect,useContext, useState} from 'react'
import {useForm} from 'react-hook-form';
import { loginContext } from '../context/loginContext';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    

    
    const [currentUser, loginErr, userloginStatus, loginUser ]  = useContext(loginContext); 

    let {
        register,handleSubmit,formState:{errors}
    }=useForm();

    let navigate=useNavigate();

    

    useEffect(()=>{
        if(userloginStatus === true ){
            navigate("/Menu")
        }
    },[userloginStatus])

    let submitForm=(data)=>{
        //axios.post("http://localhost:3500")
        loginUser(data);
    } 

  return (
    <div className='login-background'>
    <div className="container ">
        <div className='row form-style '>
            <div className='col-sm-6 col-md-4 mx-auto bg-secondary bg-opacity-75 d-flex flex-column justify-content-center form-background p-3 rounded'>
            <h1 className='text-center fs-1 login-heading'>Login</h1>
            {loginErr && <p className='fs-3 text-danger text-center '>{loginErr}</p>}
            <form onSubmit={handleSubmit(submitForm)}>
            <label htmlFor="username"  className="  fs-4 mt-3">Username</label>
                    <input type="text" className='form-control mt-1' placeholder='Enter username' id="username" {...register("username",{required:true})} />
                    {errors.username?.type==="required" && <p className="text-danger fw-bold fs-5">*username is required</p>}
                    <label htmlFor="password"  className=" fs-4 mt-3">Password</label>
                    <input type="password" className='form-control mt-1' placeholder='Enter password' id="password" {...register("password",{required:true})} />
                    {errors.password?.type==="required" && <p className="text-danger fw-bold fs-5">*password is required</p>}
                    <button type="submit" className='btn btn-success fs-5 mt-3 d-block float-end'>Login</button>

            </form>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Login
