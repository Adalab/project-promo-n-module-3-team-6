import React, { useState } from "react";
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

        <Header />

        {/* MAIN*/}
        <main className="card">

          {/* PREVIEW*/}
          <Preview dataPreview={data} paletePreview={palette} />

          {/* FORM*/}
          <Form handleCollapsable={handleCollapsable} arrowDesign={arrowDesign} collapsableDesign={collapsableDesign} handleChangeColor={handleChangeColor} arrowFill={arrowFill} collapsableFill={collapsableFill} handleInput={handleInput} arrowShare={arrowShare} collapsableShare={collapsableShare} />
        </main>

        {/* FOOTER*/}
        <Footer />
      </div>
    </div>
  );
}

export default App;
