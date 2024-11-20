"use client";

import { useState } from "react";

const Prompt = () => {
  const [inputValue, setInputValue] = useState(""); // Estado para el valor actual
  const [submittedValue, setSubmittedValue] = useState(""); // Estado para el valor enviado

  // Maneja el evento al presionar una tecla
  const captura = (e) => {
    if (e.key === "Enter") {
      setSubmittedValue(inputValue); // Actualiza el valor enviado
      setInputValue(""); // Limpia el campo de texto si deseas
      console.log("Texto enviado:", inputValue); // Imprime el valor en la consola
    }
  };

  return (
    <div>
      <input
        type="text"
        className="w-400"
        value={inputValue} // Enlace con el estado
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado al escribir
        onKeyDown={captura} // Detecta cuando se presiona Enter
      />
      <p>Texto capturado: {submittedValue}</p>
    </div>
  );
};

export default Prompt;
