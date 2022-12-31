import "./styles.css";
import { useState } from "react";
const imageData = [
  {
    id: 1,
    name: "piedra",
    url: require("./assets/piedra.png"),
  },
  {
    id: 2,
    name: "papel",
    url: require("./assets/papel.png"),
  },
  {
    id: 3,
    name: "papel",
    url: require("./assets/tijera.png"),
  },
];
const App = () => {
  const [showSelect, setShowSelect] = useState(false);
  const [winner, setWinner] = useState(false);
  const [state, setSatet] = useState({
    counterPc: 0,
    counterGamer: 0,
    selectedPc: 1,
    selectedGamer: 1,
  });
  const selectOption = (id) => {
    let selectPcOption = parseInt(Math.random() * (0 - 3) + 4);
    console.log(id, selectPcOption);
    setTimeout(() => {
      setShowSelect(true);
    }, 100);
    switch (id) {
      case 1:
        if (selectPcOption === 3) {
          setWinner(true);
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
            counterGamer: state.counterGamer + 1,
          });
        } else if (selectPcOption === 2) {
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
            counterPc: state.counterPc + 1,
          });
        } else {
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
          });
        }
        break;
      case 2:
        if (selectPcOption === 1) {
          setWinner(true);
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
            counterGamer: state.counterGamer + 1,
          });
        } else if (selectPcOption === 3) {
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
            counterPc: state.counterPc + 1,
          });
        } else {
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
          });
        }
        break;

      case 3:
        if (selectPcOption === 2) {
          setWinner(true);
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
            counterGamer: state.counterGamer + 1,
          });
        } else if (selectPcOption === 1) {
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
            counterPc: state.counterPc + 1,
          });
        } else {
          setSatet({
            ...state,
            selectedGamer: id,
            selectedPc: selectPcOption,
          });
        }
        break;
      default:
    }
    setTimeout(() => {
      setShowSelect(false);
      setWinner(false);
    }, 700);
  };

  const img = imageData.map((item) => (
    <img
      key={item.id}
      onClick={() => selectOption(item.id)}
      className="img"
      src={item.url}
      alt="img"
    />
  ));

  return (
    <div className="container">
      <div className="row-header">
        <h5 className="title">Piedra, Papel o Tijera</h5>
      </div>
      <div className="row-sub-title">
        <h2 className="counter">
          {state.counterGamer}-{state.counterPc}
        </h2>
        <p style={{ fontSize: 20 }}>Marcador</p>
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
          )}

          {!winner && <span className="line"></span>}
          {showSelect && !winner && (
            <img
              className="img-select"
              src={
                imageData[
                  state.selectedPc > 0 ? state.selectedPc - 1 : state.selectedPc
                ].url
              }
              alt="img"
            />
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
