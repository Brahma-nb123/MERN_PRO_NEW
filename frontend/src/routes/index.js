import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import ForgotPasswordPages from '../pages/ForgotPasswordPages.js'
import Signup from '../pages/Signup.js'
import AdminPanel from '../pages/AdminPanel.js'


const router =createBrowserRouter(
    [
        {
            path : "/",
            element : <App/>,
            children : [
                {
                    path : "",
                    element : <Home/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path:"forgotPasswordPages",
                    element: <ForgotPasswordPages/>
                },
                {
                    path :'signup',
                    element:<Signup/>
                },
                {
                    path : 'admin-panel',
                    element : <AdminPanel/>
                }
            ]
        }
    ]
)

export default router;