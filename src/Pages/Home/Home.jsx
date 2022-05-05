import "./home.css"
import Navbar from "../../Components/Navbar/Navbar"
import { Header } from "../../Components/Header/Header"
import Featured from "../../Components/Featured/Featured"
import PropertyList from "../../Components/PropertyList/PropertyList"
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties"
import MailList from "../../Components/MailList/MailList"
import Footer from "../../Components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-title"> Homes guests love </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}
