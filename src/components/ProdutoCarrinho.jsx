import deleteImage from '../assets/Trash.svg'
import plantImage from '../assets/Plant.png'
import cowImage from '../assets/Cow.png'
import { NumberInput } from "./NumberInput";
import formataPreco from '../utils/generalFunctions';

export default function ProdutoCarrinho({ item, onDelete, onUpdateQuantity }) {
  return  <div className="cart__product">
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
                </>) : (
                <>
                  <img src={cowImage} alt="contém lactose" />
                  <span>Contém Lactose</span>
                </>
              )}
                    </div>

                    {item.observacao && (

              <p className="cart__observation">Obs: {item.observacao}</p>

            )}
            
                  </div>
  
                  <button className="cart__productDelete" onClick={onDelete}>
                    <img src={deleteImage} alt="Deletar produto" />
                  </button>
                </div>
  
                <div className="cart__productRow">
                  <h3 className="cart__productPrice">{formataPreco(item.preco)}</h3>
                  <NumberInput
                  value={item.quantidade}
                  onChange={onUpdateQuantity} />
                </div>
              </div>
            </div>
}