import { dados } from '../data'
import { useParams } from 'react-router-dom'
import CowImage from '../assets/Cow.png'
import PlantImage from '../assets/Plant.png'
import MinusImage from '../assets/Minus.svg'
import PlusImage from '../assets/Plus.svg'
import '../css/Product.css'
import { Button } from '../components/Button'
import { NumberInput } from '../components/NumberInput'

export function Product() {

  const { path ,id } = useParams();
  const produto = dados.produtos.find(p => String(p.id) === id);
  console.log(produto);
  console.log(path);
  console.log(id, dados.produtos.map(p => p.id));
  console.log(String(dados.produtos.id) === id);

  if (!produto) {
    return (
      <div className="container product__container">
        <a href="/" className="product__link">Voltar para o início</a>
        <h2>Produto não encontrado.</h2>
      </div>
    )
  }

  return (
    <>
      <main>
        <div className="container product__container">
          <a href="/" className="product__link">Voltar para o início</a>
          <section className="product">
            <div className="product__container--image">
              <img src={produto.imagem} className="product__image" alt={produto.nome} />
            </div>
            <div className="product__data">
              <h1 className="product__title">{produto.nome}</h1>
              <h2 className="product__price">{produto.preco.por}</h2>
              <div className="product__tag">
                {
                produto.vegano ? 
                    <><img src={PlantImage} alt="planta" /> <span>Vegano</span></> :
                    <><img src={CowImage} alt="vaca" /> <span>Contém Lactose</span></>
                }
              </div>
              <p className="product__description">
                {produto.descricao}
              </p>
              <form>
                <section className="product__observation">
                  <label htmlFor="observation">Observações sobre o pedido</label>
                  <textarea rows={3} name="observation" id="observation" placeholder="Digite suas observações. Ex.: Enviar açúcar"></textarea>
                </section>
                <div className="product__buy">
                  <NumberInput />
                  <Button />
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>      
    </>
  )
}
