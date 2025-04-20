import HomePage from "./Pages/HomePage/HomePage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import { Route, Routes } from "react-router-dom"
import GetJob from "./Pages/GetJob/GetJob"
import JobApplication from "./Pages/GetJob/JobApplication"
import HireJob from "./Pages/HireJob/HireJob"
import FreelancerProfile from "./Pages/FreelancerProfile/FreelancerProfile"
import LoginPage from  './Pages/AuthPage/LoginPage'
import SignupPage from  './Pages/AuthPage/SignupPage'
import { useEffect, useState } from "react"
import { couch } from "globals"
import axios from "axios"
import { useAuth } from "./Context/AuthContext"
import { useSelector } from "react-redux"
import PostJob from "./Pages/PostJob/PostJob"



function App() {
  // const { token } = useSelector((state)=>state.auth);
  const  token  = localStorage.getItem('token')
  // const {token} = useAuth()

  useEffect(()=>{
    if(token){
      localStorage.setItem("user",true)
      // console.log(token)
    }
  },[token])


  return (
    <>
    <PageLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/get-job" element={<GetJob />} />
      <Route path="/get-job/apply" element={<JobApplication />} />
      <Route path="/hire-job" element={<HireJob />} />
      <Route path="/post-job" element={<PostJob />} />
      <Route path="/:username" element={<FreelancerProfile />} />
    </Routes>
    </PageLayout>
    </>
  )
}

export default App
