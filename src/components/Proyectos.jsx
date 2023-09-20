import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './Proyecto.css'
import './CrearProyecto.css'
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
        <div className="crearProyecto"> 
            <NavLink to="/crear"><button className="btn-primary">Crear Proyecto Nuevo</button></NavLink>
        </div>
        {
            proyectos.map((proyecto) => (
                <div key={proyecto.id} className="form">
                    <h2 >{proyecto.nombre}</h2>
                    <p>{proyecto.descripcion}</p>
                    <img src={proyecto.img} alt="img" className="img"/>
                    <p>{proyecto.repositorio}</p>
                    <p>{proyecto.colaboradores}</p>
                    <p>{proyecto.tecnologias}</p>
                    <NavLink to={`/editar/${proyecto.id}`}><button className="edit-button">Editar Proyecto</button></NavLink>
                    <EliminarProyecto id={proyecto.id} onDelete={getAllProyectos} />
                </div>
            ))
        }
    </div>
)
}

export default Proyectos