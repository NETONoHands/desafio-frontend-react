import PlantImage from "../assets/Plant.png";
import CowImage from "../assets/Cow.png";
import DeleteImage from "../assets/Delete.png";
import PlusImage from "../assets/Plus.png";
import MinusImage from "../assets/Minus.png";

export default function Produto({ item, onDelete, onIncrease, onDecrease }) {
  return (
    <div className="cart__product flex items-start gap-4 border-b border-gray-200 py-4">

      <img
        src={item.imagem}
        alt={item.nome}
        className="cart__productImage w-20 h-20 object-cover rounded-lg"
      />


      <div className="cart__productInfo flex-1">

        <div className="cart__productRow flex justify-between items-center">
          <div className="cart__productColumn flex flex-col">
            <h2 className="cart__productName text-base font-semibold">
              {item.nome}
            </h2>

            <div className="product__tag flex items-center gap-2 mt-1">
              {item.vegano ? (
                <>
                  <img src={PlantImage} alt="vegano" className="w-4 h-4" />
                  <span className="text-sm text-green-700">Vegano</span>
                </>
              ) : (
                <>
                  <img src={CowImage} alt="contém lactose" className="w-4 h-4" />
                  <span className="text-sm text-brown-600">Contém lactose</span>
                </>
              )}
            </div>
          </div>


          <button
            className="cart__productDelete text-gray-400 hover:text-red-500"
            onClick={() => onDelete?.(item.id)}
          >
            <img src={DeleteImage} alt="Deletar produto" className="w-5 h-5" />
          </button>
        </div>

  
        <div className="cart__productRow flex justify-between items-center mt-2">
          <h3 className="cart__productPrice text-lg font-bold text-gray-800">
            R$ {(item.preco / 100).toFixed(2).replace(".", ",")}
          </h3>

          <section className="product__quantity flex items-center gap-2">
            <button
              type="button"
              className="product__quantityMinus p-2 rounded-md bg-gray-100 hover:bg-gray-200"
              onClick={() => onDecrease?.(item.id)}
            >
              <img src={MinusImage} alt="diminuir" className="w-4 h-4" />
            </button>
            <input
              type="text"
              readOnly
              className="product__quantityInput w-10 text-center border border-gray-300 rounded-md"
              value={item.quantidade}
            />
            <button
              type="button"
              className="product__quantityPlus p-2 rounded-md bg-gray-100 hover:bg-gray-200"
              onClick={() => onIncrease?.(item.id)}
            >
              <img src={PlusImage} alt="aumentar" className="w-4 h-4" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}