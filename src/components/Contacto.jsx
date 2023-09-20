import { useState } from 'react';
import './Contacto.css';

function Contacto() {
  // Estados para los campos de entrada
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Correo:', correo);
    console.log('Mensaje:', mensaje);
  };

  return (
    <div className="contacto">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="alabertus@gmail.com">:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
