
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import RootlayOut from './RootlayOut';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Aboutus from './components/aboutus/Aboutus'
import Menu from './components/menu/Menu'
import Addfooditems from './components/addfooditems/Addfooditems'
import Cart from './components/cart/Cart'
import UserLoginStore from './components/context/UserLoginStore';
import User from './components/users/Users';
function App() {

  let router  = createBrowserRouter([
    {
      path:"/",
      element:<RootlayOut/>,
      children:[
        {
          path : '/',
          element:<Home/>
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/Register',
          element:<Register/>
        },
        {
          path:"/Aboutus",
          element:<Aboutus/>
        },
        {
          path:"/Menu",
        element:<Menu/>
        },
        {
          path:"/Addfooditems",
        element:<Addfooditems/>
        },
        {
          path:"/Cart",
          element:<Cart/>
        },
        {
          path:"/users",
          element:<User/>
        }
      ]
    }
  ]);


  return (
    <div className="App">
      <UserLoginStore>
     <RouterProvider router={router}/>
     </UserLoginStore>
    </div>
  );
}

export default App;
