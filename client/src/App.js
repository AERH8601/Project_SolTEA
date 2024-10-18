import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "../src/style.scss";

import Ofrecemos from "./pages/Ofrecemos";
import Proyectos from "./pages/Proyectos";
import Blog from "./pages/Blog";
import Contactanos from "./pages/Contactanos";
import Catalogo from "./pages/Catalogo";
import CalculadoraEnergetica from './pages/CalculadoraEnergetica'; // Importa el componente


const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      { 
        path: "/calculadora", 
        element: <CalculadoraEnergetica /> 
      },        
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/write",
        element: <Write/>,
      },
      { path: "/ofrecemos", element: <Ofrecemos /> },  // Ruta para "Ofrecemos"
      { path: "/proyectos", element: <Proyectos /> },  // Ruta para "Proyectos"
      { path: "/blog", element: <Blog /> },            // Ruta para "Blog"
      { path: "/contactanos", element: <Contactanos /> },  // Ruta para "Contáctanos"
      { path: "/catalogo", element: <Catalogo /> },  // Nueva ruta para el catálogo
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
      
    </div>
  );
};

export default App;
