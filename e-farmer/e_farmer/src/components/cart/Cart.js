import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Cart.css'
import { IoMdDoneAll } from "react-icons/io";


function Cart() {

    let [err,setErr]=useState("")
    let [users,setUsers]=useState([])
    //let [counter,setCounter]=useState(1)
    let [counters,setCounters]=useState({})

    const [showPopup, setShowPopup] = useState(false);


    let[costofallitems ,setCostofallitems]  = useState(0);

    let getCart=()=>{
        axios.get("http://localhost:8080/efarmers/get_cart_items")
        .then(response=>{   //http://localhost:3500/cart-api/get-cart
            console.log(response.data)
             setUsers(response.data)
            // const initialCounters = {};
            //     response.data.payload.forEach(userObj => {
            //         initialCounters[userObj.id] = userObj.quantity ;});
            //         setCounters(initialCounters);
    })
    .catch(err=>{
        if(err.request){
          setErr(err.message);
        }
        else if (err.response){
          setErr(err.message);
        }
        else{
          setErr(err.message);
        }

    })
    }
    // useEffect(() => {
    //   let totalCost = 0;
    //   users.forEach(() => {
    //     console.log(users.foodcost);
          
    //   });
    //   console.log(totalCost);
    //   setCostofallitems(totalCost);
    // }, [users]);
    let booked = () =>{
      setShowPopup(true);
    }

    let removecartitems = (object) => {
      let foodid = object.id;
      console.log(foodid);
      axios.delete(`http://localhost:8080/efarmers/removeitemfromcart/${foodid}`)
        .then(response => {
          console.log(response.data);
          getCart();
        })
        .catch(err => {
          if (err.request) {
            setErr(err.message);
          } else if (err.response) {
            setErr(err.message);
          } else {
            setErr(err.message);
          }
        });
    }
    
    
    useEffect(()=>{
      let totalCost = 0;
      users.map(userss => {totalCost = totalCost+userss.foodcost})
      setCostofallitems(totalCost);
    })
useEffect(()=>{
    getCart();
},[])

  return (
    <div className='container'>
        <h1 className='text-center text-success mt-3 fs-2'>Your cart</h1>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
            {users?.map(userObj=><div key={userObj.id}>
                <div className='card shadow mt-3'>
                    <img src={userObj.image} className='menu-item d-block mx-auto w-100' style={{ width: '200px', height: '200px' }}/>
                    <div className='card-body'>
                        <p className='text-secondary fs-3 text-center'>{userObj.foodname}</p>
                        <p className='text-secondary fs-3 text-center'>{userObj.foodcost}</p>
                    </div>
                    <div className='remove-button ms-auto'>
                    <button type="button" className="btn btn-danger" onClick={()=>removecartitems(userObj)}>remove</button>
                    </div>
                </div>
            </div>
                

            )}

        </div>
        {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
                        <p>Your Items Are Booked  <IoMdDoneAll /></p>
                    </div>
                </div>
            )}

<div className="costdiv btn btn-success mx-auto"  onClick={()=>booked()}>
          <h5>Buy Now : {costofallitems}</h5>
        </div>
    </div>
  )
}

export default Cart 