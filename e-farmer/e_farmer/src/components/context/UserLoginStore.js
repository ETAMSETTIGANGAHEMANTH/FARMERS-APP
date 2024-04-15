import React ,{useState} from 'react'
import { loginContext } from './loginContext';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';


function UserLoginStore({children}) {
    

    let [err,setErr]=useState("")                            //http://localhost:3500/user-api/user-login
    let [currentUser,setCurrentUser]=useState("");
    let [loginErr,setLoginErr]=useState("");
    let [userloginStatus,setUserLoginStatus]=useState(false)
    let [username,setUsername] = useState("");
    const loginUser=(userCredentialsObj)=>{
        console.log(userCredentialsObj);
        axios.post("http://localhost:8080/efarmers/credentials",userCredentialsObj).then(response=>{
            if(response.data.success===true){                          //success
                localStorage.setItem("token",response.data.token)
                setCurrentUser(response.data.user)
                setLoginErr("")
                setUserLoginStatus(true)
                setUsername(response.data.username);
            }
            else{
                setLoginErr(response.data.message)
            }
        }).catch(err=>{
            console.log("err in user login",err)
        })
    }


    const logoutUser=()=>{
        localStorage.clear();
        setUserLoginStatus(false)
        currentUser.usertype=""
        
    }

  return (
    <div>
        <loginContext.Provider value={[currentUser,loginErr,userloginStatus,loginUser,username,logoutUser]}>{children}</loginContext.Provider>
    </div>
  )
}

export default UserLoginStore