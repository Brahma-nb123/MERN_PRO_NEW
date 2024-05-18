import React from 'react'
import { PiUserCirclePlusFill } from "react-icons/pi";
const AdminPanel = () => {
    return (
        <div className='min-h-[calc(100vh-120px)] flex '>
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
            </aside>

            <main>
                {/* represent all amin conmtenet ***************************** ? */}
                main
            </main>
        </div>
    )
}

export default AdminPanel
