import { useState, useEffect } from 'react';
import './TextosAlternativos.css';

const TextosAlternativos = () => {
const texts = [
    'El insensato que reconoce su insensatez es un sabio.Pero un insensato que se cree sabio es, en verdad, un insensato',
    'El que envidia no tiene paz',
    'En lo que pensamos nos convertimos',
    'La muerte no puede ser temida si se ha vivido sabiamente',
    'La paz viene de dentro, no hay que buscarla fuera',
    'El dolor es inevitable, pero el sufrimiento es opcional',
    'No es más rico quien más tiene, sino quien menos necesita',
    'Hay tres cosas que no pueden ocultarse por mucho tiempo: el sol, la luna y la verdad',
    'Nadie te castigará por tu enfado; será él mismo el encargado de castigarte',
    'No vivas del pasado, no imagines el futuro, concéntrate en el momento presente',
    'En cualquier batalla pierden vencedores y vencidos',
    'Si un problema tiene solución ¿para qué preocuparse? y si no lo tiene, ¿para qué preocuparse?',
    'Si lo piensas, decídelo. Si lo decidiste, no lo pienses.',
    'No retengas a quien se va, ni rechaces a quien llega.'
]; // Lista de textos a mostrar
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar el índice actual

useEffect(() => {
    // Función para alternar el texto cada 2 segundos
    const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [texts.length]); // El efecto se ejecuta una vez al montar el componente

    return (
    <div className="text-container" >
        <p className="text">{texts[currentIndex]}</p>
    </div>
    );
};

export default TextosAlternativos;
