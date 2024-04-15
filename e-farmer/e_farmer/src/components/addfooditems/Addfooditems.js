import React ,{useState} from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Addfooditems.css'
 
function Addfooditems() {
  let navigate=useNavigate();
  let {register,handleSubmit,formState:{errors}}=useForm();
  let [err,setErr]=useState("")

  let submitForm=(fd)=>{
    console.log(fd);
    axios.post("http://localhost:8080/efarmers/add_food_item",fd).then(response=>{
     console.log(response.data=="saved");
       navigate("/Menu")
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
    <div className='addfooditems-background'>
    <div className="container">
      <div className='row '>
        <div className='col-sm-10 col-sm-8 col-md-7 mx-auto'>
        <h1 className='text-center text-light fs-1 mt-5 addfooditems-heading'>Add Item</h1>
        {err.length!==0 && <p className='text-danger fs-3 text-center'>{err}</p>}
          <form className='mt-4' onSubmit={handleSubmit(submitForm)}>
            <label htmlFor='foodname'  className="text-light fs-4 mt-3">Name</label>
            <input type="text" id="foodname" className='form-control mt-3' placeholder="" {...register("foodname",{required:true})}/>
            {errors.foodname?.type==="required"&&<p className='text-danger fs-4'>*name of the item required</p>}

            <label htmlFor='foodcost'  className="text-light fs-4 mt-3">Cost</label>
            <input type="number" id="foodcost" className='form-control mt-3' placeholder="" {...register("foodcost",{required:true})}/>
            {errors.foodcost?.type==="required"&&<p className='text-danger fs-4'>*cost of the item required</p>}

            <label htmlFor='image'  className="text-light fs-4 mt-3">Image</label>
            <input type="text" id="image" className='form-control mt-3' placeholder=""{...register("image",{required:true})}/>
            {errors.image?.type==="required"&&<p className='text-danger fs-4'>*image required</p>}
            <label htmlFor='foodType'  className="text-light fs-4 mt-3">Type</label>
            <select className='form-control mt-3' id="foodType" {...register("foodtype",{required:true})} >
                        <option value="choose" disabled >choose</option>
                        <option value="vegetables" >Vegetables</option>
                        <option value="fruits" >Fruits</option>
                        <option value="pulses" >Pulses</option>
                        <option value="grains" >Grains</option>
                        <option value="chicken" >Chicken</option>
                       
                      </select>
                      {errors.usertype?.type==="required"&& <p className="text-danger fs-5">*user type is required</p>}


            <button type="submit" className='btn btn-success fs-5 mt-3 d-block float-end mb-5'>Add Item</button>
            






          </form>

        </div>
      </div>
      </div>

      </div>
    
  )
}

export default Addfooditems