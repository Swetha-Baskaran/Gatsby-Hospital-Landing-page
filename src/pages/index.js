import React , { useEffect } from "react"
import API_Func from "../api.js"
import Navbar from "../components/navbar/index.jsx"
import Header from "../components/header/index.jsx"
import ServiceComponent from "../components/serviceComponent/index.jsx"
import Inovations from "../components/inovations/index.jsx"
import Speciality from "../components/specialist/index.jsx"
import CustomerReview from "../components/customerReview/index.jsx"
import NewsLetter from "../components/newsletter/index.jsx"
import Footer from "../components/footer/index.jsx"

const IndexPage = () => {
  useEffect(() => {
    API_Func()
  }, [])
  return (
    <div>
       <Navbar />
       <Header />
       <ServiceComponent />
       <Inovations />
       <Speciality />
       <CustomerReview />
       <NewsLetter />
       <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
