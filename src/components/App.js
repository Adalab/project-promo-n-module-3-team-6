import "../stylesheets/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import handleShareBtn from "../services/Api";
// IMPORTAR ESTILOS

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

  // COSTANTE DE ESTADO DE COLLAPSABLES
  const [collapsableDesign, deployCollapsableDesign] = useState("");
  const [arrowDesign, rotateArrowDesign] = useState("");
  const [collapsableFill, deployCollapsableFill] = useState("hidden");
  const [arrowFill, rotateArrowFill] = useState("");
  const [collapsableShare, deployCollapsableShare] = useState("hidden");
  const [arrowShare, rotateArrowShare] = useState("");
  const [collapsableShareLink, deployCollapsableSharelink] = useState("hidden");

  //EVENTO COLLAPSABLE SHARE LINK
  const handleCollapsableShareLink = () => {
    deployCollapsableSharelink("");
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

  useEffect(() => {
    // Aquí podemos poner código JS, por ejemplo podríamos llamar a callToApi dentro de un if

    // Llamamos al API pasando por parámetros el searchName
    handleShareBtn(setData).then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      
        console.log(formObject);
      urlShare.innerHTML = data.cardURL;
      urlShare.href = data.cardURL;

      if (data.success) {
        undoneTwitter.classList.remove('hidden');
        cardDoneCollapsable.classList.remove('hidden');
        const textCard = 'Mira mi tarjeta profesional 👩🏻‍💻 y contáctame para colaborar 🤳🏻 &hashtags=Adalabers,JavaScript,PromoNerea,teamUndefined';
        twitterLink.href = `https://twitter.com/intent/tweet?text=${textCard}&url=${data.cardURL}`;

      } else {
        cardDoneCollapsable.classList.remove('hidden');
        undoneShare.classList.add('hidden');
        undoneTwitter.classList.add('hidden');

        if (formObject.name === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu nombre';
        } else if (formObject.job === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu profesión';
        } else if (formObject.photo === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu foto';
        } else if (formObject.email === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu email';
        } else if (!validateEmail(formObject.email)) {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar correctamente tu email, falta un @ o algo más 😉';
        } else if (formObject.phone === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu móvil';
        } else if (!validatePhone(formObject.phone)) {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar completo tu móvil, falta algo 😉';
        } else if (formObject.linkedin === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu linkedin';
        } else if (formObject.github === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes rellenar tu github';
        } else if (formObject.palette === '') {
          urlShare.innerHTML = 'Ups❕ 😓, debes escojer una paleta de colores 🌈';
        }
      };
    }
   
  }, [setData]);

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
          />
        </main>

        {/* FOOTER*/}
        <Footer />
      </div>
    </div>
  );
}

export default App;
