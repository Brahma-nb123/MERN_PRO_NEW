import { Outlet } from "react-router-dom";
import Headers from './component/Header'
import Footer from "./component/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import SummeryApi from "./common/index";
import Context from "./context";
import { setUserDetails } from "./store/userSlice";
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()



  const featchUserDetails = async () => {
    const dataResponse = await fetch(SummeryApi.current_user.url, {
      method: SummeryApi.current_user.method,
    //  const dataResponse = await fetch('http://localhost:8080//api/user-details', {
    //   method:'get',
      credentials: 'include'
    })
    const dataAPI = await dataResponse.json();

    if (dataAPI.success) {
      dispatch(setUserDetails(dataAPI.data))
    }
    console.log("dataUser", dataAPI)
  }
  useEffect(() => {
    // useeDetails 
    featchUserDetails();
  })

  return (
    <>
      <Context.Provider value={{
        featchUserDetails //user details fatch 
      }}>

        <ToastContainer />
        <Headers />
        <main className="min-h-[calc(100vh-120px)]"><Outlet /></main>
        <Footer />

      </Context.Provider>

    </>

  );
}

export default App;
