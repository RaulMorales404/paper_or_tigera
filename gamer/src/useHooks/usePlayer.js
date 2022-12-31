import React, { useState } from "react";
const imageData = [
  {
    id: 1,
    name: "Piedra",
    url: require("./../assets/piedra.png"),
  },
  {
    id: 2,
    name: "Papel",
    url: require("./../assets/papel.png"),
  },
  {
    id: 3,
    name: "Tijera",
    url: require("./../assets/tijera.png"),
  },
];
export const usePlayer = () => {
  const [showSelect, setShowSelect] = useState(false);
  const [alertMessage, setWinner] = useState(false);
  const [message, setMessage] = useState("hola");
  const [state, setSatet] = useState({
    counterPc: 0,
    counterGamer: 0,
    selectedPc: 1,
    selectedGamer: 1,
  });
  const tie = (id, select) => {
    setSatet({
      ...state,
      selectedGamer: id,
      selectedPc: select,
    });
    setMessage("Empate");
  };
  const validatePlayer = (id, select) => {
    setSatet({
      ...state,
      selectedGamer: id,
      selectedPc: select,
      counterGamer: state.counterGamer + 1,
    });
    setMessage("Ganaste");
  };
  const validatePc = (id, select) => {
    setSatet({
      ...state,
      selectedGamer: id,
      selectedPc: select,
      counterPc: state.counterPc + 1,
    });
    setMessage("Perdiste");
  };

  const selectOption = (id) => {
    let selectPcOption = parseInt(Math.random() * (0 - 3) + 4);

    setTimeout(() => {
      setShowSelect(true);
    }, 100);

    switch (id) {
      case 1:
        if (selectPcOption === 3) {
          validatePlayer(id, selectPcOption);
        } else if (selectPcOption === 2) {
          validatePc(id, selectPcOption);
        } else tie(id, selectPcOption);

        break;
      case 2:
        if (selectPcOption === 1) {
          validatePlayer(id, selectPcOption);
        } else if (selectPcOption === 3) {
          validatePc(id, selectPcOption);
        } else tie(id, selectPcOption);
        break;
      case 3:
        if (selectPcOption === 2) {
          validatePlayer(id, selectPcOption);
        } else if (selectPcOption === 1) {
          validatePc(id, selectPcOption);
        } else tie(id, selectPcOption);
        break;
      default:
    }
    setTimeout(() => {
      setShowSelect(false);
      setWinner(true);
    }, 1000);

    setTimeout(() => {
      setWinner(false);
    }, 2000);
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
  return {
    state,
    img,
    imageData,
    alertMessage,
    showSelect,
    message,
  };
};
