import "./styles.css";
import { usePlayer } from "./useHooks/usePlayer";

const App = () => {
  const { state, img, imageData, winner, showSelect } = usePlayer();
  return (
    <div className="container">
      <div className="row-header">
        <h5 className="title">Piedra, Papel o Tijera</h5>
      </div>
      <div className="row-sub-title">
        <h2 className="counter">
          {state.counterGamer}-{state.counterPc}
        </h2>
        <p className="marke">Marcador</p>
      </div>
      <div className="row-countroll">
        <div className="col">
          <p className="title-gamer">Tu</p>
          <p className="sub-title-gamer">Seleccioná una opción</p>
          {img}
        </div>
        <div className="space">
          {/* resultado final */}
          {showSelect && winner && <p className="result">Ganaste</p>}

          {showSelect && !winner && (
            <div className="container-img">
              <img
                className="img-select"
                src={
                  imageData[
                    state.selectedGamer > 0
                      ? state.selectedGamer - 1
                      : state.selectedGamer
                  ].url
                }
                alt="img"
              />
              <p className="title-name">
                {imageData[state.selectedGamer - 1].name}
              </p>
            </div>
          )}
          {!winner && <span className="line"></span>}
          {showSelect && !winner && (
            <div className="container-img">
              <img
                className="img-select"
                src={
                  imageData[
                    state.selectedPc > 0
                      ? state.selectedPc - 1
                      : state.selectedPc
                  ].url
                }
                alt="img"
              />
              <p className="title-name">
                {imageData[state.selectedPc - 1].name}
              </p>
            </div>
          )}
        </div>

        <div className="col">
          <p className="title-gamer">Computadora</p>
          <p className="sub-title-gamer">La PC selecciona una opción</p>
          <img className="img" src={require("./assets/piedra.png")} alt="img" />
          <img className="img" src={require("./assets/papel.png")} alt="img" />
          <img className="img" src={require("./assets/tijera.png")} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default App;
