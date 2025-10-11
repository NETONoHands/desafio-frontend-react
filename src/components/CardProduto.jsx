import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'

export default function CardProduto ({ item }) {
    return (
        <a href={`/product/${item.id}`} className="products__list--item">
            <img src={item.imagem} alt="" />
            <h3 className="products__list--price">{item.preco.por} <span>{item.preco.de}</span></h3>
            <h4 className="products__list--name">{item.nome}</h4>
            <div className="product__tag">
                {
                    item.vegano ? 
                    <><img src={PlantImage} alt="planta" /> <span>Vegano</span></> :
                    <><img src={CowImage} alt="vaca" /> <span>Contém Lactose</span></>
                }                
            </div>
        </a>
    )
}

