import HomePage from "./Pages/HomePage/HomePage"
import AuthPage from "./Pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import { Route, Routes } from "react-router-dom"
import GetJob from "./Pages/GetJob/GetJob"
import JobApplication from "./Pages/GetJob/JobApplication"
import HireJob from "./Pages/HireJob/HireJob"
import FreelancerProfile from "./Pages/FreelancerProfile/FreelancerProfile"
import { useEffect, useState } from "react"
import { couch } from "globals"
import axios from "axios"


function App() {
  const [users,setUsers] = useState(null);

  // useEffect(()=>{
  //   const fetchUsers = async ()=>{
  //     try {
  //       const response = await fetch('http://localhost:8080/api/users/getAllUsers', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  
  //       const data = await response.json();
  //       console.log('Fetched users:', data);
  //       setUsers(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchUsers()
  // },[])

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/users/getAllUsers")
  //     .then(res => setUsers(res.data))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <>
    <PageLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/get-job" element={<GetJob />} />
      <Route path="/get-job/apply" element={<JobApplication />} />
      <Route path="/hire-job" element={<HireJob />} />
      <Route path="/:username" element={<FreelancerProfile />} />
    </Routes>
    </PageLayout>
    </>
  )
}

export default App
