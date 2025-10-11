import React from "react";
import Produto from "./Produto";

export function Carrinho({ produtos, onDelete, onIncrease, onDecrease }) {
  const total = produtos.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div>
      <h2>Meu Carrinho</h2>
      {produtos.length === 0 && <p>O carrinho está vazio.</p>}
      {produtos.map((item) => (
        <Produto
          key={item.id}
          item={item}
          onDelete={onDelete}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
      {produtos.length > 0 && <h3>Total: R$ {(total / 100).toFixed(2)}</h3>}
    </div>
  );
}