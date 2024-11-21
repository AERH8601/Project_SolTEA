import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Articulo.scss';

const Articulo = () => {
  const { id } = useParams();
  const [articulo, setArticulo] = useState(null);

  useEffect(() => {
    // Simula la llamada a la API para obtener un artículo por ID
    const fetchArticulo = async () => {
      try {
        const data = {
          1: { titulo: "Cómo la energía solar está transformando las ciudades", contenido: "Contenido completo del artículo 1..." },
          2: { titulo: "Nuevas tendencias en eficiencia energética", contenido: "Contenido completo del artículo 2..." },
          3: { titulo: "El futuro de las energías limpias", contenido: "Contenido completo del artículo 3..." },
          4: { titulo: "Beneficios de instalar baterías de litio en casa", contenido: "Contenido completo del artículo 4..." },
        };
        setArticulo(data[id]);
      } catch (err) {
        console.error("Error al obtener el artículo:", err);
      }
    };

    fetchArticulo();
  }, [id]);

  if (!articulo) return <p>Cargando artículo...</p>;

  return (
    <div className="articulo-container">
      <h1>{articulo.titulo}</h1>
      <p>{articulo.contenido}</p>
    </div>
  );
};

export default Articulo;
