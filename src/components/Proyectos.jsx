import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import './Proyecto.css'
import EliminarProyecto from "./EliminarProyecto"

const url = 'http://localhost:8080/api/v1/portafolio'
const Proyectos = () => {
    const [Proyectos, setProyectos] = useState([])
    
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
        <div>
            <NavLink to="/create"><button className="btn btn-primary">Create</button></NavLink>

        </div>
        {
            Proyectos.map((Proyecto) => (
                <div key={Proyecto.id} className="form">
                    <NavLink to={`/edit/${Proyecto.id}`}><button>edit</button></NavLink>
                    <h2 >{Proyecto.name}</h2>
                    <p>{Proyecto.description}</p>
                    <img src={Proyecto.img} alt="" className="img"/>
                    <p>{Proyecto.repositorio}</p>
                    <p>{Proyecto.colaboradores}</p>
                    <p>{Proyecto.tecnologias}</p>

                    <EliminarProyecto id={Proyecto.id} onDelete={getAllProyectos} />

                </div>
            ))
        }

    </div>
)
}

export default Proyectos