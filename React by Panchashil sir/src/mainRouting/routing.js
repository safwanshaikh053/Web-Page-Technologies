import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../component/MyImagesComp";
import ParentComp from "../component/ParentComp";
import ClassComp from "../component/ClassComp";
import LoginComp from "../layout/LoginComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import UseStateHookComp from "../layout/UseStateHookComp";
import UseEffectHookComp from "../layout/UseEffectHookComp";
import ListComp from "../component/ListComp";
import ProductDashComp from "../layout/ProductDashComp";
import AddProductComp from "../layout/AddProductComp";
import EditProductComp from "../layout/EditProductComp";

const router = createBrowserRouter([
    // 2. default routing 
    {path:"/",element:<LoginComp/>},
    {path:"/login",element:<LoginComp/>},
    // 1. naming routing 
    {path:"/myimages",element:<MyImagesComp/>},
    // 3. parameterize routing 
    {path:"/parent/:id",element:<ParentComp/>},
    {path:"/class",element:<ClassComp/>},

    // 4.child routing 
    {path:"/maindashboard",element:<MainDashboardComp/>,children:[
        {path:"productdash",element:<ProductDashComp/>},
        {path:"addproduct",element:<AddProductComp/>},
        {path:"editproduct/:id",element:<EditProductComp/>},
        {path:"list",element:<ListComp/>},
        {path:"usestate",element:<UseStateHookComp/>},
        {path:"useeffect",element:<UseEffectHookComp/>},
    ]},
    // wild card routing 
    {path:"/*",element:<PageNotFoundComp/>}

]);

export default router;