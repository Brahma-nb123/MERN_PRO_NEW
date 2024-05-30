

import React from 'react'
import {Link, Outlet} from 'react-router-dom'
// import Index from './SideMenu/index'


import { PiUserCirclePlusFill } from "react-icons/pi";
const AdminPanel = () => {
    return (
        <div className='min-h-[calc(100vh-120px)] md:flex hidden '>
            <aside className='w-full max-w-60 shadow-lg'>
                {/* represent all aside nave bar******************************  */}
                <div className='h-32 justify-center items-center flex'>
                    <div className="relative group flex justify-center flex-col">
                        <div className='text-5xl cursor-pointer'>
                            <PiUserCirclePlusFill />
                        </div>
                        <p className='capitalize tetx-lg font-sans'>usre name</p>
                        <p className=''>user role</p>
                    </div>
                </div>

                {/* navigation... */}
                {
                    <div>
                        <nav className='grid p-4'>
                            <Link to={'allUsers'} className='px-2 py-1 hover:bg-slate-200'>All User</Link>
                            
                            <Link to={'products'} className='px-2 py-1 hover:bg-slate-200'>All Product</Link>
                            {/* <Index/> */}
                        </nav>
                        
                    </div>
                }
            </aside>

            <main className='w-full h-full p-2'>
                {/* represent all amin conmtenet ***************************** ? */}
                <Outlet/>
            </main>
        </div>
    )
}

export default AdminPanel


// 8888888888888888888888888888 END 8888888888888888888888888888888888 


// import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { PiUserCirclePlusFill } from "react-icons/pi";

// const AdminPanel = () => {
//     return (
//         <div className='min-h-[calc(100vh-120px)] md:flex hidden'>
//             <aside className='w-full max-w-60 shadow-lg'>
//                 {/* Represent aside navigation bar */}
//                 <div className='h-32 justify-center items-center flex'>
//                     <div className="relative group flex justify-center flex-col">
//                         <div className='text-5xl cursor-pointer'>
//                             <PiUserCirclePlusFill />
//                         </div>
//                         <p className='capitalize text-lg font-sans'>User name</p>
//                         <p>User role</p>
//                     </div>
//                 </div>

//                 {/* Navigation with dropdown */}
//                 <nav className='p-4'>
//                     <DropdownMenu title="Users" className="block">
//                         <DropdownMenu title="Child 1">
//                             <Link to={'allUsers'} className='px-2 py-1 hover:bg-slate-200 block'>Link 1</Link>
//                             <Link to={'products'} className='px-2 py-1 hover:bg-slate-200 block'>Link 2</Link>
//                             <Link to={'mail'} className='px-2 py-1 hover:bg-slate-200 block'>Link 3</Link>
//                         </DropdownMenu>
//                         <DropdownMenu title="Child 2">
//                             <Link to={'/adminPanel/allUsers/child2/link1'} className='px-2 py-1 hover:bg-slate-200 block'>Link 1</Link>
//                             <Link to={'/adminPanel/allUsers/child2/link2'} className='px-2 py-1 hover:bg-slate-200 block'>Link 2</Link>
//                         </DropdownMenu>
//                     </DropdownMenu>
//                 </nav>
//             </aside>

//             <main className='w-full h-full p-2'>
//                 {/* Represent all admin content */}
//                 <Outlet />
//             </main>
//         </div>
//     );
// }

// // DropdownMenu component
// const DropdownMenu = ({ title, children }) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative">
//             <button onClick={handleToggle} className="px-2 py-1 hover:bg-slate-200 block w-full text-left">
//                 {title}
//                 {/* <svg className={`w-4 h-4 inline-block ml-1 transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z" clipRule="evenodd" />
//                 </svg> */}
//             </button>
//             {isOpen && (
//                 <div className="absolute bg-white shadow-md mt-2 py-2 w-full z-10">
//                     {children}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminPanel;
