import { useState } from "react";
import MinusImage from "../assets/Minus.svg"
import PlusImage from "../assets/Plus.svg"

export function NumberInput (value, onChange) {

  const [quantidade, setQuantidade] = useState(value || 1);

      const maisUm = () => {
        if (quantidade < 99) {
          const novaQuantidade = quantidade + 1;
          setQuantidade(novaQuantidade);
          onChange(novaQuantidade);
  }};

  const menosUm = () => {
    if (quantidade > 1) {
      const novaQuantidade = quantidade - 1;
      setQuantidade(novaQuantidade);
      onChange(novaQuantidade);
  };

  const handleInputChange = (event) => {
    const valor = parseInt(event.target.value) || 1;
    
    if (valor >= 1 && valor <= 99) {
      setQuantidade(valor);
      onChange(valor);
    }
  };

    return  <section className="product__quantity">
                  <button 
                  type="button"
                  className="product__quantity--minus"
                  onClick={menosUm}
                  disabled={quantidade <= 1}>
                        <img src={MinusImage} alt="menos um" />
                  </button>

                  <input 
                  type="text" 
                  className="product__quantity--input" 
                  value={quantidade}
                  onChange={handleInputChange}
                  readOnly
                  min="1"
                  max="99" />

                  <button 
                  type="button"
                  className="product__quantity--plus"
                  onClick={maisUm}
                  disabled={quantidade >= 99}>
                        <img src={PlusImage} alt="mais um" />
                  </button>
            </section>
}};

export default NumberInput;