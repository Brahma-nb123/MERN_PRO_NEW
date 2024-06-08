import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home.js'
import Login from '../pages/Login.js'
import ForgotPasswordPages from '../pages/ForgotPasswordPages.js'
import Signup from '../pages/Signup.js'
import AdminPanel from '../pages/AdminPanel.js'
import AllUsers from '../pages/AllUser.js'
import Product from '../pages/Product.js'
import Mail from '../pages/Mail.js'
import MessageList from '../pages/MessageList.js'
import ChatList from '../pages/ChatList.js'
// import CallList from '../pages/CallList.js                                                                                                         '
import CallList from '../pages//CallList.js'

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
                    element : <AdminPanel/>,
                    children : [
                        {
                            path : 'allUsers',
                            element : <AllUsers/>
                        },
                        {
                            path : 'products',
                            element : <Product/>
                        },
                        {
                            path : 'mail',
                            element : <Mail/>
                        },
                        {
                            path : 'messagelist',
                            element : <MessageList/>
                        },
                        {
                            path : 'calllist',
                            element : <CallList/>
                        },
                        {
                            path : 'chatlist',
                            element : <ChatList/>
                        }
                    ]
                }
            ]
        }
    ]
)

export default router;