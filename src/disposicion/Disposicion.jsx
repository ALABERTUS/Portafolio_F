import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import './Disposicion.css'
import TextosAlternativos from "../components/TextosAlternativos"

const Disposicion = () => {
    return (
        <div className="disposicion">
            <Navbar />
            <main><Outlet /></main>
            <TextosAlternativos />
            <Footer />
        </div>
    )
}

export default Disposicion
