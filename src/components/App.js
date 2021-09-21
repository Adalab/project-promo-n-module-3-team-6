import React, { useState } from "react";
import logoAdalab from "../images/logo-adalab.png";
//import tarjetasMolonasPng from '../images/tarjetas-molonas.png';
import tarjetasMolonasSvg from "../images/tarjetas-molonas.svg";
//import tarjetas-molonas - 2x from '../images/tarjetas-molonas@2x.png';
//import tarjetas-molonas - 3x from '../images/tarjetas-molonas@3x.png';
//import photo-image from '../images/photo__imag.jpg';
import "../stylesheets/App.scss";

function App() {
  const [palette, setPalete] = useState("");
  const handleChangeColor = (event) => {
    setPalete(event.target.value);
  };

  const [fullName, setFullName] = useState("");
  const handleFullName = (event) => {
    setFullName(event.target.value);
  };

  return (
    <div className="App">
      <div className="page">
        <header className="form__header">
          <a href="./index.html" alt="home" title="Home">
            <img
              className="form__header--image"
              src={tarjetasMolonasSvg}
              alt="Awesome cards"
            />
          </a>
        </header>

        <main className="card">
          <section className="photo__container">
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
              <p className="photo__card--name">{fullName}</p>
              <p className="photo__card--frontend">Front-end developer</p>
              <div className="photo__card--photo" id="photo"></div>
              <div className="photo__card--rrss">
                <a href="" id="telLink" target="_blank">
                  <i className="fas fa-mobile-alt photo__card--rrss-icon"></i>
                </a>
                <a href="" id="emailLink" target="_blank">
                  <i className="far fa-envelope photo__card--rrss-icon"></i>
                </a>
                <a href="" id="linkedinLink" target="_blank">
                  <i className="fab fa-linkedin-in photo__card--rrss-icon"></i>
                </a>
                <a href="" id="githubLink" target="_blank">
                  <i className="fab fa-github-alt photo__card--rrss-icon"></i>
                </a>
              </div>
            </div>
          </section>
          <form className="form" action="">
            <legend className="design__legend">
              <div className="form__parameters">
                <h2 className="form__title">
                  <i className="far fa-object-ungroup form__icon"></i>Diseña
                </h2>
                <i className="fas fa-chevron-down design__arrow form__arrow js__collapsable"></i>
              </div>

              <fieldset className="hidden design__check js__fieldset">
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

            <legend className="fill">
              <div className="form__parameters">
                <h2 className="form__title">
                  <i className="far fa-keyboard form__icon"></i>Rellena
                </h2>
                <i className="fas fa-chevron-down fill__arrow form__arrow js__collapsable"></i>
              </div>

              <fieldset className="hidden fill__form js__fieldset">
                <label className="fill__form--label" htmlFor="name">
                  {" "}
                  Nombre Completo
                </label>
                <input
                  className="fill__form--input name" onChange={handleChangeColor}
                  id="fullname"
                  type="text"
                  placeholder=" Ej: Sally Jill"
                  required
                  onKeyUp={handleFullName}
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
                />

                <label className="fill__form--label" htmlFor="linkedin">
                  {" "}
                  Linkedin
                </label>
                <input
                  className="fill__form--input linkedin"
                  id="linkedinFill"
                  type="text"
                  placeholder=" Ej: linkedin.com/in/sally.hill"
                />

                <label className="fill__form--label" htmlFor="github">
                  {" "}
                  Github
                </label>
                <input
                  className="fill__form--input github"
                  id="githubFill"
                  type="text"
                  placeholder=" Ej: @sally-hill"
                />
              </fieldset>
              <hr className="form__line" />
            </legend>

            <legend className="share">
              <div className="form__parameters">
                <h2 className="form__title">
                  <i className="fas fa-share-alt form__icon"></i>Comparte
                </h2>
                <i className="fas fa-chevron-down share__arrow form__arrow js__collapsable"></i>
              </div>

              <fieldset className="hidden dropdown js__fieldset">
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
