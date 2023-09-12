import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const url = 'http://localhost:8080/api/v1/portafolio'

const EditarProyecto = () => {

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [img, setImg] = useState("")
    const [repositorio, setRepositorio] = useState("")
    const [colaboradores, setColaboradores] = useState("")
    const [tecnologias, setTecnologias] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${url}/${id}`, {
            name: nombre,
            description: descripcion,
            img: img,
            repositorio: repositorio,
            collaboradores: colaboradores,
            tecnologias: tecnologias
        })
        navigate("/")
    }
    useEffect( () => {
    const getProyectosById = async () => {

        const response = await axios.get(`${url}/${id}`)
        setNombre(response.data.name)
        setDescripcion(response.data.description)
        setImg(response.data.img)
        setRepositorio(response.data.repositorio)
        setColaboradores(response.data.colaboradores)
        setTecnologias(response.data.tecnologias)
    }

    getProyectosById()
    }, [id])



return (
    <div>
        <h3>Edit</h3>
        <form onSubmit={update}>
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
            <button type="submit">Edit</button>
        </form>
    </div>
)
}

export default EditarProyecto