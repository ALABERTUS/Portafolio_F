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
            description: descripcion, 
            img: img,
            repositorio: repositorio, 
            colaboradores: colaboradores,
            tecnologias: tecnologias,
        })
        navigate("/")
    }   

return (
    <div>
        <h3>Create</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>nombre</label>
                <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>descripcion</label>
                <textarea 
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>img</label>
                <input 
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>repositorio</label>
                <textarea 
                    type="text"
                    value={repositorio}
                    onChange={(e) => setRepositorio(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>colaboradores</label>
                <textarea 
                    type="text"
                    value={colaboradores}
                    onChange={(e) => setColaboradores(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>tecnologias</label>
                <textarea 
                    type="text"
                    value={tecnologias}
                    onChange={(e) => setTecnologias(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    </div>
)
}

export default CrearProyecto;