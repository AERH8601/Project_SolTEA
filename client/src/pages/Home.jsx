import React from 'react';
import { Link } from 'react-router-dom';
import soltea_video from '../video/soltea_video.mp4'; // Si usas React Router para las rutas
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get("/posts");
        setPosts(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const cardsData = [
    { title: "Ofrecemos", link: "/ofrecemos", description: "Descubre los servicios y productos que ofrecemos para energías renovables." },
    { title: "Proyectos", link: "/proyectos", description: "Conoce nuestros proyectos más destacados en energía solar y otras renovables." },
    { title: "Blog", link: "/blog", description: "Lee artículos y noticias sobre las últimas innovaciones en energía." },
    { title: "Contáctanos", link: "/contactanos", description: "Ponte en contacto con nosotros para más información." },
  ];

  return (
    <div className="home-container">
      <div className="video-background">
        <video autoPlay muted loop className="video">
          <source src={soltea_video} type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>

        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <Link to={card.link} className="card-link">
                <h3>{card.title}</h3>
              </Link>
              <div className="card-description">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
