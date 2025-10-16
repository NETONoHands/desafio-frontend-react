import { useState } from 'react';
import logoImage from '../assets/logo.svg'
import { Carrinho } from './Carrinho'
import { ShoppingBag } from './ShoppingBag'

export function Header() {

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto, quantidade, observacao) => {
    const novoItem = {
      idProduto: produto.id,
      nome: produto.nome,
      imagem: produto.imagem,
      preco: produto.preco.por,
      vegano: produto.vegano,
      quantidade,
      observacao
    };
    setCarrinho([...carrinho, novoItem]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  const atualizarQuantidade = (id, novaQuantidade) => {
    setCarrinho(carrinho.map(item => 
      item.id === id ? { ...item, quantidade: novaQuantidade } : item
    ));
  };

const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);

  const abreCarrinho = () => {
    setIsCarrinhoOpen(true);
  };

  const fechaCarrinho = () => {
    setIsCarrinhoOpen(false);
  };
  
  return (
    <header className="header">
      <div className="container">
        <a href="./index.html">
          <img className="header__logo" src={logoImage} alt="logo CoffeeSpresso" />
        </a>
        <ShoppingBag 
          clicaNaBolsa={abreCarrinho}
          quantidade={carrinho.length} />
      </div>
      <Carrinho 
        carrinhoTaAberto={isCarrinhoOpen} 
        clicaNoX={fechaCarrinho}
        carrinho={carrinho}
        removerDoCarrinho={removerDoCarrinho}
        atualizarQuantidade={atualizarQuantidade} />
    </header>
  )
}
