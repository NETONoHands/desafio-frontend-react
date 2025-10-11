import MinusImage from "../assets/Minus.svg"
import PlusImage from "../assets/Plus.svg"

export function NumberInput () {
    return <section className="product__quantity">
                <button className="product__quantity--minus">
                  <img src={MinusImage} alt="menos um" />
                </button>
                <input type="text" className="product__quantity--input" value="1" />
                <button className="product__quantity--plus">
                      <img src={PlusImage} alt="mais um" />
                </button>
          </section>
}