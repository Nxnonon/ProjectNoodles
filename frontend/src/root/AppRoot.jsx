import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Napbar from "../component/Napbar";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Cart from "../Page/Cart";
import History from "../Page/History";
import Order from "../Page/Order";

const router =  createBrowserRouter([{
    path:"/",
    element:<Home/>,
    
},{
    path:"login",
    element:<Login/>,
    
},{
    path:"cart",
    element:<Cart/>,
    
},{
    path:"history",
    element:<History/>,
    
},{
    path:"order",
    element:<Order/>,
    
}])

function Appdistance(){
    return(
        <>
        <RouterProvider router={router}/>
        </>      
    )
} 

export default Appdistance



// children:[
    //     {path:"/", element:<Home/>},
    //     {path:"login", element:<Login/>}
    // ]