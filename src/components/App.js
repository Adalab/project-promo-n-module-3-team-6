import React, { useState } from "react";
import logoAdalab from "../images/logo-adalab.png";
//import tarjetasMolonasPng from '../images/tarjetas-molonas.png';
import tarjetasMolonasSvg from "../images/tarjetas-molonas.svg";
//import tarjetas-molonas - 2x from '../images/tarjetas-molonas@2x.png';
//import tarjetas-molonas - 3x from '../images/tarjetas-molonas@3x.png';
//import photo-image from '../images/photo__imag.jpg';

// IMPORTAR ESTILOS
import "../stylesheets/App.scss";


function App() {

  // COSTANTE DE ESTADO DE PALETAS
  const [palette, setPalete] = useState("");

  // COSTANTE DE ESTADO DE PREVIEW
  const [data, setData] = useState({
    palette: 1,
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const [collapsableDesign, deployCollapsableDesign] = useState("");
  const [arrowDesign, rotateArrowDesign] = useState("");
  const [collapsableFill, deployCollapsableFill] = useState("hidden");
  const [arrowFill, rotateArrowFill] = useState("");
  const [collapsableShare, deployCollapsableShare] = useState("hidden");
  const [arrowShare, rotateArrowShare] = useState("");

  const handleCollapsable = (ev) => {
    const clickSection = ev.currentTarget.id;
    console.log(clickSection);
    if (clickSection === "design") {
      deployCollapsableDesign("");
      rotateArrowDesign("");
      deployCollapsableFill("hidden");
      rotateArrowFill("form__arrow--rotate");
      deployCollapsableShare("hidden");
      rotateArrowShare("form__arrow--rotate");
    }
    else if (clickSection === "fill") {
      deployCollapsableFill("");
      rotateArrowFill("");
      deployCollapsableShare("hidden");
      rotateArrowShare("form__arrow--rotate");
      deployCollapsableDesign("hidden");
      rotateArrowDesign("form__arrow--rotate");
    }
    else if (clickSection === "share") {
      deployCollapsableShare("");
      rotateArrowShare("");
      deployCollapsableDesign("hidden");
      rotateArrowDesign("form__arrow--rotate");
      deployCollapsableFill("hidden");
      rotateArrowFill("form__arrow--rotate");
    }
  }

  // FUNCION MANEJADORA DE PINTAR PREVIEW EN BASE A LAS PALETAS SELECCIONADAS
  const handleChangeColor = (ev) => {
    setPalete(ev.target.value);
  };

  // FUNCION MANEJADORA DE REYENAR PREVIEW EN BASE A LOS INPUTS RELLENADOS
  const handleInput = (ev) => {
    const whichInput = ev.currentTarget.id;

    switch (whichInput) {
      case "fullName": setData({
        ...data, // Spread operator
        name: ev.currentTarget.value,
      })
        break;
      case "job": setData({
        ...data, // Spread operator
        job: ev.currentTarget.value,
      })
        break;
      case "telFill": setData({
        ...data, // Spread operator
        phone: ev.currentTarget.value,
      })
        break;
      case "emailFill": setData({
        ...data, // Spread operator
        email: ev.currentTarget.value,
      })
        break;
      case "linkedinFill": setData({
        ...data, // Spread operator
        linkedin: ev.currentTarget.value,
      })
        break;
      case "githubFill": setData({
        ...data, // Spread operator
        github: ev.currentTarget.value,
      })
        break;
      default: console.error("opcionNoValida");
    }
  };

  //HTML Y PARTE RENDERIZADA
  return (
    <div className="App">
      <div className="page">
        {/* HEADER */}
        <header className="form__header">
          <a href="./index.html" alt="home" title="Home">
            <img
              className="form__header--image"
              src={tarjetasMolonasSvg}
              alt="Awesome cards"
            />
          </a>
        </header>

        {/* MAIN*/}
        <main className="card">
          {/* PREVIEW*/}

          <section className="photo__container">
            {/* PREVIEW - RESET*/}
            <div className="photo__reset--container">
              <ul className="photo__reset--menu">
                <li className="photo__reset--text">
                  <i className="far fa-trash-alt"></i>
                </li>
                <li className="photo__reset--text">Reset</li>
              </ul>
            </div>
            <div
              className={`photo__card--container js-photo palette-${palette}`}
            >
              <div className="photo__card--rectangle"></div>

              {/* PREVIEW - DATOS*/}
              <p className="photo__card--name">{data.name === "" ? "Nombre Completo" : data.name}</p>
              <p className="photo__card--frontend">{data.job === "" ? "Front-end developer" : data.job}</p>
              <div className="photo__card--photo" id="photo"></div>
              <div className="photo__card--rrss">
                <a href={data.phone === "" ? "" : `tel:${data.phone}`} id="telLink" target="_blank" rel="noreferrer">
                  <i className="fas fa-mobile-alt photo__card--rrss-icon"></i>
                </a>
                <a href={data.email === "" ? "" : `mailto:${data.email}`} id="emailLink" target="_blank" rel="noreferrer">
                  <i className="far fa-envelope photo__card--rrss-icon"></i>
                </a>
                <a href={data.linkedin === " " ? "" : `https://www.linkedin.com/${data.linkedin}`} id="linkedinLink" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin-in photo__card--rrss-icon"></i>
                </a>
                <a href={data.github === " " ? "" : `https://www.github.com/${data.github}`} id="githubLink" target="_blank" rel="noreferrer">
                  <i className="fab fa-github-alt photo__card--rrss-icon"></i>
                </a>
              </div>
            </div>
          </section>

          <form className="form" action="">
            {/* FORMULARIO - DISEÑO*/}
            <legend className="design__legend">
              <div className="form__parameters" id="design" onClick={handleCollapsable}>
                <h2 className="form__title">
                  <i className="far fa-object-ungroup form__icon"></i>Diseña
                </h2>
                <i className={`fas fa-chevron-down design__arrow form__arrow js__collapsable ${arrowDesign}`}></i>
              </div>

              <fieldset className={`design__check js__fieldset ${collapsableDesign}`}>
                <label className="design__check--colors" htmlFor="color">
                  colores
                </label>

                <section className="design__check--section">
                  <input
                    onChange={handleChangeColor}
                    className="palette"
                    type="radio"
                    id="palette"
                    name="color"
                    value="1"
                  />

                  <section className="design__check--section__box">
                    <div className="box box__1"></div>
                    <div className="box box__2"></div>
                    <div className="box box__3"></div>
                  </section>
                </section>

                <section className="design__check--section">
                  <input
                    onChange={handleChangeColor}
                    className="palette"
                    type="radio"
                    id="palette"
                    name="color"
                    value="2"
                  />

                  <section className="design__check--section__box">
                    <div className="box box__4"></div>
                    <div className="box box__5"></div>
                    <div className="box box__6"></div>
                  </section>
                </section>
                <section className="design__check--section">
                  <input
                    onChange={handleChangeColor}
                    className="palette"
                    type="radio"
                    id="palette"
                    name="color"
                    value="3"
                  />

                  <section className="design__check--section__box">
                    <div className="box box__7"></div>
                    <div className="box box__8"></div>
                    <div className="box box__9"></div>
                  </section>
                </section>

                <hr />
              </fieldset>
              <hr className="form__line" />
            </legend>

            {/* FORMULARIO - RELLENA*/}
            <legend className="fill">
              <div className="form__parameters" id="fill" onClick={handleCollapsable}>
                <h2 className="form__title">
                  <i className="far fa-keyboard form__icon"></i>Rellena
                </h2>
                <i className={`fas fa-chevron-down fill__arrow form__arrow js__collapsable ${arrowFill}`}></i>
              </div>

              <fieldset className={`fill__form js__fieldset ${collapsableFill}`}>
                <label className="fill__form--label" htmlFor="name">
                  {" "}
                  Nombre Completo
                </label>
                <input
                  className="fill__form--input name"
                  id="fullName"
                  type="text"
                  placeholder=" Ej: Sally Jill"
                  onChange={handleInput}
                  required
                />

                <label className="fill__form--label" htmlFor="job">
                  {" "}
                  Puesto
                </label>
                <input
                  className="fill__form--input job"
                  id="job"
                  type="text"
                  placeholder=" Ej: Front-end unicorn"
                  onChange={handleInput}
                  required
                />

                <label
                  className="fill__form--label"
                  htmlFor="photo photo__square"
                >
                  Imagen de perfil
                </label>

                <label
                  htmlFor="imgselector"
                  className="fill__form--input photo"
                >
                  Añadir imagen
                  <input
                    type="file"
                    id="imgselector"
                    name="imgselector"
                    className="hide--input js__input fill__form--input photo"
                  />
                </label>

                <div className="fill__form--input photo__square"></div>

                <label className="fill__form--label" htmlFor="email">
                  {" "}
                  Email
                </label>
                <input
                  className="fill__form--input email"
                  id="emailFill"
                  type="email"
                  placeholder=" Ej: sally-hill@gmail.com"
                  onChange={handleInput}
                  required
                />

                <label className="fill__form--label" htmlFor="tel">
                  {" "}
                  Teléfono
                </label>
                <input
                  className="fill__form--input tel"
                  id="telFill"
                  type="tel"
                  placeholder=" Ej: 555-55-55-55"
                  onChange={handleInput}
                />

                <label className="fill__form--label" htmlFor="linkedin">
                  {" "}
                  Linkedin
                </label>
                <input
                  className="fill__form--input linkedin"
                  id="linkedinFill"
                  type="text"
                  placeholder=" Ej: sally.hill"
                  onChange={handleInput}
                />

                <label className="fill__form--label" htmlFor="github">
                  {" "}
                  Github
                </label>
                <input
                  className="fill__form--input github"
                  id="githubFill"
                  type="text"
                  placeholder=" Ej: sally-hill"
                  onChange={handleInput}
                />
              </fieldset>
              <hr className="form__line" />
            </legend>

            {/* FORMULARIO - COMPARTE*/}
            <legend className="share">
              <div className="form__parameters" id="share" onClick={handleCollapsable}>
                <h2 className="form__title">
                  <i className="fas fa-share-alt form__icon"></i>Comparte
                </h2>
                <i className={`fas fa-chevron-down share__arrow form__arrow js__collapsable ${arrowShare}`}></i>
              </div>

              <fieldset className={` dropdown js__fieldset ${collapsableShare}`}>
                <button className="dropdown__button--create">
                  <i className="far fa-address-card"></i> Crear tarjeta
                </button>

                {/*  Aquí iría html de cuando se crea la tarjeta
                <p className='dropdown__message'>La tarjeta ha sido creada</p>
                <button className='dropdown__button--tw'>
                  <i className='fab fa-twitter'></i>Compartir en twitter
                </button>
              </div>  */}
              </fieldset>
              <hr className="form__line" />
            </legend>
          </form>
        </main>

        {/* FOOTER*/}
        <footer className="footer">
          <h6 className="footer__copyright">
            ochoPinocho for awesome profile-cards @2021
          </h6>
          <img
            className="footer__image"
            src={logoAdalab}
            alt="logo Adalab"
            title="Logo de Adalab"
          />
        </footer>
      </div>
    </div>
  );
}

export default App;
