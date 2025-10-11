
import closeImage from '../assets/X.svg'
import deleteImage from '../assets/Trash.svg'
import plantImage from '../assets/Plant.png'
import cowImage from '../assets/Cow.png'
import plusImage from '../assets/Plus.svg'
import minusImage from '../assets/Minus.svg'
import '../css/cart.css'

export function Cart({ produtos = [], onDelete, onIncrease, onDecrease, onClose }) {

  const total = produtos.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

  return (
    <div className="cart">
   
      <section className="cart__header">
        <h3 className="cart__title">Seu carrinho</h3>
        <button className="cart__close" onClick={onClose}>
          <img src={closeImage} alt="fechar carrinho" />
        </button>
      </section>

  
      <section className="cart__body">
        <div className="cart__info">
          <h4 className="cart__quantityItems">
            {produtos.length} {produtos.length === 1 ? 'item' : 'itens'}
          </h4>
          {produtos.length > 0 && (
            <button
              type="button"
              className="cart__deleteAll"
              onClick={() => produtos.forEach((p) => onDelete?.(p.id))}
            >
              Excluir Tudo
            </button>
          )}
        </div>

        <div className="cart__products">
          {produtos.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            produtos.map((item) => (
              <div key={item.id} className="cart__product">
                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="cart__productImage"
                />

                <div className="cart__productInfo">
             
                  <div className="cart__productRow">
                    <div className="cart__productColumn">
                      <h2 className="cart__productName">{item.nome}</h2>

                      <div className="product__tag">
                        {item.vegano ? (
                          <>
                            <img src={plantImage} alt="vegano" />
                            <span>Vegano</span>
                          </>
                        ) : (
                          <>
                            <img src={cowImage} alt="contém lactose" />
                            <span>Contém lactose</span>
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      className="cart__productDelete"
                      onClick={() => onDelete?.(item.id)}
                    >
                      <img src={deleteImage} alt="Deletar produto" />
                    </button>
                  </div>

            
                  <div className="cart__productRow">
                    <h3 className="cart__productPrice">
                      R$ {(item.preco / 100).toFixed(2).replace('.', ',')}
                    </h3>

                    <section className="product__quantity">
                      <button
                        type="button"
                        className="product__quantityMinus"
                        onClick={() => onDecrease?.(item.id)}
                        disabled={item.quantidade <= 1}
                      >
                        <img src={minusImage} alt="diminuir" />
                      </button>
                      <input
                        type="text"
                        readOnly
                        className="product__quantityInput"
                        value={item.quantidade}
                      />
                      <button
                        type="button"
                        className="product__quantityPlus"
                        onClick={() => onIncrease?.(item.id)}
                      >
                        <img src={plusImage} alt="aumentar" />
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>


      {produtos.length > 0 && (
        <section className="cart__footer">
          <div className="cart__footerRow cart__footerSubtotal">
            <h3 className="cart__footerTitle">Subtotal</h3>
            <h3 className="cart__footerPrice">
              R$ {(total / 100).toFixed(2).replace('.', ',')}
            </h3>
          </div>
          <div className="cart__footerRow cart__footerDelivery">
            <h3 className="cart__footerTitle">Entrega</h3>
            <h3 className="cart__footerPrice">R$ 0,00</h3>
          </div>
          <div className="cart__footerRow cart__footerTotal">
            <h3 className="cart__footerTitle">Total</h3>
            <h3 className="cart__footerPrice">
              R$ {(total / 100).toFixed(2).replace('.', ',')}
            </h3>
          </div>
          <div className="cart__footerRow cart__footerBuy">
            <button type="button" className="cart__buy">
              Finalizar compra
            </button>
          </div>
        </section>
      )}
    </div>
  )
}
