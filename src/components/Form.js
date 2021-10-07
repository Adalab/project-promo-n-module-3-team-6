// IMPORTAR ESTILOS
import "../stylesheets/Form.scss";

import Image from "./Image";

const Form = (props) => {


  return (
    <div>
      <form className="form" action="">
        {/* FORMULARIO - DISEÑO*/}
        <legend className="design__legend">
          <div
            className="form__parameters"
            id="design"
            onClick={props.handleCollapsable}
          >
            <h2 className="form__title">
              <i className="far fa-object-ungroup form__icon"></i>Diseña
            </h2>
            <i
              className={`fas fa-chevron-down design__arrow form__arrow js__collapsable ${props.arrowDesign}`}
            ></i>
          </div>

          <fieldset
            className={`design__check js__fieldset ${props.collapsableDesign}`}
          >
            <label className="design__check--colors" htmlFor="color">
              colores
            </label>

            <section className="design__check--section">
              <input
                onChange={props.handleChangeColor}
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
                onChange={props.handleChangeColor}
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
                onChange={props.handleChangeColor}
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
          <div
            className="form__parameters"
            id="fill"
            onClick={props.handleCollapsable}
          >
            <h2 className="form__title">
              <i className="far fa-keyboard form__icon"></i>Rellena
            </h2>
            <i
              className={`fas fa-chevron-down fill__arrow form__arrow js__collapsable ${props.arrowFill}`}
            ></i>
          </div>

          <fieldset
            className={`fill__form js__fieldset ${props.collapsableFill}`}
          >
            <label className="fill__form--label" htmlFor="name">
              {" "}
              Nombre Completo
            </label>
            <input
              className="fill__form--input name"
              id="fullName"
              type="text"
              placeholder=" Ej: Sally Jill"
              onChange={props.handleInput}
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
              onChange={props.handleInput}
              required
            />
            <Image
              getImage={props.getImage}
              data={props.data}
              getPhotoUrl={props.getPhotoUrl}
            />

            <label className="fill__form--label" htmlFor="email">
              {" "}
              Email
            </label>
            <input
              className="fill__form--input email"
              id="emailFill"
              type="email"
              placeholder=" Ej: sally-hill@gmail.com"
              onChange={props.handleInput}
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
              onChange={props.handleInput}
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
              onChange={props.handleInput}
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
              onChange={props.handleInput}
            />
          </fieldset>
          <hr className="form__line" />
        </legend>

        {/* FORMULARIO - COMPARTE*/}
        <legend className="share">
          <div
            className="form__parameters"
            id="share"
            onClick={props.handleCollapsable}
          >
            <h2 className="form__title">
              <i className="fas fa-share-alt form__icon"></i>Comparte
            </h2>
            <i
              className={`fas fa-chevron-down share__arrow form__arrow js__collapsable ${props.arrowShare}`}
            ></i>
          </div>

          <fieldset
            className={` dropdown js__fieldset ${props.collapsableShare}`}
          >
            <button
              className="dropdown__button--create"
              onClick={props.handleCollapsableShareLink}
            >
              <i className="far fa-address-card"></i> Crear tarjeta
            </button>
            <p className="legal">Al pulsar Crear tarjeta autorizo a Adalab a compartir mis datos personales y usarlos para fines promocionales</p>
            <div
              className={`share__section--done  ${props.collapsableShareLink}`}
            >
              <h2 className="share__section--done__text js_undone">
                La tarjeta ha sido creada:
              </h2>
              <a
                className="share__section--done__link js_url"
                href=" "
                target="_blank"
              >{props.URLdata}
              </a>

              <button className="share__section--done__button js_undone2">
                <a
                  className="share__section--done__button--link js_twitter_link"
                  href=" "
                  target="_blank"
                >
                  <i className="icon3 fab fa-twitter"></i> &nbsp; Compartir en
                  twitter
                </a>
              </button>
            </div>
          </fieldset>
          <hr className="form__line" />
        </legend>
      </form>
    </div>
  );
};

export default Form;
