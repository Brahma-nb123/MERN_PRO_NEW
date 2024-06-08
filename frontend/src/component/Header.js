import React, { useState } from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
// import SummeryApi from '../common';
import {toast} from "react-toastify"

const Header = () => {
 
const user = useSelector(state=> state?.user?.user)
console.log("user headerkkkkkkkkkkkkkkkkkkkkkk")
const[menuDisPlay, setMenuDisPlay]=useState(false)


const handleLogout = async()=>{
    const fetchData = await fetch('http://localhost:8080', {
        method : 'get',
        credentials : 'include'
    })
    const data = await fetchData.json();
    if(data.success){
        toast.success(data.message)
    }
    if(data.error){
        toast.error(data.error)
    }
}
    return (
        <header className='h-16 shadow-md bg-white fixed w-full z-40 relative'>
            <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
                <div className=''>
                    <Link>
                    <Logo w={90} h={50} />
                    </Link>
                </div>

                <div className='hidden lg:flex items-center w-full justify-center max-w-sm'>
                    <input type='text' placeholder='search product here...' className='w-full outline-none pl-2 border rounded-l-full justify-center p-1 focus-within:shadow pl-3' />
                    <div className='text-white text-lg min-w-[50px] w-13 h-8 bg-red-600 flex items-center justify-center rounded-r-full focus-within:shadow '>
                        <FaSearch />
                    </div>
                </div>


                <div className='flex items-center gap-5'>

                   {/* //user profile section ***********************/}

                   <div className="relative group flex justify-center" onClick={()=>setMenuDisPlay(preve => !preve)}>
                   <div className='text-2xl cursor-pointer'>
                       {
                        user?.name ? (
                         <p>Username: {user.name}</p>
                        ): (
                            <PiUserCirclePlusFill />
                        )
                       }
                       
                    </div>

                    {
                        menuDisPlay && (
                            <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded '>
                            <nav>
                                <Link to={"admin-panel"} className='whitespace-nowrap hover:bg-slate-100 p-2 rounded'>Admin Panel</Link>                    </nav>
                            </div>
                        )
                    }
                   
                   </div>

                    <div className='text-2xl cursor-pointer relative'>
                        <span><BsCartCheckFill /></span>
                        <div className='bg-red-600 text-white w-5 h-5 rounded-full p-2 flex items-center justify-center absolute -top-2 -right-2'>
                        <p className='text-sm'>0</p>
                        </div>
                    </div>
                    <div>
                        {
                            user?._id ?
                           (
                            <button onClick={handleLogout} className='bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full flex items-center justify-center'>Logout</button>
                           )
                           :
                           (
                            <Link to={'/login'} className='bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full flex items-center justify-center'>
                            Login
                        </Link>
                           )
                        }
                   
                </div>
                </div>
                

            </div>
        </header>
    )
}

export default Header
