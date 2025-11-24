import React from "react";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <input type="number" placeholder="Digite o valor" />
      <span>Seleciona as moedas</span>
      <select>
        <option value="BRL">BRL</option>
      </select>
      <span>Para</span>
      <select>
        <option value="USD">USD</option>
      </select>
      <h3>BRL USD</h3>
      <p>20 BRL valem 5 USD</p>
    </div>
  );
};

export default CurrencyConverter;
