/* eslint-disable react/style-prop-object */

import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <div class="row-header">
        <h5 className="title">Piedra, Papel o Tijera</h5>
      </div>
      <div className="row-sub-title">
        <h2 className="counter">0-0</h2>
        <p style={{ fontSize: 20 }}>Marcador</p>
      </div>
      <div class="row-countroll">
        <div className="col">
          <p className="title-gamer">Tu</p>
          <p className="sub-title-gamer">Seleccioná una opción</p>

          <img
            onClick={() => console.log("Hola")}
            className="img"
            src={require("./assets/piedra.png")}
            alt="img"
          />
          <img
            onClick={() => console.log("Hola")}
            className="img"
            src={require("./assets/papel.png")}
            alt="img"
          />
          <img
            onClick={() => console.log("Hola")}
            className="img"
            src={require("./assets/tijera.png")}
            alt="img"
          />
        </div>
        <div className="space">
          {/* resultado final
          <p className="result">Ganaste</p> 
          */}
          {/* 
          imagenes para seleccion
          <img 
            onClick={() => console.log("Hola")}
            className="img-select"
            src={require("./assets/piedra.png")}
            alt="img"
          /> */}
          <span className="line"></span>
          {/* <img
            onClick={() => console.log("Hola")}
            className="img-select"
            src={require("./assets/papel.png")}
            alt="img"
          /> */}
        </div>

        <div className="col">
          <p className="title-gamer">Computadora</p>
          <p className="sub-title-gamer">La PC selecciona una opción</p>
          <img
            onClick={() => console.log("Hola")}
            className="img"
            src={require("./assets/piedra.png")}
            alt="img"
          />
          <img
            onClick={() => console.log("Hola")}
            className="img"
            src={require("./assets/papel.png")}
            alt="img"
          />
          <img
            onClick={() => console.log("Hola")}
            className="img"
            src={require("./assets/tijera.png")}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
export default App;
