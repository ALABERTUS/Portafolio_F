import axios from "axios";
import { useNavigate } from "react-router-dom";

const EliminarProyecto = ({ id, onDelete }) => {
  const navigate = useNavigate();

  const confirmarEliminar = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
      eliminarProyecto();
    }
  };

  const eliminarProyecto = async () => {
    try {
      // Realizar una solicitud DELETE al servidor para eliminar el proyecto
      await axios.delete(`http://localhost:8080/api/v1/portafolio/${id}`);
      // Llamar a la función onDelete para actualizar la lista de proyectos
      onDelete();
      navigate("/proyectos");
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  return (
    <div>
      <button onClick={confirmarEliminar} className="delete-button">Eliminar Proyecto</button>
    </div>
  );
};

export default EliminarProyecto;

