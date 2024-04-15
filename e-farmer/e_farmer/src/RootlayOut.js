import React ,{useContext}from 'react'
import { Outlet , NavLink} from 'react-router-dom';
import './RootlayOut.css';
import { loginContext} from './components/context/loginContext';

function Rootlayout() {
   
  const [currentUser, loginErr, userloginStatus, loginUser,username,logoutUser]  = useContext(loginContext); 

    console.log(currentUser,loginErr,userloginStatus,username);
  return (
    <div>
        
     <ul className="nav d-flex flex-row justify-content-center b p-2 navbar ">
  {currentUser==="ADMIN"?(
  <div className='d-flex flex-row'>
    <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Menu" >Menu</NavLink>
  </li>
    
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Addfooditems" >Addfooditems</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Login" onClick={logoutUser}>Logout</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Users" >Users</NavLink>
  </li>
  
  </div>)
  :currentUser==="USER"?
  (
    <div className='d-flex flex-row'>
      <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Menu" >Menu</NavLink>
  </li>
    <li className="nav-item">
    <NavLink className='nav-link fs-2 text-white ' to="/" >Home</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Login" onClick={logoutUser}>Logout</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Aboutus" >Aboutus</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Cart" >Cart</NavLink>
  </li>
  
  </div>

  )
  :
  (
  <div className='d-flex flex-row'>
    <li className="nav-item">
    <NavLink className='nav-link fs-2 text-white ' to="/" >Home</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Login" >Login</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Register" >Register</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className='nav-link fs-2 text-white' to="/Aboutus" >Aboutus</NavLink>
  </li>
  </div>)
  }
</ul>
<div className="outlet-container">
    <Outlet/>
</div>
<div className='bg-dark bg-opacity-25 p-5 text-center'>
    <p >Contact us:9381677689</p>
    <p >gmail:gangahemanthettamsetti@gmail.com</p>
</div>
    </div>
  )
}

export default Rootlayout