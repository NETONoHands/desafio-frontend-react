import { useState } from "react"


export function Button({ handleClick}) {

    const [itemCarrinho, setItemCarrinho] = useState({
    "id": "",
    "idProduto": "",
    "nome": "",
    "imagem": "",
    "preco": "",
    "vegano": "",
    "quantidade": "",
    "observacao": ""
});

    function handleClick (e) {

        setItemCarrinho ({...itemCarrinho, [item.id]: item.target.value })
            
    }

        return  <button className="product__button">
                        Comprar
                </button>
}

export default Button;