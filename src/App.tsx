import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";



import Login from "./Components/Login/Login.tsx";
import NotFound from "./Components/Tools/NotFound.tsx";
//https://www.youtube.com/watch?v=uhc4Fj2vvu0&list=PLjwdMgw5TTLUEOKPg5Z5TgwAOeWkjGL69&index=20 Video youtube pour apprendre les routes
const router = createBrowserRouter([
    {
        path: '/',
        element: <body><Outlet/></body>,
        errorElement:<NotFound/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
])

export default function App(){
    return <RouterProvider router={router}/>
}