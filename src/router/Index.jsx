import {createBrowserRouter} from "react-router-dom"; 
import Home from "../pages/Home";
import Proyectos from "../components/Proyectos";
import CrearProyecto from "../components/CrearProyecto";
import EditarProyecto from "../components/EditarProyecto.jsx"
import EliminarProyecto from "../components/EliminarProyecto";
import AcercaDeMi from "../components/AcercaDeMi";
import Contacto from "../components/Contacto.jsx";
import TextosAlternativos from "../components/TextosAlternativos";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/proyectos",
                element: <Proyectos/>
            },
            {
                path: "/crear",
                element: <CrearProyecto/>
            },
            {
                path: "/editar/:id",
                element: <EditarProyecto/>
            },
            {
                path: "/eliminar/:id",
                element: <EliminarProyecto/>
            },
            {
                path: "/acercademi",
                element: <AcercaDeMi/>
            },
            {
                path: "/contacto",
                element: <Contacto/>
            },
            {
                path: "/textos",
                element: <TextosAlternativos/>
            },
            
        ]
    }
]);


