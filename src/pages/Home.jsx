import Proyectos from "../components/Proyectos.jsx"
import CrearProyecto from "../components/CrearProyecto.jsx"
import EditarProyecto from "../components/EditarProyecto.jsx"
import EliminarProyecto from "../components/EliminarProyecto.jsx"

const Home = () => {
  return (
    <div>
        <Proyectos/>
        <CrearProyecto/>
        <EditarProyecto/>
        <EliminarProyecto/>
    </div>
  )
}

export default Home
