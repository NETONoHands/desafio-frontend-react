import { useState } from 'react';
import logoImage from '../assets/logo.svg'
import { Carrinho } from './Carrinho'
import { ShoppingBag } from './ShoppingBag'

export function Header() {

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
        <ShoppingBag clicaNaBolsa={abreCarrinho} />
      </div>
      <Carrinho carrinhoTaAberto={isCarrinhoOpen} clicaNoX={fechaCarrinho} />
    </header>
  )
}
