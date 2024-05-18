import React, { useContext, useState } from 'react'
import loginIcon from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummeryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context/index'


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigae = useNavigate()
    // inpput section 
    const {featchUserDetails} = useContext(Context);
console.log("generalContext",featchUserDetails);

    const handaleOnchange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    // form submition function
    const handalSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummeryApi.signIn.url, {
            method: SummeryApi.signIn.method,
        
        
        // const dataResponse = await fetch('http://localhost:8080/api/signin', {
        //     method: 'post',
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const dataAPI = await dataResponse.json();

        if (dataAPI.success) {
            toast.success(dataAPI.message)
            console.log("Login successful")
            navigae('/')
            featchUserDetails()
        }
        if (dataAPI.error) {
            toast.error(dataAPI.message)
            // console.error("Error occurred:", error);
        }

    }

    console.log("data login", data);

    return (
        <section id='login' >
            <div className='mx-auto container px-4 align-center'>

                <div className='bg-white p-5 w-full max-w-md mx-auto rounded mt-5'>
                    <div className='h-20 w-20 mx-auto mt-4'>
                        <img src={loginIcon} alt='login icons' />
                    </div>


                    <form onSubmit={handalSubmit} className='flex flex-col gap-2'>
                        <div className='mt-4'>
                            <label>Email :</label>
                            <div className='bg-slate-200'>
                                <input type='email'
                                    placeholder='Enter your mail..'
                                    name='email'
                                    value={data.email}
                                    onChange={handaleOnchange}
                                    className='h-full w-full outline-none bg-transparent py-2 px-2 rounded' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label>Password :</label>
                            <div className='bg-slate-200 flex text-center'>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder='************'
                                    name='password'
                                    value={data.password}
                                    onChange={handaleOnchange}
                                    className='h-full w-full bg-transparent px-2 py-2 rounded outline-none' />
                                <div className='cursor-pointer text-xl pt-2 pr-2'
                                    onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? 
                                            (
                                                <FaEye />
                                            )
                                            :
                                             (
                                             <FaEyeSlash />
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgotPasswordPages'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot Password ?
                            </Link>
                        </div>
                        <button className='bg-red-600 text-white w-full max-w-[150px] px-6 py-2 rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mb-4'>Login</button>
                    </form>
                    <p className='mb-4'>Don't have account ? <Link to={"/signup"} className='text-red-600 hover:underline'>Sign Up</Link> </p>

                </div>

            </div>
        </section>
    )
}

export default Login
