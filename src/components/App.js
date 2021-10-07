//IMPORTAT ESTILOS
import "../stylesheets/App.scss";

//IMPORTAR HOOKS
import React, { useEffect, useState } from "react";

//IMPORTAR API
import Api from '../services/Api';

//IMPORTAR IMÁGENES
//import tarjetasMolonasPng from '../images/tarjetas-molonas.png';
//import tarjetas-molonas - 2x from '../images/tarjetas-molonas@2x.png';
//import tarjetas-molonas - 3x from '../images/tarjetas-molonas@3x.png';
//import photo-image from '../images/photo__imag.jpg';

//IMPORTAR COMPONENTES
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";


//FUNCION PRINCIPAL
function App() {
  // VARIABLE DE ESTADO DE PALETAS
  const [palette, setPalete] = useState("");

  // VARIABLE DE ESTADO DE PREVIEW
  const [data, setData] = useState({
    palette: 1,
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  // let [URLdata, setURLData] = useState('');


  // VARIABLE DE ESTADO DE COLLAPSABLES
  const [collapsableDesign, deployCollapsableDesign] = useState("");
  const [arrowDesign, rotateArrowDesign] = useState("");
  const [collapsableFill, deployCollapsableFill] = useState("hidden");
  const [arrowFill, rotateArrowFill] = useState("");
  const [collapsableShare, deployCollapsableShare] = useState("hidden");
  const [arrowShare, rotateArrowShare] = useState("");
  const [collapsableShareLink, deployCollapsableSharelink] = useState("hidden");

  //VARIABLE DE ESTADO DE IMAGEN
  // const [selectedImage, setSelectedImage] = useState(null);

  //EVENTO CARGA IMAGEN
  // * Añadir imagen
  //función para previsualizar imagen usuaria:
  const fr = new FileReader();
  /**
   * Recoge el archivo añadido al campo de tipo "file"
   * y lo carga en nuestro objeto FileReader para que
   * lo convierta a algo con lo que podamos trabajar.
   * Añade un listener al FR para que ejecute una función
   * al tener los datos listos
   * @param {evento} e
   */
  function getImage(e) {
    const myFile = e.currentTarget.files[0];
    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);
  }

  /**
   * Una vez tenemos los datos listos en el FR podemos
   * trabajar con ellos ;)
   */
  function writeImage() {
    /* En la propiedad `result` de nuestro FR se almacena
     * el resultado. Ese resultado de procesar el fichero que hemos cargado
     * podemos pasarlo como background a la imagen de perfil y a la vista previa
     * de nuestro componente.
     */

    //
    data.photo = fr.result;
    setData({ ...data });
  }

  const getPhotoUrl =
    function getPhotoUrl(data, placeholder) {
      if (placeholder) {
        return data.photo === '' ? Image : data.photo;
      } else {
        return data.photo;
      }
    };

  //EVENTO COLLAPSABLE SHARE LINK
  const handleCollapsableShareLink = (ev) => {
    deployCollapsableSharelink("");
    Api(data);
    console.log(data);
    ev.preventDefault();
  };

  //EVENTO COLLAPSABLE
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
    } else if (clickSection === "fill") {
      deployCollapsableFill("");
      rotateArrowFill("");
      deployCollapsableShare("hidden");
      rotateArrowShare("form__arrow--rotate");
      deployCollapsableDesign("hidden");
      rotateArrowDesign("form__arrow--rotate");
    } else if (clickSection === "share") {
      deployCollapsableShare("");
      rotateArrowShare("");
      deployCollapsableDesign("hidden");
      rotateArrowDesign("form__arrow--rotate");
      deployCollapsableFill("hidden");
      rotateArrowFill("form__arrow--rotate");
    }
  };

  // FUNCION MANEJADORA DE PINTAR PREVIEW EN BASE A LAS PALETAS SELECCIONADAS
  const handleChangeColor = (ev) => {
    setPalete(ev.target.value);
  };

  // FUNCION MANEJADORA DE REYENAR PREVIEW EN BASE A LOS INPUTS RELLENADOS
  const handleInput = (ev) => {
    const whichInput = ev.currentTarget.id;

    switch (whichInput) {
      case "fullName":
        setData({
          ...data, // Spread operator
          name: ev.currentTarget.value,
        });
        break;
      case "job":
        setData({
          ...data, // Spread operator
          job: ev.currentTarget.value,
        });
        break;
      case "telFill":
        setData({
          ...data, // Spread operator
          phone: ev.currentTarget.value,
        });
        break;
      case "emailFill":
        setData({
          ...data, // Spread operator
          email: ev.currentTarget.value,
        });
        break;
      case "linkedinFill":
        setData({
          ...data, // Spread operator
          linkedin: ev.currentTarget.value,
        });
        break;
      case "githubFill":
        setData({
          ...data, // Spread operator
          github: ev.currentTarget.value,
        });
        break;
      default:
        console.error("opcionNoValida");
    }
  };

  //HTML Y PARTE RENDERIZADA
  return (
    <div className="App">
      <div className="page">
        <Header />

        {/* MAIN*/}
        <main className="card">
          {/* PREVIEW*/}
          <Preview dataPreview={data} paletePreview={palette} />

          {/* FORM*/}
          <Form
            handleCollapsable={handleCollapsable}
            arrowDesign={arrowDesign}
            collapsableDesign={collapsableDesign}
            handleChangeColor={handleChangeColor}
            arrowFill={arrowFill}
            collapsableFill={collapsableFill}
            handleInput={handleInput}
            arrowShare={arrowShare}
            collapsableShare={collapsableShare}
            collapsableShareLink={collapsableShareLink}
            handleCollapsableShareLink={handleCollapsableShareLink}
            getImage={getImage}
            data={data}
            getPhotoUrl={getPhotoUrl}

          />
        </main>

        {/* FOOTER*/}
        <Footer />

      </div>
    </div>
  );
}

export default App;
