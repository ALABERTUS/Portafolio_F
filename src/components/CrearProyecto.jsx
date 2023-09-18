import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = 'http://localhost:8080/api/v1/portafolio'

const CrearProyecto = () => {
    
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [img, setImg] = useState("")
    const [repositorio, setRepositorio] = useState("")
    const [colaboradores, setColaboradores] = useState("")
    const [tecnologias, setTecnologias] = useState("")
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, {
            nombre: nombre,
            descripcion: descripcion, 
            img: img,
            repositorio: repositorio, 
            colaboradores: colaboradores,
            tecnologias: tecnologias,
        })
        navigate("/proyectos")
    } 

return (
    <div>
        <h3>Crear Nuevo Proyecto</h3>
        <form onSubmit={store}>
            <div>
                <label>nombre</label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>descripcion</label>
                <textarea 
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <div>
                <label>img</label>
                <input 
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>
            <div>
                <label>repositorio</label>
                <textarea 
                    type="text"
                    value={repositorio}
                    onChange={(e) => setRepositorio(e.target.value)}
                />
            </div>
            <div>
                <label>colaboradores</label>
                <textarea 
                    type="text"
                    value={colaboradores}
                    onChange={(e) => setColaboradores(e.target.value)}
                />
            </div>
            <div>
                <label>tecnologias</label>
                <textarea 
                    type="text"
                    value={tecnologias}
                    onChange={(e) => setTecnologias(e.target.value)}
                />
            </div>
            <button type="submit">Crear Proyecto</button>
        </form>
    </div>
)
}

export default CrearProyecto;