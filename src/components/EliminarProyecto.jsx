import axios from "axios"
import { useNavigate } from "react-router-dom"

const EliminarProyecto = ({ id, onDelete }) => {
  const navigate = useNavigate()

  const EliminarProyecto = async () => {
    const confirmed = window.confirm("¿Quieres eliminar este proyecto?")

    if (confirmed) {
      await axios.delete(`http://localhost:8080/api/v1/portafolio${id}`)
      onDelete()
      navigate("/")
    }
  }

  return (
    <div className="delete">
      <button onClick={EliminarProyecto}>Eliminar proyecto</button>
    </div>
  )
}

  export default EliminarProyecto;

