import logoImage from '../assets/logo.svg'
import { Carrinho } from './Carrinho'
import { ShoppingBag } from './ShoppingBag'

export function Header({

  carrinho, 
  isCarrinhoOpen, 
  abreCarrinho, 
  fechaCarrinho,
  removerDoCarrinho,
  atualizarCarrinho,
  limpaCarrinho

}) {  
  
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
        atualizarCarrinho={atualizarCarrinho}
        limpaCarrinho={limpaCarrinho} />
    </header>
  )
}
