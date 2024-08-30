import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Components/Header"
import Body from "./Components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Error from "./Components/Error"
import RestaurantMenu from "./Components/RestaurantMenu"

// *App Layout Main Component

const App = ()=>{
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement: <Error/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)