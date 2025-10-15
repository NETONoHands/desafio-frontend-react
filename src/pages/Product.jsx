import { dados } from '../data'
import { useParams } from 'react-router-dom'
import CowImage from '../assets/Cow.png'
import PlantImage from '../assets/Plant.png'
import '../css/Product.css'
import { Button } from '../components/Button'
import { NumberInput } from '../components/NumberInput'
import { TextInput } from '../components/TextInput'
import { useState } from 'react'

export function Product() {

  const { path ,id } = useParams();
  const produto = dados.produtos.find(p => String(p.id) === id);

  const [obs, setObs] = useState('');
  const [quantidade, setQuantidade] = useState(1);

   const handleQuantityChange = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
  };

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
          <a href= '/' className="product__link">Voltar para o início</a>
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
                <TextInput
                value={obs}
                onChange={setObs}/>
                
                <div className="product__buy">

                  <NumberInput 
                  value={quantidade} 
                  onChange={handleQuantityChange} />

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
