import ToteImage from "../assets/Tote.svg"



export function ShoppingBag ({ clicaNaBolsa, quantidade }) {

    return <a href="#" className="link__quantity">
                <img onClick={clicaNaBolsa} src={ToteImage} alt="Carrinho" />
                <span className="badge__quantity">{quantidade}</span>
            </a>
}