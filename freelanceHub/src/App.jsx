import HomePage from "./Pages/HomePage/HomePage"
import AuthPage from "./Pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/PageLayout/PageLayout"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
    <PageLayout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
    </PageLayout>
    </>
  )
}

export default App
