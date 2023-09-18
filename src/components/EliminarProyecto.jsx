import axios from "axios";

const EliminarProyecto = ({ id, onDelete }) => {
  const eliminarProyecto = async () => {
    try {
      // Realizar una solicitud DELETE al servidor para eliminar el proyecto
      await axios.delete(`http://localhost:8080/api/v1/portafolio/${id}`);
      // Llamar a la función onDelete para actualizar la lista de proyectos
      onDelete();
    } catch (error) {
      console.error("Error al eliminar el proyecto:", error);
    }
  };

  return (
    <div>
      <button onClick={eliminarProyecto}className="delete-button">Eliminar Proyecto</button>
    </div>
  );
};

export default EliminarProyecto;


