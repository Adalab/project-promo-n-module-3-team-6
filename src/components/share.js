import "../stylesheets/Share.scss";
import { useState } from "react";

const Share = (props) => {
  const [clicked, setClicked] = useState("NO");
  const [success, setSuccess] = useState("ERROR");
  const [error, setError] = useState('');
  const [url, setUrl]= useState('https://awesome-profile-cards.herokuapp.com/card')

  const handleShareCard = (json) => {
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      body: JSON.stringify(props.data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((dataResponse) => {
        // Interpretar la respuesta de crear tarjeta

        setClicked("YES");

        console.log("Respuesta", dataResponse);
        if (dataResponse.success) {
          // Servidor responde que es bueno y nos da la url
          setUrl(url=== props.data.cardUrl);

          setSuccess("WELL");
        } else {
          setSuccess("ERROR");
          setError(dataResponse.error);
        }

        /* if (data.success) {
        undoneTwitter.classList.remove('hidden');
        cardDoneCollapsable.classList.remove('hidden');
        const textCard = 'Mira mi tarjeta profesional 👩🏻‍💻 y contáctame para colaborar 🤳🏻 &hashtags=Adalabers,JavaScript,PromoNerea,teamUndefined';
        twitterLink.href = `https://twitter.com/intent/tweet?text=${textCard}&url=${data.cardURL}`;

      } else {
        cardDoneCollapsable.classList.remove('hidden');
        undoneShare.classList.add('hidden');
        undoneTwitter.classList.add('hidden');

        if (props.formObject.name === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu nombre';
        } else if (props.formObject.job === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu profesión';
        } else if (props.formObject.photo === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu foto';
        } else if (props.formObject.email === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu email';
        } else if (!validateEmail(props.formObject.email)) {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar correctamente tu email, falta un @ o algo más 😉';
        } else if (props.formObject.phone === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu móvil';
        } else if (!validatePhone(props.formObject.phone)) {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar completo tu móvil, falta algo 😉';
        } else if (props.formObject.linkedin === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu linkedin';
        } else if (props.formObject.github === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu github';
        } else if (props.formObject.palette === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes escojer una paleta de colores 🌈';
        }
      };*/
      });
  };

  return (
    <>
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
            onClick={handleShareCard}
          >
            <i className="far fa-address-card"></i> Crear tarjeta
          </button>
          <div
            className={`share__section--done  ${
              clicked === "NO" ? "hidden" : ""
            }`}
          >
            {success === "WELL" ? (
              /* HTML DE QUE HA IDO BIEN */
              <>
                <h2 className="share__section--done__text js_undone">
                  La tarjeta ha sido creada:
                </h2>
                <a
                  className="share__section--done__link js_url"
                  href={`${success}`} 
                  target="_blank" rel="noreferrer"
                >
                  pincha aqui
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
              </>
            ) : (
              /* HTML DE QUE HA HABIDO UN ERROR */
              <>
              <h2 className="share__section--done__text js_undone">
                  No se ha podido crear la tarjeta
                </h2>
                <p>{error}</p>
              </>
            )}
          </div>
        </fieldset>
        <hr className="form__line" />
      </legend>
    </>
  );
};

export default Share;
