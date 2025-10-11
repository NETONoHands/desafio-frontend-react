import PlantImage from '../assets/Plant.png'
import CowImage from '../assets/Cow.png'

export function CardProduto ({ item }) {
    
    function formataPreco (valor) {
        return 'R$ ' + (valor / 100).toFixed(2).replace('.', ',');
    }

    return (
        <a href={`/product/${item.id}`} className="products__list--item">
            <img src={item.imagem} alt="" />
            <h3 className="products__list--price">{formataPreco(item.preco.por)} <span>{formataPreco(item.preco.de)}</span></h3>
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

