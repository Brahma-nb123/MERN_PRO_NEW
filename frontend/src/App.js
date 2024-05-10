import { Outlet } from "react-router-dom";
import Headers from './component/Header'
import Footer from "./component/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import SummeryApi from "./common";
import Context from "./context";

function App() {


  const featchUserDetails = async () => {
    const dataResponse = await fetch(SummeryApi.current_user.url, {
      method: SummeryApi.current_user.method,
      credentials: 'include'
    })
    const dataAPI = await dataResponse.json();
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
