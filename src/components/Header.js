import tarjetasMolonasSvg from "../images/tarjetas-molonas.svg";
// IMPORTAR ESTILOS
import "../stylesheets/Header.scss";

const Header = (props) => {

    return (
        < div >
            <header className="form__header" >
                <a href="./index.html" alt="home" title="Home">
                    <img
                        className="form__header--image"
                        src={tarjetasMolonasSvg}
                        alt="Awesome cards"
                    />
                </a>
            </header>
        </div >
    );
};

export default Header;