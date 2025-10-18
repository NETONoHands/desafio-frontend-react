import closeImage from '../assets/X.svg';
import '../css/Cart.css';
import formataPreco from '../utils/generalFunctions';
import ProdutoCarrinho from './ProdutoCarrinho';

export function Carrinho({ 

  carrinhoTaAberto, 
  clicaNoX, 
  carrinho,
  removerDoCarrinho,
  atualizarCarrinho,
  limpaCarrinho

 }) {

  if (!carrinhoTaAberto) return null;

  const calculaSubTotal = () => {
    return carrinho.reduce((stotal, item) => {
      const precoNumero = item.preco;
      return stotal + (precoNumero * item.quantidade);
    }, 0);
  } 

  const subTotal = calculaSubTotal();
  const frete = 299;
  const total = subTotal + frete;

  return (<div className="cart">
        <section className="cart__header">
          <h3 className="cart__title">Seu carrinho</h3>
          <button className="cart__close">
            <img onClick={clicaNoX} src={closeImage} alt="fechar carrinho" />
          </button>
        </section>
        <section className="cart__body">
          <div className="cart__info">
            <h4 className="cart__quantityItems">
              {carrinho.length} {carrinho.length === 1 ? "item" : "itens"}
            </h4>

            <button

            className='cart__deleteAll'
            onClick={() => {

              if (confirm('Voce deseja remover todos os itens do seu carrinho?')) {

                limpaCarrinho();
              
              }

            }}>
              Excluir tudo
            </button>
          </div>
          <div className="cart__products"> 

            {carrinho.length === 0 ? (
              <p className='cart__empty'>Seu carrinho está vazio.</p>
            ) : (
              carrinho.map((item) => (
              <ProdutoCarrinho 
                key={item.id}
                item={item}
                onDelete={() => removerDoCarrinho(item.id)}
                onUpdateQuantity={(novaQuantidade) => atualizarCarrinho(item.id, novaQuantidade)} />
            ))
            )
            }

          </div>
        </section>
        
        {carrinho.length > 0 && (
          <section className="cart__footer">
          <div className="cart__footerRow cart__footerSubtotal">
            <h3 className="cart__footerTitle">Subtotal</h3>
            <h3 className="cart__footerPrice">{formataPreco(subTotal)}</h3>
          </div>
          <div className="cart__footerRow cart__footerDelivery">
            <h3 className="cart__footerTitle">Entrega</h3>
            <h3 className="cart__footerPrice">{formataPreco(frete)}</h3>
          </div>
          <div className="cart__footerRow cart__footerTotal">
            <h3 className="cart__footerTitle">Total</h3>
            <h3 className="cart__footerPrice">{formataPreco(total)}</h3>
          </div>
          <div className="cart__footerRow cart__footerBuy">
            <button type="button" className="cart__buy">
              Finalizar compra
            </button>
          </div>
        </section>
        )}
      </div>)
}