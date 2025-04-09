import HomePage from "./Pages/HomePage/HomePage"
import AuthPage from "./Pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import { Route, Routes } from "react-router-dom"
import GetJob from "./Pages/GetJob/GetJob"
import JobApplication from "./Pages/GetJob/JobApplication"
import HireJob from "./Pages/HireJob/HireJob"
import FreelancerProfile from "./Pages/FreelancerProfile/FreelancerProfile"


function App() {

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
