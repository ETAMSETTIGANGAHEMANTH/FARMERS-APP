import React ,{useEffect,useState}from 'react'
import './Menu.css'
import { useContext } from 'react'
import axios from 'axios'
import { loginContext } from '../context/loginContext';

function Menu() {                  
let [Vegetables,setVegetables]=useState([])
let [Fruits,setFruits]=useState([])
let [Grains,setGrains]=useState([])
let [Pulses,setPulses]=useState([])
let [Chicken,setChicken]=useState([])

const [currentUser, loginErr, userloginStatus, loginUser,logoutUser]  = useContext(loginContext); 

let tempVegetables =[]
let tempFruits=[]
let tempGrains=[]
let tempPulses=[]
let tempChicken=[]

let [err,setErr]=useState("")

let addToCart=function(foodId){
  const requestData = {
    food_id: foodId.id,
    quantity: 1 
  };
  console.log(requestData)
  axios.post("http://localhost:8080/efarmers/add_cart_item",requestData).then(response=>{
    console.log(response.data);
     
}).catch(err=>{
console.log("we get error in adding the data into cart."  + err);
})
}


let getUser=()=>{
  axios.get("http://localhost:8080/efarmers/get_items").then(response=>{
          
        for(let item of response.data){
          if(item.foodtype==="vegetables"){
            tempVegetables.push(item)
          }
          else if(item.foodtype==="fruits"){
            tempFruits.push(item)
          }
          else if(item.foodtype==="grains"){
            tempGrains.push(item)
          }
          else if(item.foodtype==="pulses"){
            tempPulses.push(item)
          }
          else if(item.foodtype==="chicken"){
            tempChicken.push(item)
          }
          
          
        }


        setVegetables(tempVegetables)
        setFruits(tempFruits)
        setGrains(tempGrains)
        setPulses(tempPulses)
        setChicken(tempChicken)


  }).catch(err=>{
      setErr(err.message)
  })
}

useEffect(()=>{
      getUser();
      
},[])   //Vegetables,Fruits,Grains,Pulses,Chicken

  return (
    <div className='container'>
       <p className='text-success fs-1 mt-3 '>Items</p>
       <p className='text-warning fs-3 mt-3 '>Vegetables</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
      {Vegetables.map(foodObj=><div className='col' key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} style={{ width: '200px', height: '200px' }} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            {currentUser==="USER" && 
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> 
          }
          </div>
        </div>
        
      </div>)}
  </div>


      <p className='text-warning fs-3 mt-3 '>Fruits</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'> 
      {Fruits.map(foodObj=><div className='col' key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} style={{ width: '200px', height: '200px' }} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            {/* <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> */}
            {currentUser==="USER" && 
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> 
          }
          </div>
        </div>
        
      </div>)}
        </div>


      <p className='text-warning fs-3 mt-3 '>Grains</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
      
      {Grains.map(foodObj=><div className='col' key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} style={{ width: '200px', height: '200px' }}/>
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            {/* <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> */}
            {currentUser==="USER" && 
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> 
          }
          </div>
        </div>
        
      </div>)}
        

      </div>
      <p className='text-warning fs-3 mt-2 '>Pulses</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
      
      {Pulses.map(foodObj=><div className='col'key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} style={{ width: '200px', height: '200px' }}/>
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            {/* <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> */}
            {currentUser==="USER" && 
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> 
          }
          </div>
        </div>
        
      </div>)}
        

      </div>

      <p className='text-warning fs-3 mt-2 '>Non-Veg</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
      {Chicken.map(foodObj=><div className='col mb-3' key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} style={{ width: '200px', height: '200px' }}/>
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            {/* <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> */}
            {currentUser==="USER" && 
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button> 
          }
          </div>
        </div>
        
      </div>)}

      </div>
     

        </div>
  )
}

export default Menu 

// import React from 'react'

// function Menu() {
//   return (
//     <div>Menu</div>
//   )
// }

// export default Menu