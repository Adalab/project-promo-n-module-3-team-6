import "../stylesheets/Share.scss";

const Share = (props) => {
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
            onClick={props.handleCollapsableShareLink}
          >
            <i className="far fa-address-card"></i> Crear tarjeta
          </button>
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
            >
              https://awesome-profile-card.com?id=A456DF0001
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
    </>
  );
};

export default Share;
