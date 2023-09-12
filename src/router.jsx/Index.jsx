import {createBrouserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Proyectos from "../components/Proyectos";
import CrearProyecto from "../components/CrearProyecto";
import EditarProyecto from "../components/EditarProyecto";
import EliminarProyecto from "../components/EliminarProyecto";

export const router = createBrouserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/proyectos",
        element: <Proyectos/>
    },
    {
        path: "/create",
        element: <CrearProyecto/>
    },
    {
        path: "/edit/:id",
        element: <EditarProyecto/>
    },
    {
        path: "/delete/:id",
        element: <EliminarProyecto/>
    },
]);


