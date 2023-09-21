import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import './EditarProyecto.css'
import { useNavigate, useParams } from "react-router-dom"

const url = 'https://portafoliob-production.up.railway.app/api/v1/portafolio'

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
        try {
        await axios.put(`${url}/${id}`, {
            nombre: nombre,
            descripcion: descripcion,
            img: img,
            repositorio: repositorio,
            colaboradores: colaboradores,
            tecnologias: tecnologias
        });
        navigate("/proyectos");
    } catch (error) {
        console.error("error al editar el proyecto:", error);
    }
};
useEffect(() => {
    const getproyectoById = async () => {
        try {
            const response = await axios.get(`${url}/${id}`);
            const proyecto = response.data;
            setNombre(proyecto.nombre);
            setDescripcion(proyecto.descripcion);
            setImg(proyecto.img);
            setRepositorio(proyecto.repositorio);
            setColaboradores(proyecto.colaboradores);
            setTecnologias(proyecto.tecnologias);
        } catch (error) {
            console.error("error al editar el proyecto:", error);
        }
    };
    getproyectoById();
}, [id]);

return (
    <div className="editarProyecto">
        <h2>Editar Proyecto</h2>

        <form onSubmit={update}>
            <div>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />    
            </div>
            <div>
                <label>Descripcion</label>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <div>
                <label>Img</label>
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
            </div>
            <div>
                <label>Repositorio</label>
                <textarea value={repositorio} onChange={(e) => setRepositorio(e.target.value)} />
            </div>
            <div>
                <label>Colaboradores</label>
                <textarea value={colaboradores} onChange={(e) => setColaboradores(e.target.value)} />
            </div>
            <div>
                <label>Tecnologias</label>
                <textarea value={tecnologias} onChange={(e) => setTecnologias(e.target.value)} />
            </div>
            <button type="editar">Editar Proyecto</button>
        </form>
    </div>
);
};


export default EditarProyecto