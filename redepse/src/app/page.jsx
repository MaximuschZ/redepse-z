// src/app/page.jsx
"use client";

import "./globals.css";
import "./page.module.css";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="header">
        <nav>
          <div className="logo">
            <a href="#">
              <img src="/assets/favicon-sde.png" alt="logo" width="50px" />
            </a>
            <a href="https://sde.gob.ar/" target="_blank">
              <img src="/assets/logo-sde.svg" alt="logo" width="100px" />
            </a>
          </div>
          <ul>
            <li>
              <a href="#institucional">INSTITUCIONAL</a>
            </li>
            <li>
              <a href="/login">REGISTRAR ESCUELA</a>
            </li>
            <li>
              <a href="#contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="hero_content">
            <h1>BIENVENIDOS</h1>
            <h2>
              Secretaría de Deportes de la Provincia de Santiago del Estero
            </h2>
            <p>
              La Secretaría de Deportes de la Provincia de Santiago del Estero
              tiene como objetivo promover el desarrollo y la práctica del
              deporte en todas sus formas, fomentando la inclusión y el
              bienestar social.
            </p>
            <p>Para solicitar equipamiento:</p>
            <a href="/login" className="btn">
              Registrar Escuela
            </a>
          </div>
        </section>

        <section id="information">
          <h2>INFORMACIÓN ÚTIL</h2>
          <br />
          <p>¿Qué estás buscando?</p>
          <div className="information-cards">
            <a className="card" href="#institucional">
              <img src="/assets/edificio.svg" alt="Institución" />
              <h3>INSTITUCIÓN</h3>
            </a>
            <a className="card" href="/login">
              <img src="/assets/futbol.svg" alt="Registrar Escuela" />
              <h3>REGISTRAR ESCUELA</h3>
            </a>
            <a className="card" href="#contacto">
              <img src="/assets/phone-solid.svg" alt="Contacto" />
              <h3>CONTACTO</h3>
            </a>
          </div>
        </section>

        <section id="institucional">
          <div className="datos-institucion">
            <h2>Acerca de la Institución</h2>
            <hr />
            <h3>AUTORIDADES</h3>
            <div className="autoridad-institucion">
              <div className="autoridad-card">
                <div className="autoridad-img">
                  <img
                    src="/assets/scaloni.png"
                    alt="Autoridad Deportes"
                    width="200px"
                  />
                </div>
                <div className="autoridad-info">
                  <h3>Lionel Scaloni</h3>
                  <p>Secretario de Deportes</p>
                </div>
              </div>
              <div className="autoridad-card">
                <div className="autoridad-img">
                  <img
                    src="/assets/messi.png"
                    alt="Autoridad Deportes"
                    width="200px"
                  />
                </div>
                <div className="autoridad-info">
                  <h3>Lionel Messi</h3>
                  <p>Coordinador de Deportes</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="mision-institucion">
              <h3>MISIÓN</h3>
              <p>
                La Secretaría de Deportes de la Provincia de Santiago del Estero
                tiene como misión fomentar el deporte, impulsar un estilo de
                vida saludable en toda la población y potenciar el desarrollo
                social y la inclusión a través de la práctica deportiva.
              </p>
            </div>

            <hr />

            <div className="funciones-institucion">
              <h3>FUNCIONES</h3>
              <ul>
                <li>
                  Planificar, implementar y supervisar políticas públicas
                  deportivas.
                </li>
                <li>
                  Diseñar programas de apoyo para deportistas de todos los
                  niveles.
                </li>
                <li>
                  Organizar actividades recreativas y competitivas para
                  diferentes grupos etarios.
                </li>
                <li>
                  Articular con instituciones deportivas y organismos públicos
                  para el desarrollo conjunto de proyectos.
                </li>
                <li>
                  Gestionar recursos e infraestructura destinados al desarrollo
                  del deporte en la provincia.
                </li>
                <li>
                  Impulsar la participación de la comunidad en actividades
                  físicas que promuevan la inclusión y la vida saludable.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contacto">
          <div className="contacto">
            <div className="contacto-text">
              <h2>¿Tienes alguna consulta?</h2>
              <p>Escribinos y te responderemos a la brevedad.</p>
            </div>
            <div className="formulario-contacto">
              <form action="#" method="post">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="footer">
          <div className="footer-img">
            <img
              src="/assets/favicon-sde.png"
              alt="Logo Secretaría de Deportes"
            />
            <img src="/assets/logo-sde.svg" alt="Santiago del Estero" />
          </div>
          <div className="footer-datos">
            <div className="footer-social">
              <h3>Seguinos en</h3>
              <a target="_blank" href="https://www.google.com/">
                <img src="/assets/instagram.svg" alt="instagram" />
              </a>
              <a target="_blank" href="https://www.google.com/">
                <img src="/assets/facebook.svg" alt="facebook" />
              </a>
              <a target="_blank" href="https://www.google.com/">
                <img src="/assets/x.svg" alt="x" />
              </a>
              <a target="_blank" href="https://www.google.com/">
                <img src="/assets/youtube.svg" alt="youtube" />
              </a>
            </div>
            <p>
              Calle Ficticia 123, Ciudad Capital
              <img width="12px" src="/assets/location.svg" alt="" />
            </p>
            <p>
              (0385) 123-4567
              <img width="12px" src="/assets/phone.svg" alt="" />
            </p>
            <p>
              deportes@correo.gob.ar
              <img width="12px" src="/assets/email.svg" alt="" />
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
