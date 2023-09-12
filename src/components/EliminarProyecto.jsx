import PropTypes from 'prop-types';




const EliminarProyecto = ({ proyecto, onDelete }) => {
    const handleEliminarClick = () => {
      onDelete(proyecto.id);
    };
  
    return (
      <div>
        <h3>Eliminar Proyecto</h3>
        <p>¿Estás seguro de que deseas eliminar el proyecto {proyecto.nombre}?</p>
        <button onClick={handleEliminarClick}>Eliminar</button>
      </div>
    );
  };
  
  EliminarProyecto.propTypes = {
    proyecto: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string,
      // ...
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  export default EliminarProyecto;

