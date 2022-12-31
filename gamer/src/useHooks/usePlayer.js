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
  const [winner, setWinner] = useState(false);
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
  };
  const validatePlayer = (id, select) => {
    setSatet({
      ...state,
      selectedGamer: id,
      selectedPc: select,
      counterGamer: state.counterGamer + 1,
    });
  };
  const validatePc = (id, select) => {
    setSatet({
      ...state,
      selectedGamer: id,
      selectedPc: select,
      counterPc: state.counterPc + 1,
    });
  };

  const selectOption = (id) => {
    let selectPcOption = parseInt(Math.random() * (0 - 3) + 4);

    setTimeout(() => {
      setShowSelect(true);
    }, 100);

    switch (id) {
      case 1:
        if (selectPcOption === 3) {
          setWinner(true);
          validatePlayer(id, selectPcOption);
        } else if (selectPcOption === 2) {
          validatePc(id, selectPcOption);
        } else tie(id, selectPcOption);

        break;
      case 2:
        if (selectPcOption === 1) {
          setWinner(true);
          validatePlayer(id, selectPcOption);
        } else if (selectPcOption === 3) {
          validatePc(id, selectPcOption);
        } else tie(id, selectPcOption);
        break;
      case 3:
        if (selectPcOption === 2) {
          setWinner(true);
          validatePlayer(id, selectPcOption);
        } else if (selectPcOption === 1) {
          validatePc(id, selectPcOption);
        } else tie(id, selectPcOption);
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
  return {
    state,
    img,
    imageData,
    winner,
    showSelect,
  };
};
