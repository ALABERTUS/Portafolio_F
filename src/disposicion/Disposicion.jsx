import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const Disposicion = () => {
    return (
        <div className="disposicion">
            <Navbar />
            <p>CACA DE LA VACA</p>
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}

export default Disposicion
