import deleteImage from '../assets/Trash.svg'
import plantImage from '../assets/Plant.png'
//import CowImage from '../assets/Cow.png'
import { NumberInput } from "./NumberInput";

export default function ProdutoCarrinho() {
  return  <div className="cart__product">
              <img
                src="/product-01.png"
                alt=""
                className="cart__productImage"
              />
  
              <div className="cart__productInfo">
                <div className="cart__productRow">
                  <div className="cart__productColumn">
                    <h2 className="cart__productName">Café Espresso</h2>
  
                    <div className="product__tag">
                      <img src={plantImage} alt="vegano" />
                      <span>Vegano</span>
                    </div>
                  </div>
  
                  <button className="cart__productDelete">
                    <img src={deleteImage} alt="Deletar produto" />
                  </button>
                </div>
  
                <div className="cart__productRow">
                  <h3 className="cart__productPrice">R$ 10,00</h3>
                  <NumberInput />
                </div>
              </div>
            </div>
}