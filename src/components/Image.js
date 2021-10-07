import "../stylesheets/Form.scss";

function Image(props) {
    return (
        <>
            <label className="fill__form--label" htmlFor="photo photo__square">
                Imagen de perfil
            </label>

            <label htmlFor="imgselector" className="fill__form--input photo">
                Añadir imagen
                <input
                    type="file"
                    id="imgselector"
                    name="imgselector"
                    className="hide--input js__input fill__form--input photo"
                    onChange=
                    {props.getImage}

                />
            </label>

            <div className="fill__form--input photo__square"
                style={{
                    backgroundImage: `url(${props.getPhotoUrl(props.data, false)})`,
                }} >

            </div>
        </>
    );

}

export default Image;

// const Image = (props) => {

//     handleFile = (e) => {
//         const content = e.target.result;
//         console.log('file content', content)
//         // You can set content in state and show it in render.
//     }

//     handleChangeFile = (file) => {
//         let fileData = new FileReader();
//         fileData.onloadend = handleFile;
//         fileData.readAsText(file);
//     }

//     // function handleGetImage(e) {
//     //     const myFile = e.currentTarget.files[0];
//     //     fr.addEventListener('load', writeImage);
//     //     fr.readAsDataURL(myFile);
//     // };

//     // function writeImage() {
//     //     profileImage.style.backgroundImage = `url(${fr.result})`;
//     //     profilePreview.style.backgroundImage = `url(${fr.result})`;
//     //     saveLocalStorage();
//     // }

//     // getFile.addEventListener('change', handleGetImage);

// };

// export default Image;