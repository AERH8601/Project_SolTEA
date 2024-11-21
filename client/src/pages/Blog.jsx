import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Blog.scss'; // Estilos personalizados

const Blog = () => {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    // Simula una llamada a la API para obtener artículos
    const fetchArticulos = async () => {
      try {
        const data = [
          { id: 1, titulo: "Cómo la energía solar está transformando las ciudades", resumen: "Descubre cómo la energía solar está cambiando el panorama urbano y creando ciudades más sostenibles." },
          { id: 2, titulo: "Nuevas tendencias en eficiencia energética", resumen: "Conoce las últimas tecnologías y prácticas para optimizar el uso de la energía en hogares y empresas." },
          { id: 3, titulo: "El futuro de las energías limpias", resumen: "Explora los avances más recientes en energías renovables y su impacto en el medio ambiente." },
          { id: 4, titulo: "Beneficios de instalar baterías de litio en casa", resumen: "Aprende cómo las baterías de litio pueden ayudarte a almacenar energía de forma eficiente." },
        ];
        setArticulos(data);
      } catch (err) {
        console.error("Error al obtener los artículos:", err);
      }
    };

    fetchArticulos();
  }, []);

  return (
    <div className="blog-container">
      <h1>Blog de Energías Renovables</h1>
      <p>Explora nuestros artículos sobre innovación, eficiencia y avances en energías limpias.</p>

      <div className="articulos">
        {articulos.map((articulo) => (
          <div key={articulo.id} className="articulo-card">
            <h3>{articulo.titulo}</h3>
            <p>{articulo.resumen}</p>
            <Link to={`/blog/${articulo.id}`} className="leer-mas">Leer más...</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
