import React, {useState } from 'react';
import loginIcon from '../assest/signin.gif';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageTobases64.js';
import SummeryApi from '../common/index.js';
import {toast } from 'react-toastify';


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConformpassword, setConformPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: "",
    profilePic: "",
  });
  const navigate = useNavigate();



  const handaleOnchange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return{
        ...preve,
      [name]: value
      }
    });
  };

  const handllleUpdatenew = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);

    setData((preve)=>{
      return {
        ...preve,
        profilePic : imagePic
      }
    })
                          
    
  };



  //submit input data in API
  const handalSubmitnew = async(e) => {
    e.preventDefault();

    
    if(data.password === data.conformPassword){
      // console.log('SummeryApi.signUp.url',SummeryApi.signUp.url);

      const dataResponse = await fetch(SummeryApi.signUp.url,{
        method :SummeryApi.signUp.method,
        headers: {
          "content-Type": "application/json", 
        },
        body : JSON.stringify(data)
      })
      const dataAPI=await dataResponse.json()
//toast use for submit form  messages.

      if(dataAPI.success){
        toast.success(dataAPI.message)
        navigate("/login");
      }
      if(dataAPI.error){
        toast.error(dataAPI.message)
      }
    }
    else{
      toast.error("Please check password and confirm password");
    }
  };

 
  return (
    <section id='login'>
      <div className='mx-auto container px-4 align-center'>

        <div className='bg-white p-5 w-full max-w-md mx-auto rounded mt-5'>

          {/* Profile Upload Section .....  */}
          <div className='h-20 w-20 mx-auto mt-4 relative overflow-hidden rounded-full'>
            <div className='rounded-full'>
              <img src={loginIcon} alt='login icons' />
            </div>

            <form>
              <label>
                <div className='text-xs bg-slate-300 absolute bg-opacity-40 cursor-pointer top-8 py-4 right-1 rounded-md'>Upload Photo</div>
                <input type='file' onChange={handllleUpdatenew} />
              </label>
            </form>

          </div>

          {/* Profile bio Upload Section ..  */}
          <form onSubmit={handalSubmitnew} className='flex flex-col gap-2'>
            <div className='mt-4'>
              <label>Name :</label>
              <div className='bg-slate-200'>
                <input type='text'
                  placeholder='Enter your name..'
                  name='name'
                  value={data.name}
                  onChange={handaleOnchange}
                  className='h-full w-full outline-none bg-transparent py-2 px-2 rounded' />
              </div>
            </div>
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
                  onClick={() => setShowPassword((prev) => !prev)}>
                  <span>
                    {
                      showPassword ? (
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

            </div>

            <div className='mt-4'>
              <label>Confirm Password :</label>
              <div className='bg-slate-200 flex text-center'>
                <input type={showConformpassword ? "text" : "password"}
                  placeholder='************'
                  name='conformPassword'
                  value={data.conformPassword}
                  onChange={handaleOnchange}
                  className='h-full w-full bg-transparent px-2 py-2 rounded outline-none' />
                <div className='cursor-pointer text-xl pt-2 pr-2'
                  onClick={() => setConformPassword((prev) => !prev)}>
                  <span>
                    {
                      showConformpassword ? (
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

            </div>

            <button className='bg-red-600 text-white w-full max-w-[150px] mt-4 px-6 py-2 rounded-full hover:bg-red-700 hover:scale-110 transition-all mx-auto block mb-4'>Signup</button>
          </form>
          <p className='mb-1'>Already have an account? <Link to={"/login"} className='text-red-600  hover:underline'>Login</Link> </p>

        </div>

      </div>
    </section>
  );
};

export default Signup;
