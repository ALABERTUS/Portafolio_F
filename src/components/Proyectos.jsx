import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './Proyecto.css'
import EliminarProyecto from "./EliminarProyecto"

const url = 'http://localhost:8080/api/v1/portafolio'
const Proyectos = () => {
    const [proyectos, setProyectos] = useState([])
    
    useEffect( () => {
        getAllProyectos()
    }, [])


    const getAllProyectos = async () => {
        const response = await axios.get(url)
        let data = response.data
        setProyectos(data)
        console.log(data)
    }



return (
    <div className="container">
        {
            proyectos.map((proyecto) => (
                <div key={proyecto.id} className="form">
                    <h2 >{proyecto.nombre}</h2>
                    <p>{proyecto.description}</p>
                    <img src={proyecto.img} alt="" className="img"/>
                    <p>{proyecto.repositorio}</p>
                    <p>{proyecto.colaboradores}</p>
                    <p>{proyecto.tecnologias}</p>
                    <NavLink to="/create"><button className="btn-primary">Create</button></NavLink>
                    <NavLink to={`/edit/${proyecto.id}`}><button>edit</button></NavLink>
                    <EliminarProyecto id={proyecto.id} onDelete={getAllProyectos} />

                </div>
            ))
        }

    </div>
)
}

export default Proyectos