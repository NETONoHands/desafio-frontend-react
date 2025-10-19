import { useState } from "react";
import MinusImage from "../assets/Minus.svg"
import PlusImage from "../assets/Plus.svg"

export function NumberInput ({ value = 1, onChange, min = 1, max = 99 }) {

  const maisUm = () => {
    if (value < max) {
      onChange(value + 1);
    } else {
      return
    }
  };

  const menosUm = () => {
    if (value > min) {
      onChange(value - 1);
    } else {
      return
    }
  };

  const handleInputChange = (e) => {
    const novoValor = parseInt(e.target.value);
    
    if (!isNaN(novoValor) && novoValor >= min && novoValor <= max) {
      onChange(novoValor);
    }
  };

    return  <section className="product__quantity">
                  <button 
                  type="button"
                  className="product__quantityMinus"
                  onClick={menosUm}>
                        <img src={MinusImage} alt="menos um" />
                  </button>

                  <input 
                  type="number" 
                  className="product__quantityInput" 
                  value={value}
                  onChange={handleInputChange}
                  readOnly />

                  <button 
                  type="button"
                  className="product__quantityPlus"
                  onClick={maisUm}>
                        <img src={PlusImage} alt="mais um" />
                  </button>
            </section>
};

export default NumberInput;